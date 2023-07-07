<?php

// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2022 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------


namespace crmeb\services;


use crmeb\services\easywechat\broadcast\Client;
use crmeb\services\easywechat\broadcast\ServiceProvider;
use crmeb\services\easywechat\subscribe\ProgramProvider;
use EasyWeChat\Foundation\Application;
use EasyWeChat\Material\Temporary;
use EasyWeChat\MiniProgram\MiniProgram;
use EasyWeChat\Payment\Order;
use EasyWeChat\Payment\Payment;
use EasyWeChat\Support\Collection;
use Psr\Http\Message\ResponseInterface;
use think\exception\ValidateException;
use think\facade\Log;
use think\facade\Route;

/**
 * Class MiniProgramService
 * @package crmeb\services
 * @author xaboy
 * @day 2020-05-11
 */
class MiniProgramService
{
    /**
     * @var MiniProgram
     */
    protected $service;

    protected $config;

    /**
     * MiniProgramService constructor.
     * @param array $config
     */
    public function __construct(array $config)
    {
        $this->config = $config;
        $this->service = new Application($config);
        $this->service->register(new ServiceProvider());
        $this->service->register(new ProgramProvider());
        $this->service->register(new \crmeb\services\easywechat\certficates\ServiceProvider);
        $this->service->register(new \crmeb\services\easywechat\combinePay\ServiceProvider);
        $this->service->register(new \crmeb\services\easywechat\msgseccheck\ServiceProvider);
    }

    /**
     * @return Client
     * @author xaboy
     * @day 2020/7/29
     */
    public function miniBroadcast()
    {
        return $this->service->miniBroadcast;
    }

    /**
     * @return array[]
     * @author xaboy
     * @day 2020/6/18
     */
    public static function getConfig()
    {
        $wechat = systemConfig(['site_url', 'routine_appId', 'routine_appsecret']);
        $payment = systemConfig(['pay_routine_mchid', 'pay_routine_key', 'pay_routine_client_cert', 'pay_routine_client_key', 'pay_weixin_open',
            'wechat_service_merid', 'wechat_service_key', 'wechat_service_v3key', 'wechat_service_client_cert', 'wechat_service_client_key', 'wechat_service_serial_no']);
        return [
            'app_id' => $wechat['routine_appId'],
            'secret' => $wechat['routine_appsecret'],
            'mini_program' => [
                'app_id' => $wechat['routine_appId'],
                'secret' => $wechat['routine_appsecret'],
                'token' => '',
                'aes_key' => '',
            ],
            'payment' => [
                'app_id' => $wechat['routine_appId'],
                'merchant_id' => trim($payment['pay_routine_mchid']),
                'key' => trim($payment['pay_routine_key']),
                'cert_path' => (app()->getRootPath() . 'public' . $payment['pay_routine_client_cert']),
                'key_path' => (app()->getRootPath() . 'public' . $payment['pay_routine_client_key']),
                'notify_url' => $wechat['site_url'] . Route::buildUrl('routineNotify')->build(),
                'pay_routine_client_key' => $payment['pay_routine_client_key'],
                'pay_routine_client_cert' => $payment['pay_routine_client_cert'],
            ],
            'service_payment' => [
                'merchant_id' => trim($payment['wechat_service_merid']),
                'key' => trim($payment['wechat_service_key']),
                'type' => 'routine',
                'cert_path' => (app()->getRootPath() . 'public' . $payment['wechat_service_client_cert']),
                'key_path' => (app()->getRootPath() . 'public' . $payment['wechat_service_client_key']),
                'pay_weixin_client_cert' => $payment['wechat_service_client_cert'],
                'pay_weixin_client_key' => $payment['wechat_service_client_key'],
                'serial_no' => trim($payment['wechat_service_serial_no']),
                'apiv3_key' => trim($payment['wechat_service_v3key']),
            ]
        ];
    }


    /**
     * @return MiniProgramService
     * @author xaboy
     * @day 2020/6/2
     */
    public static function create()
    {
        return new self(self::getConfig());
    }

    /**
     * 支付
     * @return Payment
     */
    public function paymentService()
    {
        return $this->service->payment;
    }

    /**
     * 小程序接口
     * @return MiniProgram
     */
    public function miniProgram()
    {
        return $this->service->mini_program;
    }

    /**
     * @return \EasyWeChat\Material\Material|mixed
     * @author xaboy
     * @day 2020/7/29
     */
    public function material()
    {
        return $this->service->mini_program->material_temporary;
    }

    /**
     * @param $sessionKey
     * @param $iv
     * @param $encryptData
     * @return mixed
     * @author xaboy
     * @day 2020/6/18
     */
    public function encryptor($sessionKey, $iv, $encryptData)
    {
        return $this->miniProgram()->encryptor->decryptData($sessionKey, $iv, $encryptData);
    }

    /**
     * 上传临时素材接口
     * @return Temporary
     */
    public function materialTemporaryService()
    {
        return $this->miniProgram()->material_temporary;
    }

    /**
     * 客服消息接口
     */
    public function staffService()
    {
        return $this->miniProgram()->staff;
    }

    /**
     * @param $code
     * @return mixed
     * @author xaboy
     * @day 2020/6/18
     */
    public function getUserInfo($code)
    {
        $userInfo = $this->miniProgram()->sns->getSessionKey($code);
        return $userInfo;
    }

    /**
     * @return \EasyWeChat\MiniProgram\QRCode\QRCode
     * @author xaboy
     * @day 2020/6/18
     */
    public function qrcodeService()
    {
        return $this->miniProgram()->qrcode;
    }

    /**
     * 生成支付订单对象
     * @param $openid
     * @param $out_trade_no
     * @param $total_fee
     * @param $attach
     * @param $body
     * @param string $detail
     * @param string $trade_type
     * @param array $options
     * @return Order
     */
    protected function paymentOrder($openid, $out_trade_no, $total_fee, $attach, $body, $detail = '', $trade_type = 'JSAPI', $options = [])
    {
        $total_fee = bcmul($total_fee, 100, 0);
        $order = array_merge(compact('openid', 'out_trade_no', 'total_fee', 'attach', 'body', 'detail', 'trade_type'), $options);
        if ($order['detail'] == '') unset($order['detail']);
        return new Order($order);
    }

    /**
     * 获得下单ID
     * @param $openid
     * @param $out_trade_no
     * @param $total_fee
     * @param $attach
     * @param $body
     * @param string $detail
     * @param string $trade_type
     * @param array $options
     * @return mixed
     */
    public function paymentPrepare($openid, $out_trade_no, $total_fee, $attach, $body, $detail = '', $trade_type = 'JSAPI', $options = [])
    {
        $order = $this->paymentOrder($openid, $out_trade_no, $total_fee, $attach, $body, $detail, $trade_type, $options);
        $result = $this->paymentService()->prepare($order);
        if ($result->return_code == 'SUCCESS' && $result->result_code == 'SUCCESS') {
            return $result->prepay_id;
        } else {
            if ($result->return_code == 'FAIL') {
                throw new ValidateException('微信支付错误返回：' . $result->return_msg);
            } else if (isset($result->err_code)) {
                throw new ValidateException('微信支付错误返回：' . $result->err_code_des);
            } else {
                throw new ValidateException('没有获取微信支付的预支付ID，请重新发起支付!');
            }
        }
    }

    /**
     * 获得jsSdk支付参数
     * @param $openid
     * @param $out_trade_no
     * @param $total_fee
     * @param $attach
     * @param $body
     * @param string $detail
     * @param string $trade_type
     * @param array $options
     * @return array|string
     */
    public function jsPay($openid, $out_trade_no, $total_fee, $attach, $body, $detail = '', $trade_type = 'JSAPI', $options = [])
    {
        return $this->paymentService()->configForJSSDKPayment($this->paymentPrepare($openid, $out_trade_no, $total_fee, $attach, $body, $detail, $trade_type, $options));
    }

    /**
     * 使用商户订单号退款
     * @param $orderNo
     * @param $refundNo
     * @param $totalFee
     * @param null $refundFee
     * @param null $opUserId
     * @param string $refundReason
     * @param string $type
     * @param string $refundAccount
     * @return Collection|ResponseInterface
     */
    public function refund($orderNo, $refundNo, $totalFee, $refundFee = null, $opUserId = null, $refundReason = '', $type = 'out_trade_no', $refundAccount = 'REFUND_SOURCE_UNSETTLED_FUNDS')
    {
        if (empty($this->config['payment']['pay_routine_client_key']) || empty($this->config['payment']['pay_routine_client_cert'])) {
            throw new \Exception('请配置微信支付证书');
        }
        $totalFee = floatval($totalFee);
        $refundFee = floatval($refundFee);
        return $this->paymentService()->refund($orderNo, $refundNo, $totalFee, $refundFee, $opUserId, $type, $refundAccount, $refundReason);
    }

    /**
     * 发送订阅消息
     * @param string $touser 接收者（用户）的 openid
     * @param string $templateId 所需下发的订阅模板id
     * @param array $data 模板内容，格式形如 { "key1": { "value": any }, "key2": { "value": any } }
     * @param string $link 击模板卡片后的跳转页面，仅限本小程序内的页面。支持带参数,（示例index?foo=bar）。该字段不填则模板无跳转。
     * @return \EasyWeChat\Support\Collection|null
     * @throws \EasyWeChat\Core\Exceptions\HttpException
     * @throws \EasyWeChat\Core\Exceptions\InvalidArgumentException
     */
    public function sendSubscribeTemlate(string $touser, string $templateId, array $data, string $link = '')
    {
        return $this->miniprogram()->now_notice->to($touser)->template($templateId)->andData($data)->withUrl($link)->send();
    }


    /**
     * @param $orderNo
     * @param array $opt
     * @return bool
     * @author xaboy
     * @day 2020/6/18
     */
    public function payOrderRefund($orderNo, array $opt)
    {
        if (!isset($opt['pay_price'])) throw new ValidateException('缺少pay_price');
        $totalFee = floatval(bcmul($opt['pay_price'], 100, 0));
        $refundFee = isset($opt['refund_price']) ? floatval(bcmul($opt['refund_price'], 100, 0)) : null;
        $refundReason = isset($opt['desc']) ? $opt['desc'] : '';
        $refundNo = isset($opt['refund_id']) ? $opt['refund_id'] : $orderNo;
        $opUserId = isset($opt['op_user_id']) ? $opt['op_user_id'] : null;
        $type = isset($opt['type']) ? $opt['type'] : 'out_trade_no';
        $refundAccount = isset($opt['refund_account']) ? $opt['refund_account'] : 'REFUND_SOURCE_UNSETTLED_FUNDS';
        try {
            $res = ($this->refund($orderNo, $refundNo, $totalFee, $refundFee, $opUserId, $refundReason, $type, $refundAccount));
            if ($res->return_code == 'FAIL') throw new ValidateException('退款失败:' . $res->return_msg);
            if (isset($res->err_code)) throw new ValidateException('退款失败:' . $res->err_code_des);
        } catch (\Exception $e) {
            throw new ValidateException($e->getMessage());
        }
        return true;
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     * @throws \EasyWeChat\Core\Exceptions\FaultException
     * @author xaboy
     * @day 2020/6/18
     */
    public function handleNotify()
    {
        $this->service->payment = new PaymentService($this->service->merchant);
        return $this->service->payment->handleNotify(function ($notify, $successful) {
            Log::info('小程序支付回调' . var_export($notify, 1));
            if (!$successful) return;
            try {
                event('pay_success_' . $notify['attach'], ['order_sn' => $notify['out_trade_no'], 'data' => $notify]);
            } catch (\Exception $e) {
                Log::info('小程序支付回调失败:' . $e->getMessage());
                return false;
            }
            return true;
        });
    }

    /**
     * @return easywechat\combinePay\Client
     */
    public function combinePay()
    {
        return $this->service->combinePay;
    }

    public function handleCombinePayNotify($type)
    {
        $this->service->combinePay->handleNotify(function ($notify, $successful) use ($type) {
            Log::info('微信支付成功回调' . var_export($notify, 1));
            if (!$successful) return false;
            try {
                event('pay_success_' . $type, ['order_sn' => $notify['combine_out_trade_no'], 'data' => $notify, 'is_combine' => 1]);
            } catch (\Exception $e) {
                Log::info('微信支付回调失败:' . $e->getMessage());
                return false;
            }
            return true;
        });
    }


    /**
     * 获取模版标题的关键词列表
     * @param string $tid
     * @return mixed
     */
    public function getSubscribeTemplateKeyWords(string $tid)
    {
//        try {
            $res = $this->miniprogram()->now_notice->getPublicTemplateKeywords($tid);
            if (isset($res['errcode']) && $res['errcode'] == 0 && isset($res['data'])) {
                return $res['data'];
            } else {
                throw new ValidateException($res['errmsg']);
            }
//        } catch (\Throwable $e) {
//            throw new ValidateException($e);
//        }
    }

    /**
     * 添加订阅消息模版
     * @param string $tid
     * @param array $kidList
     * @param string $sceneDesc
     * @return mixed
     */
    public function addSubscribeTemplate(string $tid, array $kidList, string $sceneDesc = '')
    {
        try {
            $res = $this->miniprogram()->now_notice->addTemplate($tid, $kidList, $sceneDesc);
            if (isset($res['errcode']) && $res['errcode'] == 0 && isset($res['priTmplId'])) {
                return $res['priTmplId'];
            } else {
                throw new ValidateException($res['errmsg']);
            }
        } catch (\Throwable $e) {
            throw new ValidateException($e);
        }
    }

    public function getPrivateTemplates()
    {
        try{
            $res = $this->miniprogram()->now_notice->getPrivateTemplates();
            return $res;
            if (isset($res['errcode']) && $res['errcode'] == 0 && isset($res['priTmplId'])) {
                return $res['priTmplId'];
            } else {
                throw new ValidateException($res['errmsg']);
            }
        } catch (\Throwable $e) {
            throw new ValidateException($e);
        }
    }

    public function msgSecCheck($userInfo,$content,$scene,$type = 0)
    {
        //$media_type 1:音频;2:图片
        //scene 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志）
        if (!in_array($scene,[1,2,3,4])) {
            throw new ValidateException('使用场景类型错误');
        }
        if (!isset($userInfo->wechat->routine_openid)) return ;
        $openid = $userInfo->wechat->routine_openid;
        if ($type) {
            return $this->service->msgSec->mediaSecCheck($content,$scene,$openid,$type);
        } else {
            return $this->service->msgSec->msgSecCheck($content,$scene,$openid);
        }
    }
}

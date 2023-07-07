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
namespace app\common\repositories\system\financial;


use app\common\dao\system\financial\FinancialDao;
use app\common\repositories\BaseRepository;
use app\common\repositories\system\merchant\MerchantRepository;
use app\common\repositories\system\serve\ServeOrderRepository;
use app\common\repositories\user\UserBillRepository;
use crmeb\jobs\ChangeMerchantStatusJob;
use crmeb\jobs\SendSmsJob;
use crmeb\services\WechatService;
use FormBuilder\Factory\Elm;
use think\exception\ValidateException;
use think\facade\Db;
use think\facade\Queue;
use think\facade\Route;

class FinancialRepository extends BaseRepository
{
    public function __construct(FinancialDao $dao)
    {
        $this->dao = $dao;
    }

    public function financialAccountForm($id)
    {
        $merchant = app()->make(MerchantRepository::class)->search(['mer_id' => $id])->find();

        $form = Elm::createForm(Route::buildUrl('merchantFinancialAccountSave',['id' => $id])->build());
        $form->setRule([
            Elm::radio('financial_type', '转账类型', $merchant->financial_type)
                ->setOptions([
                    ['value' => 1, 'label' => '银行卡'],
                    ['value' => 2, 'label' => '微信'],
                    ['value' => 3, 'label' => '支付宝'],
                ])->control([
                    [
                        'value' => 1,
                        'rule'=> [
                            Elm::input('name', '姓名')->value($merchant->financial_bank->name??'')->required(),
                            Elm::input('bank', '开户银行')->value($merchant->financial_bank->bank??'')->required(),
                            Elm::input('bank_code', '银行卡号')->value($merchant->financial_bank->bank_code??'')->required(),
                        ]
                    ],
                    [
                        'value' => 2,
                        'rule'=> [
                            Elm::input('name', '姓名')->value($merchant->financial_wechat->name??'')->required(),
                            Elm::input('wechat', '微信号')->value($merchant->financial_wechat->wechat??'')->required(),
                            Elm::frameImage('wechat_code', '收款二维码', '/' . config('admin.merchant_prefix') . '/setting/uploadPicture?field=wechat_code&type=1')->value($merchant->financial_wechat->wechat_code??'')->modal(['modal' => false])->width('896px')->height('480px'),
                        ]
                    ],
                    [
                        'value' => 3,
                        'rule'=> [
                            Elm::input('name', '姓名')->value($merchant->financial_alipay->name??'')->required(),
                            Elm::input('alipay', '支付宝账号')->value($merchant->financial_alipay->alipay??'')->required(),
                            Elm::frameImage('alipay_code', '收款二维码', '/' . config('admin.merchant_prefix') . '/setting/uploadPicture?field=alipay_code&type=1')->value($merchant->financial_alipay->alipay_code??'')->modal(['modal' => false])->width('896px')->height('480px'),
                        ]
                    ],

                ]),
        ]);
        return $form->setTitle('转账信息');
    }

    /**
     * TODO 保存转账信息
     * @param int $merId
     * @param array $data
     * @author Qinii
     * @day 3/18/21
     */
    public function saveAccount(int $merId,array $data)
    {
        switch ($data['financial_type'])
        {
            case 1:
                $key = 'financial_bank' ;
                $update = [
                    'name' => $data['name'],
                    'bank' => $data['bank'],
                    'bank_code' => $data['bank_code'],
                ];
                break;
            case 2:
                $key = 'financial_wechat' ;
                $update = [
                    'name' => $data['name'],
                    //'idcard' => $data['idcard'],
                    'wechat' => $data['wechat'],
                    'wechat_code' => $data['wechat_code'],
                ];
                break;
            case 3:
                $key = 'financial_alipay' ;
                $update = [
                    'name' => $data['name'],
                    //'idcard' => $data['idcard'],
                    'alipay' => $data['alipay'],
                    'alipay_code' => $data['alipay_code'],
                ];
                break;
        }
        return app()->make(MerchantRepository::class)->update($merId,[$key => json_encode($update),'financial_type' => $data['financial_type']]);
    }

    public function applyForm(int $merId)
    {
        $merchant = app()->make(MerchantRepository::class)->search(['mer_id' => $merId])->field('mer_id,mer_name,mer_money,financial_bank,financial_wechat,financial_alipay,financial_type')->find();
        $extract_minimum_line = systemConfig('extract_minimum_line') ?: 0;
        $extract_minimum_num = systemConfig('extract_minimum_num');
        $_line = bcsub($merchant->mer_money,$extract_minimum_line,2);
        $_extract = ($_line < 0) ? 0 : $_line;
        $form = Elm::createForm(Route::buildUrl('merchantFinancialCreateSave')->build());
        $form->setRule([
            [
                'type' => 'span',
                'title' => '商户名称:',
                'native' => false,
                'children' => ["$merchant->mer_name"]
            ],
            [
                'type' => 'span',
                'title' => '商户ID:',
                'native' => false,
                'children' => ["$merId"]
            ],
//            [
//                'type' => 'span',
//                'title' => '',
//                'children' => []
//            ],
            [
                'type' => 'span',
                'title' => '提示:',
                'native' => false,
                'children' => ['最低可提现额度:'.$extract_minimum_line.'元;最低提现金额：'.$extract_minimum_num.'元']
            ],
            [
                'type' => 'span',
                'title' => '商户余额:',
                'native' => false,
                'children' => ["$merchant->mer_money"]
            ],
            [
                'type' => 'span',
                'native' => false,
                'title' => '商户可提现金额:',
                'children' => ["$_extract"]
            ],

            Elm::radio('financial_type', '转账类型:', $merchant->financial_type)
                ->setOptions([
                    ['value' => 1, 'label' => '银行卡'],
                    ['value' => 2, 'label' => '微信'],
                    ['value' => 3, 'label' => '支付宝'],
                ])->control([
                    [
                        'value' => 1,
                        'rule'=> [
                            [
                                'type' => 'span',
                                'title' => '姓名',
                                'native' => false,
                                'children' => [$merchant->financial_bank->name??'未填写']
                            ],
                            [
                                'type' => 'span',
                                'title' => '开户银行',
                                'native' => false,
                                'children' => [$merchant->financial_bank->bank??'未填写']
                            ],
                            [
                                'type' => 'span',
                                'title' => '银行卡号',
                                'native' => false,
                                'children' => [$merchant->financial_bank->bank_code??'未填写']
                            ],
                        ]
                    ],
                    [
                        'value' => 2,
                        'rule'=> [
                            [
                                'type' => 'span',
                                'title' => '姓名',
                                'native' => false,
                                'children' => [$merchant->financial_wechat->name??'未填写']
                            ],
                            [
                                'type' => 'span',
                                'title' => '微信号',
                                'native' => false,
                                'children' => [$merchant->financial_wechat->wechat??'未填写']
                            ],
                            [
                                'type' => 'img',
                                'title' => '收款二维码',
                                'native' => false,
                                'attrs' => ['src' => $merchant->financial_wechat->wechat_code ?? ''],
                                'style' => ['width' => '86px','height' => '48px']
                            ],
                        ]
                    ],
                    [
                        'value' => 3,
                        'rule'=> [
                            [
                                'type' => 'span',
                                'title' => '姓名',
                                'native' => false,
                                'children' => [$merchant->financial_alipay->name??'未填写']
                            ],
                            [
                                'type' => 'span',
                                'title' => '支付宝账号',
                                'native' => false,
                                'children' => [$merchant->financial_alipay->alipay??'未填写']
                            ],
                            [
                                'type' => 'img',
                                'title' => '收款二维码',
                                'native' => false,
                                'attrs' => ['src' => $merchant->financial_alipay->alipay_code ?? ''],
                                'style' => ['width' => '86px','height' => '48px']
                            ],
                        ]
                    ],

                ]),
            Elm::number('extract_money', '申请金额:')->value($extract_minimum_num)->required(),
        ]);
        return $form->setTitle('申请转账');
    }

    /**
     * TODO 保存申请
     * @param int $merId
     * @param array $data
     * @author Qinii
     * @day 3/19/21
     */
    public function saveApply(int $merId,array $data)
    {
        $make = app()->make(MerchantRepository::class);
        $merchant = $make->search(['mer_id' => $merId])->field('mer_id,mer_name,mer_money,financial_bank,financial_wechat,financial_alipay')->find();

        if($merchant['mer_money'] <= 0) throw new ValidateException('余额不足');

        if($data['financial_type'] == 1){
            $financial_account = $merchant->financial_bank;
        }elseif ($data['financial_type'] == 2){
            $financial_account = $merchant->financial_wechat;
        }elseif ($data['financial_type'] == 3){
            $financial_account = $merchant->financial_alipay;
        }
        if(empty($financial_account)) throw new ValidateException('未填写银行转账信息');

        $extract_maxmum_num = systemConfig('extract_maxmum_num');
        if($extract_maxmum_num > 0 && $data['extract_money'] > $extract_maxmum_num) throw new ValidateException('单次申请金额不得大于'.$extract_maxmum_num.'元');
        //最低提现额度
        $extract_minimum_line = systemConfig('extract_minimum_line') ? systemConfig('extract_minimum_line') : 0;
        $_line = bcsub($merchant->mer_money,$extract_minimum_line,2);
        if($_line < $extract_minimum_line) throw new ValidateException('余额大于'.$extract_minimum_line.'才可提现');
        if($data['extract_money'] > $_line) throw new ValidateException('提现金额大于可提现金额');

        //最低提现金额
        $extract_minimum_num = systemConfig('extract_minimum_num');
        if($data['extract_money'] < $extract_minimum_num) throw new ValidateException('最低提现金额'.$extract_minimum_num);

        //可提现金额
        $_line = bcsub($merchant->mer_money,$extract_minimum_line,2);
        if($_line < 0) throw new ValidateException('余额大于'.$extract_minimum_line.'才可提现');

        //最低提现金额
        if($data['extract_money'] < $extract_minimum_num) throw new ValidateException('最低提现金额'.$extract_minimum_num);

        //不足提现最低金额
        if($_line < $extract_minimum_num) throw new ValidateException('提现金额不足');

        $_money = bcsub($merchant['mer_money'],$data['extract_money'],2);

        $sn = date('YmdHis'.$merId);
        $ret = [
            'status' => 0,
            'mer_id' => $merId,
            'mer_money' => $_money,
            'financial_sn' => $sn,
            'extract_money' => $data['extract_money'],
            'financial_type' => $data['financial_type'],
            'financial_account' => json_encode($financial_account,JSON_UNESCAPED_UNICODE),
            'financial_status' => 0,
            'mer_admin_id' => $data['mer_admin_id'],
            'mark'  => $datap['mark']??'',
            'refusal' => '',
        ];
        Db::transaction(function()use($merId,$ret,$data,$make){
            $this->dao->create($ret);
            $make->subMoney($merId,(float)$data['extract_money']);
        });
    }


    public function refundMargin($merId, $adminId)
    {
        $res = app()->make(MerchantRepository::class)->get($merId);
        if ($res['is_margin'] == -1) throw new ValidateException('请勿重复申请');

        if (!in_array($res['is_margin'],[10,-10]) || $res['margin'] <= 0)
            throw new ValidateException('无可退保证金');

        $order = app()->make(ServeOrderRepository::class)->getWhere([
                'mer_id' => $res['mer_id'],
                'status' => 1,
                'type'   => 10,
            ]);
        if (!$order) throw new ValidateException('未查询到支付订单');
        $financial_account = [
            'name'     => '保证金退款',
            'order_id' => $order['order_id'],
            'order_sn' => $order['order_sn'],
            'pay_price'=> $order['pay_price'],
            'pay_type' => 1,
            'ot_margin'=> $res->ot_margin
        ];
        $sn = 'mm'.date('YmdHis'.$merId);

        $ret = [
            'status' => 0,
            'mer_id' => $merId,
            'mer_money' => 0,
            'financial_sn' => $sn,
            'extract_money' => $res['margin'],
            'financial_type' => 1,
            'financial_account' => json_encode($financial_account,JSON_UNESCAPED_UNICODE),
            'financial_status' => 0,
            'mer_admin_id' => $adminId,
            'mark'  => '',
            'type'  => 1
        ];

        return Db::transaction(function()use($ret,$res){
            $this->dao->create($ret);
//            $res->margin = 0;
            $res->is_margin = -1;
            $res->save();
        });
    }


    /**
     * TODO 商户列表
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return array
     * @author Qinii
     * @day 3/19/21
     */
    public function getAdminList(array $where,int $page,int $limit)
    {
        $where['is_del'] = 0;
        $query = $this->dao->search($where)->with([
            'merchant' => function($query){
                $query->field('mer_id,mer_name,is_trader,mer_avatar,type_id,mer_phone,mer_address,is_margin,margin,real_name');
                $query->with([
                    'merchantType',
                    'marginOrder' => function($query){
                        $query->field('order_id,order_sn,pay_price')->where('status',10);
                    }
                ]);
            }
        ]);
        $count = $query->count();
        $list = $query->page($page, $limit)->select();

        return compact('count','list');
    }


    /**
     * TODO 取消/拒绝 变更状态返还余额
     * @param $merId
     * @param $id
     * @param $data
     * @author Qinii
     * @day 3/19/21
     */
    public function cancel(?int $merId,int $id,array $data)
    {
        $where = [
            'financial_id' => $id,
            'is_del' => 0,
            'status' => 0
        ];
        if($merId) $where['mer_id'] = $merId;
        $res = $this->dao->getWhere($where);
        if(!$res) throw new ValidateException('数据不存在');
        if($res['financial_status'] == 1) throw new ValidateException('当前状态无法完成此操作');
        $merId = $merId?? $res['mer_id'];
        Db::transaction(function()use($merId,$res,$id,$data) {
            $this->dao->update($id,$data);
            app()->make(MerchantRepository::class)->addMoney($merId, (float)$res['extract_money']);
        });
    }

    /**
     * TODO
     * @param $id
     * @return \FormBuilder\Form
     * @author Qinii
     * @day 4/21/21
     */
    public function markForm($id)
    {
        $data = $this->dao->get($id);
        $form = Elm::createForm(Route::buildUrl('merchantFinancialMark', ['id' => $id])->build());
        $form->setRule([
            Elm::text('mark', '备注', $data['mark'])->required(),
        ]);
        return $form->setTitle('修改备注');
    }

    /**
     * TODO
     * @param $id
     * @return \FormBuilder\Form
     * @author Qinii
     * @day 4/21/21
     */
    public function adminMarkForm($id)
    {
        $data = $this->dao->get($id);
        $form = Elm::createForm(Route::buildUrl('systemFinancialMark', ['id' => $id])->build());
        $form->setRule([
            Elm::text('admin_mark', '备注', $data['admin_mark'])->required(),
        ]);
        return $form->setTitle('修改备注');
    }

    public function adminMarginMarkForm($id)
    {
        $data = $this->dao->get($id);
        $form = Elm::createForm(Route::buildUrl('systemMarginRefundMark', ['id' => $id])->build());
        $form->setRule([
            Elm::text('admin_mark', '备注', $data['admin_mark'])->required(),
        ]);
        return $form->setTitle('修改备注');
    }

    public function statusForm($id)
    {
        $data = $this->dao->get($id);
        if (!$data['merchant']->marginOrder) throw new ValidateException('未查询到缴费记录');
        if ($data['status'] !== 0) throw new ValidateException('请勿重复审核');
        $form = Elm::createForm(Route::buildUrl('systemMarginRefundSwitchStatus', ['id' => $id])->build());
        $form->setRule([
            Elm::input('mer_name','商户名称', $data['merchant']->mer_name)->disabled(true),
            Elm::input('mer_id','商户ID', $data['mer_id'])->disabled(true),
            Elm::input('type_name','店铺类型', $data['merchant']->merchantType->type_name)->disabled(true),
            Elm::input('pay_price','保证金额度', $data['merchant']->marginOrder->pay_price)->disabled(true),
            Elm::input('sub','扣费金额', bcsub($data['merchant']->marginOrder->pay_price, $data['extract_money'], 2))->disabled(true),
            Elm::input('refund','退回金额', $data['extract_money'])->disabled(true),
            Elm::radio('status', '审核', -1)->setOptions([
                ['value' => 1, 'label' => '同意'],
                ['value' => -1, 'label' => '拒绝'],
            ])->control([
                [
                    'value' => -1,
                    'rule' => [
                        Elm::input('refusal', '拒绝原因')->required()
                    ]
                ],])
        ]);
        return $form->setTitle('退保证金审核');
    }

    /**
     * TODO 详情
     * @param $id
     * @return array|\think\Model|null
     * @author Qinii
     * @day 4/22/21
     */
    public function detail($id,$merId=0)
    {
        $where[$this->dao->getPk()] = $id;
        if($merId) $where['mer_id'] = $merId;
        $data = $this->dao->getSearch($where)->with(['merchant' => function($query){
            $query->field('mer_id,mer_name,mer_avatar');
        }])->find();
        if(!$data) throw new ValidateException('数据不存在');
        return $data;
    }

    /**
     * TODO 头部统计
     * @return array
     * @author Qinii
     * @day 4/22/21
     */
    public function getTitle()
    {
        $make = app()->make(MerchantRepository::class);
        //应付商户金额 = 所有商户的余额之和
        $all = $make->search(['is_del' => 0])->sum('mer_money');
        //商户可提现金额 = （每个商户的余额 - 平台设置的最低提现额度） 之和
        $extract_minimum_line = systemConfig('extract_minimum_line') ?: 0;
        $ret = $make->search(['is_del' => 0])->where('mer_money','>',$extract_minimum_line)
            ->field("sum(mer_money - $extract_minimum_line) as  money")
            ->find();
        $money = $ret->money;
        //申请转账的商户数 = 申请提现且未转账的商户数量
        $where = [
            "financial_status" => 0
        ];
        $query = $this->dao->getSearch($where)->where('status','>',-1);
        $count = $query->group('mer_id')->count();
        //申请转账的总金额 = 申请提现已通过审核，且未转账的申请金额 之和
        $where['status'] = 1;
        $all_ = $this->dao->getSearch($where)->sum('extract_money');
        $where['status'] = 0;
        $all_0 = $this->dao->getSearch($where)->sum('extract_money');
        $merLockMoney = app()->make(UserBillRepository::class)->merchantLickMoney();
        $stat = [
            [
                'className' => 'el-icon-s-goods',
                'count' => $all,
                'field' => '元',
                'name' => '应付商户金额'
            ],
            [
                'className' => 'el-icon-s-goods',
                'count' => $money,
                'field' => '元',
                'name' => '商户可提现金额'
            ],
            [
                'className' => 'el-icon-s-goods',
                'count' => $count,
                'field' => '个',
                'name' => '申请转账的商户数'
            ],
            [
                'className' => 'el-icon-s-goods',
                'count' => $all_,
                'field' => '元',
                'name' => '申请转账的总金额'
            ],
            [
                'className' => 'el-icon-s-goods',
                'count' => $all_0,
                'field' => '元',
                'name' => '待审核的总金额'
            ],
            [
                'className' => 'el-icon-s-goods',
                'count' => $merLockMoney,
                'field' => '元',
                'name' => '商户冻结金额'
            ],
        ];

        return $stat;
    }

    public function updateMargin($id, $data)
    {
        $where = [
            'financial_id' => $id,
            'is_del' => 0,
            'status' => 0
        ];

        $res = $this->dao->getWhere($where);
        if(!$res) throw new ValidateException('数据不存在');
        if ($data['status'] == 1) {

        } else {
            $this->dao->update($id, $data);
        }
    }

    public function switchStatus($id, $type, $data)
    {
        $where = [
            'financial_id' => $id,
            'is_del' => 0,
            'status' => 0,
            'type'   => $type
        ];

        $res = $this->dao->getWhere($where);
        if(!$res) throw new ValidateException('数据不存在');

        switch ($type) {
            case 0:
                if ($data['status'] == -1) $this->cancel(null,$id,$data);
                break;
            case 1:
                if ($data['status'] == 1) {
                    $this->agree($res);
                    $data['financial_status'] = 1;
                    $tempId = 'REFUND_MARGIN_SUCCESS';
                }else if ($data['status'] == -1) {
//                    $res->merchant->margin = $res['extract_money'];
                    $res->merchant->is_margin = -10;
                    $res->merchant->save();
                    $tempId = 'REFUND_MARGIN_FAIL';
                }
                Queue::push(SendSmsJob::class, [
                    'tempId' => $tempId,
                    'id' => [
                        'name' => $res->merchant->mer_name,
                        'time' => $res->create_time,
                        'phone' => $res->merchant->mer_phone
                    ]]);
                break;
        }

       return $this->dao->update($id, $data);
    }

    public function refundShow($id)
    {
        $where = [
            'financial_id' => $id,
            'type'  => 1,
            'status'=> 1
        ];
        $res = $this->dao->getWhere($where, '*', ['merchant' => ['merchantType']]);
        if (!$res) throw new ValidateException('数据不存在');
        return $res;
    }

    /**
     * TODO 同意退保证金
     * @param $res
     * @author Qinii
     * @day 1/27/22
     */
    public function agree($res)
    {
        //验证
        $comp = bccomp($res['financial_account']->pay_price, $res['extract_money'], 2);
        if ($comp  == -1)
            throw new ValidateException('申请退款金额：'.$res['extract_money'].',大于支付保证金：'.$res['financial_account']->pay_price);

//        if (bccomp($res['merchant']['margin'], $res['extract_money'],2) == -1)
//            throw new ValidateException('申请退款金额：'.$res['extract_money'].',大于剩余保证金：'.$res['merchant']['margin']);

        Db::transaction(function () use ($res){
            //退款
            $data = [
                'refund_id' => $res['financial_account']->order_sn,
                'pay_price' => $res['financial_account']->pay_price,
                'refund_price' => $res['extract_money']
            ];
            WechatService::create()->payOrderRefund($res['financial_account']->order_sn, $data);

            //改订单
            $order = app()->make(ServeOrderRepository::class)->get($res['financial_account']->order_id);
            $order->status = 20;
            $order->save();

            //关店
            $res->merchant->is_margin = $res['merchant']['merchantType']['is_margin'];
            $res->merchant->margin    = $res['merchant']['merchantType']['margin'];
            if ($res['merchant']['merchantType']['is_margin'] == 1) {
                $res->merchant->mer_state = 0;
                Queue::push(ChangeMerchantStatusJob::class, $res['mer_id']);
            }
            $res->merchant->save();

        });

    }
}

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


namespace app\common\repositories\system\merchant;


use app\common\dao\system\merchant\MerchantDao;
use app\common\model\store\order\StoreOrder;
use app\common\model\store\product\ProductReply;
use app\common\repositories\BaseRepository;
use app\common\repositories\store\coupon\StoreCouponRepository;
use app\common\repositories\store\coupon\StoreCouponUserRepository;
use app\common\repositories\store\product\ProductCopyRepository;
use app\common\repositories\store\product\ProductRepository;
use app\common\repositories\store\product\SpuRepository;
use app\common\repositories\store\shipping\ShippingTemplateRepository;
use app\common\repositories\store\StoreCategoryRepository;
use app\common\repositories\system\attachment\AttachmentRepository;
use app\common\repositories\user\UserBillRepository;
use app\common\repositories\user\UserRelationRepository;
use app\common\repositories\user\UserVisitRepository;
use app\common\repositories\wechat\RoutineQrcodeRepository;
use crmeb\jobs\ClearMerchantStoreJob;
use crmeb\services\QrcodeService;
use crmeb\services\UploadService;
use crmeb\services\WechatService;
use FormBuilder\Exception\FormBuilderException;
use FormBuilder\Factory\Elm;
use FormBuilder\Form;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\Exception;
use think\exception\ValidateException;
use think\facade\Db;
use think\facade\Queue;
use think\facade\Route;
use think\Model;

/**
 * Class MerchantRepository
 * @package app\common\repositories\system\merchant
 * @mixin MerchantDao
 * @author xaboy
 * @day 2020-04-16
 */
class MerchantRepository extends BaseRepository
{

    /**
     * MerchantRepository constructor.
     * @param MerchantDao $dao
     */
    public function __construct(MerchantDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * @param array $where
     * @param $page
     * @param $limit
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020-04-16
     */
    public function lst(array $where, $page, $limit)
    {
        $query = $this->dao->search($where);
        $count = $query->count($this->dao->getPk());
        $list = $query->page($page, $limit)->setOption('field', [])
            ->with([
                'admin' => function ($query) {
                    $query->field('mer_id,account');
                },
                'merchantCategory',
                'merchantType'
            ])
            ->field('sort, mer_id, mer_name, real_name, mer_phone, mer_address, mark, status, create_time,is_best,is_trader,type_id,category_id,copy_product_num,export_dump_num,is_margin,margin,mer_avatar')->select();
        return compact('count', 'list');
    }

    public function count($where)
    {
        $where['status'] = 1;
        $valid = $this->dao->search($where)->count();
        $where['status'] = 0;
        $invalid = $this->dao->search($where)->count();
        return compact('valid', 'invalid');
    }

    /**
     * @param int|null $id
     * @param array $formData
     * @return Form
     * @throws FormBuilderException
     * @author xaboy
     * @day 2020-04-16
     */
    public function form(?int $id = null, array $formData = [])
    {
        $form = Elm::createForm(is_null($id) ? Route::buildUrl('systemMerchantCreate')->build() : Route::buildUrl('systemMerchantUpdate', ['id' => $id])->build());
        $is_margin = 0;
        if ($formData && $formData['is_margin'] == 10) $is_margin = 1;
        /** @var MerchantCategoryRepository $make */
        $make = app()->make(MerchantCategoryRepository::class);
        $merchantTypeRepository = app()->make(MerchantTypeRepository::class);
        $options = $merchantTypeRepository->getOptions();
        $margin = $merchantTypeRepository->getMargin();

        $config = systemConfig(['broadcast_room_type', 'broadcast_goods_type']);

        $rule = [
            Elm::input('mer_name', '商户名称')->required(),
            Elm::select('category_id', '商户分类')->options(function () use ($make) {
                return $make->allOptions();
            })->requiredNum(),

            Elm::select('type_id', '店铺类型')->disabled($is_margin)->options($options)->requiredNum()->col(12)->control($margin),


            Elm::input('mer_account', '商户账号')->required()->disabled(!is_null($id))->required(!is_null($id)),
            Elm::password('mer_password', '登录密码')->required()->disabled(!is_null($id))->required(!is_null($id)),
            Elm::input('real_name', '商户姓名'),
            Elm::input('mer_phone', '商户手机号')->col(12)->required(),
            Elm::number('commission_rate', '手续费(%)')->col(12),
            Elm::input('mer_keyword', '商户关键字')->col(12),
            Elm::input('mer_address', '商户地址'),
            Elm::input('sub_mchid', '微信分账商户号'),
            Elm::textarea('mark', '备注'),
            Elm::number('sort', '排序', 0)->precision(0)->max(99999),
            $id ? Elm::hidden('status', 1) : Elm::switches('status', '是否开启', 1)->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
            Elm::switches('is_bro_room', '直播间审核', $config['broadcast_room_type'] == 1 ? 0 : 1)->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
            Elm::switches('is_audit', '产品审核', 1)->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
            Elm::switches('is_bro_goods', '直播间商品审核', $config['broadcast_goods_type'] == 1 ? 0 : 1)->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
            Elm::switches('is_best', '是否推荐')->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
            Elm::switches('is_trader', '是否自营')->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
        ];

        $form->setRule($rule);
        return $form->setTitle(is_null($id) ? '添加商户' : '编辑商户')->formData($formData);
    }

    /**
     * @param array $formData
     * @return Form
     * @throws FormBuilderException
     * @author xaboy
     * @day 2020/6/25
     */
    public function merchantForm(array $formData = [])
    {
        $form = Elm::createForm(Route::buildUrl('merchantUpdate')->build());
        $rule = [
            Elm::textarea('mer_info', '店铺简介')->required(),
            Elm::input('service_phone', '服务电话')->required(),
            Elm::frameImage('mer_banner', '店铺Banner(710*200px)', '/' . config('admin.merchant_prefix') . '/setting/uploadPicture?field=mer_banner&type=1')->modal(['modal' => false])->width('896px')->height('480px')->props(['footer' => false]),
            Elm::frameImage('mer_avatar', '店铺头像(120*120px)', '/' . config('admin.merchant_prefix') . '/setting/uploadPicture?field=mer_avatar&type=1')->modal(['modal' => false])->width('896px')->height('480px')->props(['footer' => false]),
            Elm::switches('mer_state', '是否开启', 1)->activeValue(1)->inactiveValue(0)->inactiveText('关')->activeText('开')->col(12),
        ];
        $form->setRule($rule);
        return $form->setTitle('编辑店铺信息')->formData($formData);
    }

    /**
     * @param $id
     * @return Form
     * @throws FormBuilderException
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     * @author xaboy
     * @day 2020-04-16
     */
    public function updateForm($id)
    {
        $data = $this->dao->get($id)->toArray();
        /** @var MerchantAdminRepository $make */
        $make = app()->make(MerchantAdminRepository::class);
        $data['mer_account'] = $make->merIdByAccount($id);
        $data['mer_password'] = '***********';
        if($data['category_id'] == 0){
            $data['category_id'] = '';
        }
        if($data['type_id'] == 0){
            $data['type_id'] = '';
        }
        return $this->form($id, $data);
    }

    /**
     * @param array $data
     * @author xaboy
     * @day 2020-04-17
     */
    public function createMerchant(array $data)
    {
        if ($this->fieldExists('mer_name', $data['mer_name']))
            throw new ValidateException('商户名已存在');
        if ($data['mer_phone'] && isPhone($data['mer_phone']))
            throw new ValidateException('请输入正确的手机号');
        $merchantCategoryRepository = app()->make(MerchantCategoryRepository::class);
        $adminRepository = app()->make(MerchantAdminRepository::class);

        if (!$data['category_id'] || !$merchantCategoryRepository->exists($data['category_id']))
            throw new ValidateException('商户分类不存在');
        if ($adminRepository->fieldExists('account', $data['mer_account']))
            throw new ValidateException('账号已存在');

        /** @var MerchantAdminRepository $make */
        $make = app()->make(MerchantAdminRepository::class);

        $margin = app()->make(MerchantTypeRepository::class)->get($data['type_id']);
        $data['is_margin'] = $margin['is_margin'] ?? -1;
        $data['margin'] = $margin['margin'] ?? 0;
        return Db::transaction(function () use ($data, $make) {
            $account = $data['mer_account'];
            $password = $data['mer_password'];
            unset($data['mer_account'], $data['mer_password']);

            $merchant = $this->dao->create($data);
            $make->createMerchantAccount($merchant, $account, $password);
            app()->make(ShippingTemplateRepository::class)->createDefault($merchant->mer_id);
            app()->make(ProductCopyRepository::class)->defaulCopyNum($merchant->mer_id);
            return $merchant;
        });
    }


    /**
     * @Author:Qinii
     * @Date: 2020/5/30
     * @param $where
     * @param $page
     * @param $limit
     * @return array
     */
    public function getList($where, $page, $limit, $userInfo)
    {
        $field = 'care_count,is_trader,type_id,mer_id,mer_banner,mini_banner,mer_name, mark,mer_avatar,product_score,service_score,postage_score,sales,status,is_best,create_time,long,lat,is_margin';
        $where['status'] = 1;
        $where['mer_state'] = 1;
        $where['is_del'] = 0;
        if (isset($where['location'])) {
            $data = @explode(',', (string)$where['location']);
            if (2 != count(array_filter($data ?: []))) {
                unset($where['location']);
            } else {
                $where['location'] = [
                    'lat' => (float)$data[0],
                    'long' => (float)$data[1],
                ];
            }
        }

        if ($where['keyword'] !== '') {
            app()->make(UserVisitRepository::class)->searchMerchant($userInfo ? $userInfo['uid'] : 0, $where['keyword']);
        }
        $query = $this->dao->search($where)->with(['type_name']);
        $count = $query->count();
        $status = systemConfig('mer_location');
        $list = $query->page($page, $limit)->setOption('field', [])->field($field)->select()
            ->each(function ($item) use ($status, $where) {
                if ($status && $item['lat'] && $item['long'] && isset($where['location']['lat'], $where['location']['long'])) {
                    $distance = getDistance($where['location']['lat'], $where['location']['long'], $item['lat'], $item['long']);
                    if ($distance < 0.9) {
                        $distance = max(bcmul($distance, 1000, 0), 1).'m';
                        if ($distance == '1m') {
                            $distance = '100m以内';
                        }
                    } else {
                        $distance .= 'km';
                    }
                    $item['distance'] = $distance;
                }
                $item['recommend'] = isset($where['delivery_way']) ? $item['CityRecommend'] : $item['AllRecommend'];
                return  $item;
            });

        return compact('count', 'list');
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/30
     * @param int $id
     * @return array|Model|null
     */
    public function merExists(int $id)
    {
        return ($this->dao->get($id));
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/30
     * @param $id
     * @param $userInfo
     * @return array|Model|null
     */
    public function detail($id, $userInfo)
    {
        $merchant = $this->dao->apiGetOne($id)->hidden([
            "real_name", "mer_phone", "reg_admin_id", "sort", "is_del", "is_audit", "is_best", "mer_state", "bank", "bank_number", "bank_name", 'update_time',
            'financial_alipay', 'financial_bank', 'financial_wechat', 'financial_type','mer_take_phone'
        ]);
        $merchant->append(['type_name', 'isset_certificate', 'services_type']);
        $merchant['care'] = false;
        if ($userInfo)
            $merchant['care'] = $this->getCareByUser($id, $userInfo->uid);
        return $merchant;
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/30
     * @param int $merId
     * @param int $userId
     * @return bool
     */
    public function getCareByUser(int $merId, int $userId)
    {
        if (app()->make(UserRelationRepository::class)->getWhere(['type' => 10, 'type_id' => $merId, 'uid' => $userId]))
            return true;
        return false;
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/30
     * @param $merId
     * @param $where
     * @param $page
     * @param $limit
     * @param $userInfo
     * @return mixed
     */
    public function productList($merId, $where, $page, $limit, $userInfo)
    {
        return app()->make(ProductRepository::class)->getApiSearch($merId, $where, $page, $limit, $userInfo);
    }

    /**
     * @Author:Qinii
     * @Date: 2020/5/30
     * @param int $id
     * @return mixed
     */
    public function categoryList(int $id)
    {
        return app()->make(StoreCategoryRepository::class)->getApiFormatList($id, 1);
    }

    public function wxQrcode($merId)
    {
        $siteUrl = systemConfig('site_url');
        $name = md5('mwx' . $merId . date('Ymd')) . '.jpg';
        $attachmentRepository = app()->make(AttachmentRepository::class);
        $imageInfo = $attachmentRepository->getWhere(['attachment_name' => $name]);

        if (isset($imageInfo['attachment_src']) && strstr($imageInfo['attachment_src'], 'http') !== false && curl_file_exist($imageInfo['attachment_src']) === false) {
            $imageInfo->delete();
            $imageInfo = null;
        }
        if (!$imageInfo) {
            $codeUrl = rtrim($siteUrl, '/') . '/pages/store/home/index?id=' . $merId; //二维码链接
            if (systemConfig('open_wechat_share')) {
                $qrcode = WechatService::create(false)->qrcodeService();
                $codeUrl = $qrcode->forever('_scan_url_mer_' . $merId)->url;
            }
            $imageInfo = app()->make(QrcodeService::class)->getQRCodePath($codeUrl, $name);
            if (is_string($imageInfo)) throw new ValidateException('二维码生成失败');

            $imageInfo['dir'] = tidy_url($imageInfo['dir'], null, $siteUrl);

            $attachmentRepository->create(systemConfig('upload_type') ?: 1, -2, $merId, [
                'attachment_category_id' => 0,
                'attachment_name' => $imageInfo['name'],
                'attachment_src' => $imageInfo['dir']
            ]);
            $urlCode = $imageInfo['dir'];
        } else $urlCode = $imageInfo['attachment_src'];
        return $urlCode;
    }

    public function routineQrcode($merId)
    {
        $name = md5('smrt' . $merId . date('Ymd')) . '.jpg';
        return tidy_url(app()->make(QrcodeService::class)->getRoutineQrcodePath($name, 'pages/store/home/index', 'id=' . $merId), 0);
    }

    public function copyForm(int $id)
    {
        $form = Elm::createForm(Route::buildUrl('systemMerchantChangeCopy', ['id' => $id])->build());
        $form->setRule([
            Elm::input('copy_num', '复制次数', $this->dao->getCopyNum($id))->disabled(true)->readonly(true),
            Elm::radio('type', '修改类型', 1)
                ->setOptions([
                    ['value' => 1, 'label' => '增加'],
                    ['value' => 2, 'label' => '减少'],
                ]),
            Elm::number('num', '修改数量', 0)->required()
        ]);
        return $form->setTitle('修改复制商品次数');
    }

    public function delete($id)
    {
        Db::transaction(function () use ($id) {
            $this->dao->update($id, ['is_del' => 1]);
            app()->make(MerchantAdminRepository::class)->deleteMer($id);
            Queue::push(ClearMerchantStoreJob::class, ['mer_id' => $id]);
        });
    }

    /**
     * TODO 清理删除商户但没有删除的商品数据
     * @author Qinii
     * @day 5/15/21
     */
    public function clearRedundancy()
    {
        $ret = (int)$this->dao->search(['is_del' => 1])->value('mer_id');
        if (!$ret) return;
        try {
            app()->make(ProductRepository::class)->clearMerchantProduct($ret);
            app()->make(StoreCouponRepository::class)->getSearch([])->where('mer_id', $ret)->update(['is_del' => 1, 'status' => 0]);
            app()->make(StoreCouponUserRepository::class)->getSearch([])->where('mer_id', $ret)->update(['is_fail' => 1, 'status'=>2]);
        } catch (\Exception $exception) {
            throw new ValidateException($exception->getMessage());
        }
    }

    public function addLockMoney(int $merId, string $orderType, int $orderId, float $money)
    {
        if ($money <= 0) return;
        if (systemConfig('mer_lock_time')) {
            app()->make(UserBillRepository::class)->incBill($merId, 'mer_lock_money', $orderType, [
                'link_id' => ($orderType === 'order' ? 1 : 2) . $orderId,
                'mer_id' => $merId,
                'status' => 0,
                'title' => '商户冻结余额',
                'number' => $money,
                'mark' => '商户冻结余额',
                'balance' => 0
            ]);
        } else {
            $this->dao->addMoney($merId, $money);
        }
    }

    public function checkCrmebNum(int $merId, string $type)
    {
        $merchant = $this->dao->get($merId);
        switch ($type) {
            case 'copy':
                if (!systemConfig('copy_product_status')) {
                    throw new ValidateException('复制商品未开启');
                }
                if (!$merchant['copy_product_num']) {
                    throw new ValidateException('复制商品剩余次数不足');
                }
                break;
            case 'dump':
                if (!systemConfig('crmeb_serve_dump')) {
                    throw new ValidateException('电子面单未开启');
                }
                if (!$merchant['export_dump_num']) {
                    throw new ValidateException('电子面单剩余次数不足');
                }
                break;
        }
        return true;
    }

    public function subLockMoney(int $merId, string $orderType, int $orderId, float $money)
    {
        if ($money <= 0) return;
        $make = app()->make(UserBillRepository::class);
        $bill = $make->search(['category' => 'mer_lock_money', 'type' => $orderType, 'mer_id' => $merId, 'link_id' => ($orderType === 'order' ? 1 : 2) . $orderId, 'status' => 0])->find();
        if (!$bill) {
            $this->dao->subMoney($merId, $money);
        } else {
            $make->decBill($merId, 'mer_refund_money', $orderType, [
                'link_id' => ($orderType === 'order' ? 1 : 2) . $orderId,
                'mer_id' => $merId,
                'status' => 1,
                'title' => '商户冻结余额退款',
                'number' => $money,
                'mark' => '商户冻结余额退款',
                'balance' => 0
            ]);
        }
    }

    public function computedLockMoney(StoreOrder $order)
    {
        Db::transaction(function () use ($order) {
            $money = 0;
            $make = app()->make(UserBillRepository::class);
            $bill = $make->search(['category' => 'mer_lock_money', 'type' => 'order', 'link_id' => '1' . $order->order_id, 'status' => 0])->find();
            if ($bill) {
                $money = bcsub($bill->number, $make->refundMerchantMoney($bill->link_id, $bill->type, $bill->mer_id), 2);
                if ($order->presellOrder) {
                    $presellBill = $make->search(['category' => 'mer_lock_money', 'type' => 'presell', 'link_id' => '2' . $order->presellOrder->presell_order_id, 'status' => 0])->find();
                    if ($presellBill) {
                        $money = bcadd($money, bcsub($presellBill->number, $make->refundMerchantMoney($presellBill->link_id, $presellBill->type, $presellBill->mer_id), 2), 2);
                        $presellBill->status = 1;
                        $presellBill->save();
                    }
                }
                $bill->status = 1;
                $bill->save();
            }
            if ($money > 0) {
                app()->make(UserBillRepository::class)->incBill($order->uid, 'mer_computed_money', 'order', [
                    'link_id' => $order->order_id,
                    'mer_id' => $order->mer_id,
                    'status' => 0,
                    'title' => '商户待解冻余额',
                    'number' => $money,
                    'mark' => '交易完成,商户待解冻余额' . floatval($money) . '元',
                    'balance' => 0
                ]);
            }
        });
    }

    public function checkMargin($merId, $typeId)
    {
        $merchant = $this->dao->get($merId);
        $is_margin = 0;
        $margin = 0;
        if ($merchant['is_margin'] == 10) {
            $margin = $merchant['margin'];
            $is_margin = $merchant['is_margin'];
        } else {
            $marginData = app()->make(MerchantTypeRepository::class)->get($typeId);

            if ($marginData) {
                $is_margin = $marginData['is_margin'];
                $margin = $marginData['margin'];
            }
        }
        return compact('is_margin', 'margin');
    }

    public function setMarginForm(int $id)
    {
        $merchant = $this->dao->get($id);
        if ($merchant->is_margin !== 10) {
            throw new ValidateException('商户无保证金可扣');
        }
        $form = Elm::createForm(Route::buildUrl('systemMarginSet')->build());
        $form->setRule([
            Elm::input('mer_name', '商户名称', $merchant->mer_name)->disabled(true),
            Elm::input('mer_id', '商户ID', $merchant->mer_id)->disabled(true),
            Elm::input('margin', '商户剩余保证金', $merchant->margin)->disabled(true),
            Elm::number('number', '保证金扣除金额', 0)->max($merchant->margin)->precision(2)->required(),
            Elm::text('mark', '保证金扣除原因')->required(),
        ]);
        return $form->setTitle('扣除保证金');
    }

    /**
     * TODO
     * @param $data
     * @return \think\response\Json
     * @author Qinii
     * @day 2/7/22
     */
    public function setMargin($data)
    {
        $merechant = $this->dao->get($data['mer_id']);
        if ($merechant->is_margin !== 10) {
            throw new ValidateException('商户未支付保证金或已申请退款');
        }
        if ($data['number'] < 0) {
            throw new ValidateException('扣除保证金额不能小于0');
        }

        if (bccomp($merechant->margin, $data['number'], 2) == -1) {
            throw new ValidateException('扣除保证金额不足');
        }

        $data['balance'] = bcsub($merechant->margin, $data['number'], 2);

        Db::transaction(function () use ($merechant, $data) {
            $merechant->margin = $data['balance'];
            $merechant->save();
            app()->make(UserBillRepository::class)->bill(0, 'mer_margin', $data['type'], 0, $data);
        });
    }

    public function changeDeliveryBalance($merId,$number)
    {
        $merechant = $this->dao->get($merId);
        if (bccomp($merechant->delivery_balance, $number, 2) == -1) {
            throw new ValidateException('余额不足，请先充值（配送费用：'.$number.'元）');
        }
        Db::transaction(function () use ($merechant, $number) {
            $merechant->delivery_balance = bcsub($merechant->delivery_balance, $number, 2);
            $merechant->save();
        });
    }


}

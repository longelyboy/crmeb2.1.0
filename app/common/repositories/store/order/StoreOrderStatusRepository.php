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


namespace app\common\repositories\store\order;


use app\common\dao\store\order\StoreOrderStatusDao;
use app\common\repositories\BaseRepository;

/**
 * Class StoreOrderStatusRepository
 * @package app\common\repositories\store\order
 * @author xaboy
 * @day 2020/6/11
 * @mixin StoreOrderStatusDao
 */
class StoreOrderStatusRepository extends BaseRepository
{



    const ORDER_STATUS_CANCEL = 'cancel';
    const ORDER_STATUS_CHANGE = 'change';
    const ORDER_STATUS_CREATE = 'create';
    const ORDER_STATUS_DELETE = 'delete';
    const ORDER_STATUS_TAKE   = 'take';
    const ORDER_STATUS_OVER   = 'over';
    const ORDER_STATUS_PRESELL= 'presell';
    const ORDER_STATUS_REFUND_ALL   = 'refund_all';
    const ORDER_STATUS_AUTO_OVER    = 'auto_over';
    const ORDER_STATUS_PRESELL_CLOSE = 'presell_close';
    const ORDER_STATUS_PAY_SUCCCESS = 'pay_success';
    const ORDER_STATUS_GROUP_SUCCESS = 'group_success';

    /*
      2   => '待取货',
      3   => '配送中',
      4   => '已完成',
      -1  => '已取消',
      9   => '物品返回中',
      10  => '物品返回完成',
      100 => '骑士到店',
    */
    const ORDER_DELIVERY_COURIER    = 'delivery_0';
    const ORDER_DELIVERY_SELF       = 'delivery_1';
    const ORDER_DELIVERY_NOTHING    = 'delivery_2';
    const ORDER_DELIVERY_CITY       = 'delivery_5';
    const ORDER_DELIVERY_CITY_CANCEL  = 'delivery_5_-1';
    const ORDER_DELIVERY_CITY_ARRIVE  = 'delivery_5_100';
    const ORDER_DELIVERY_CITY_WAITING = 'delivery_5_2';
    const ORDER_DELIVERY_CITY_ING    = 'delivery_5_3';
    const ORDER_DELIVERY_CITY_OVER   = 'delivery_5_4';
    const ORDER_DELIVERY_CITY_REFUND = 'delivery_5_10';
    const ORDER_DELIVERY_CITY_REFUNDING = 'delivery_5_9';



    /**
     * StoreOrderStatusRepository constructor.
     * @param StoreOrderStatusDao $dao
     */
    public function __construct(StoreOrderStatusDao $dao)
    {
        $this->dao = $dao;
    }

    /**
     * @param $order_id
     * @param $change_type
     * @param $change_message
     * @return \app\common\dao\BaseDao|\think\Model
     * @author xaboy
     * @day 2020/6/11
     */
    public function status($order_id, $change_type, $change_message)
    {
        return $this->dao->create(compact('order_id', 'change_message', 'change_type'));
    }

    public function search($id,$page, $limit)
    {
        $query = $this->dao->search($id);
        $count = $query->count();
        $list = $query->page($page, $limit)->select();
        return compact('count','list');
    }
}

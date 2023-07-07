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

namespace app\common\dao\store\product;

use app\common\dao\BaseDao;
use app\common\model\store\product\StoreDiscounts;
use app\common\model\store\product\StoreDiscountProduct;
use app\common\repositories\store\product\ProductSkuRepository;
use think\facade\Db;

class StoreDiscountProductDao extends BaseDao
{
    protected function getModel(): string
    {
        return StoreDiscountProduct::class;
    }

    public function clear($id)
    {
        return Db::transaction(function () use($id){
            $discount_product_id = $this->getModel()::getDb()->where('discount_id',$id)->column('discount_product_id');
            $this->getModel()::getDb()->where('discount_id',$id)->delete();
            app()->make(ProductSkuRepository::class)->clear($discount_product_id, 10);
        });
    }
}


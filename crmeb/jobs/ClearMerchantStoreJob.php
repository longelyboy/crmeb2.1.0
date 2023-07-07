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


namespace crmeb\jobs;

use app\common\repositories\store\product\ProductRepository;
use crmeb\interfaces\JobInterface;
use think\facade\Log;

class ClearMerchantStoreJob implements JobInterface
{

    public function fire($job, $data)
    {
        try{
            app()->make(ProductRepository::class)->clearMerchantProduct((int)$data['mer_id']);
        }catch (\Exception $e){
            Log::info('商户ID：'.$data['mer_id'].'清除出错');
        }
        $job->delete();
    }

    public function failed($data)
    {
        // TODO: Implement failed() method.
    }
}

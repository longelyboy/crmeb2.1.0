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

use crmeb\services\upload\Upload;

/**
 * Class UploadService
 * @package crmeb\services
 */
class UploadService
{

    /**
     * @param $type
     * @return Upload
     */
    public static function create($type = null)
    {
        if (is_null($type)) {
            $type = (int)systemConfig('upload_type') ?: 1;
        }
        $type = (int)$type;

        switch ($type) {
            case 1: //本地
                $prefix = 'local';
                break;
            case 2://七牛
                $prefix = 'qiniu';
                break;
            case 3:// oss 阿里云
                break;
            case 4:// cos 腾讯云
                $prefix = 'tengxun';
                break;
            case 5:
                $prefix = 'obs';
                break;
            case 6:
                $prefix = 'uc';
                break;
        }

        //获取配置
        $accessKey      = isset($prefix) ? $prefix.'_accessKey'      : 'accessKey';
        $secretKey      = isset($prefix) ? $prefix.'_secretKey'      : 'secretKey';
        $auploadUrl     = isset($prefix) ? $prefix.'_uploadUrl'      : 'uploadUrl';
        $storage_name   = isset($prefix) ? $prefix.'_storage_name'   : 'storage_name';
        $storage_region = isset($prefix) ? $prefix.'_storage_region' : 'storage_region';
        $cdn            = isset($prefix) ? $prefix.'_cdn'            : 'oss_cdn';
        $thumb_status   = isset($prefix) ? $prefix.'_thumb_status'   : 'thumb_status';
        $thumb_rate     = isset($prefix) ? $prefix.'_thumb_rate'     : 'thumb_rate';

        $data = systemConfig([$accessKey, $secretKey, $auploadUrl, $storage_name, $storage_region, $cdn,$thumb_status,$thumb_rate]);
        if ($data[$cdn]) {
            if (substr( $data[$cdn],0,4)  !== 'http') {
                $data[$cdn] = 'https'.$data[$cdn];
            }
        }
        $config = [
            'accessKey' => $data[$accessKey],
            'secretKey' => $data[$secretKey],
            'uploadUrl' => $data[$auploadUrl],
            'storageName' => $data[$storage_name],
            'storageRegion' => $data[$storage_region],
            'cdn'   =>   rtrim($data[$cdn],'/'),
            'thumb_status' => $data[$thumb_status],
            'thumb_rate' => $data[$thumb_rate],
        ];

        return new Upload($type, $config);
    }
}

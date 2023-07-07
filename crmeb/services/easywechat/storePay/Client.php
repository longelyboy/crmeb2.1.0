<?php

/*
 * This file is part of the overtrue/wechat.
 *
 * (c) overtrue <i@overtrue.me>
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace crmeb\services\easywechat\storePay;

use crmeb\services\easywechat\BaseClient;
use EasyWeChat\Core\AbstractAPI;
use EasyWeChat\Core\AccessToken;
use EasyWeChat\Core\Exceptions\HttpException;
use EasyWeChat\Core\Http;
use EasyWeChat\Payment\API;
use EasyWeChat\Payment\Merchant;
use GuzzleHttp\HandlerStack;
use think\Exception;
use EasyWeChat\Support\XML;
use EasyWeChat\Support\Collection;
use Psr\Http\Message\ResponseInterface;
use think\exception\ValidateException;

/**
 * Class Client.
 *
 * @author ClouderSky <clouder.flow@gmail.com>
 */
class Client extends BaseClient
{
    const API = 'https://api.mch.weixin.qq.com';

    public function transferBatches(array $data)
    {
        $api = '/v3/transfer/batches';
        $params = [
            "appid" => $this->app['config']['app_id'],
            "out_batch_no" => "plfk2020042013",
            "batch_name" => "分销明细",
            "batch_remark" => "分销明细",
            "total_amount" => 100,
            "total_num" => 1,
            "transfer_detail_list" => [
                [
                    "openid" => "oOdvCvjvCG0FnCwcMdDD_xIODRO0",
                    "out_detail_no" => "x23zy545Bd5436",
                    "transfer_amount" => 100,
                    "transfer_remark" => "分销明细",
              ]
            ],
        ];
        $res = $this->request($api, 'POST', ['sign_body' => json_encode($params, JSON_UNESCAPED_UNICODE)], true);
    }

}

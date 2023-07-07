<?php

namespace app\controller\admin\system\diy;

use app\common\repositories\system\config\ConfigValueRepository;
use app\common\repositories\system\diy\DiyRepository;
use app\common\repositories\system\groupData\GroupDataRepository;
use crmeb\basic\BaseController;

class VisualConfig extends BaseController
{
    public function storeStreet()
    {
        return app('json')->success(systemConfig(['mer_location', 'store_street_theme']) + ['mer_location' => 0, 'store_street_theme' => 0]);
    }

    public function setStoreStreet()
    {
        $data = $this->request->params(['mer_location', 'store_street_theme']);
        app()->make(ConfigValueRepository::class)->setFormData($data, 0);
        return app('json')->success('编辑成功');
    }

    public function userIndex()
    {
        $my_banner = systemGroupData('my_banner');
        $my_menus = systemGroupData('my_menus');
        $theme = app()->make(DiyRepository::class)->getThemeVar(systemConfig('global_theme'));
        return app('json')->success(compact('my_banner', 'my_menus', 'theme'));
    }

    public function setUserIndex()
    {
        $data = $this->request->params(['my_banner', 'my_menus']);
        $make = app()->make(GroupDataRepository::class);
        $make->setGroupData('my_banner', 0, $data['my_banner']);
        $make->setGroupData('my_menus', 0, $data['my_menus']);
        return app('json')->success('编辑成功');
    }
}
<?php
namespace app\controller;

use app\BaseController;

class Html extends BaseController
{
    public function index()
    {
        return view('html/index');
    }

    public function empty($name = 'ThinkPHP6')
    {

        return view('html/empty',['name'=>$name]);
    }
}

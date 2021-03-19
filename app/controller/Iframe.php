<?php


namespace app\controller;


use app\BaseController;

class Iframe extends BaseController
{
    public function index()
    {
        return view('iframe/index');
    }

    public function main()
    {
        return view('iframe/main');
    }

    public function empty($name = 'ThinkPHP6')
    {

        return view('iframe/empty',['name'=>$name]);
    }
}
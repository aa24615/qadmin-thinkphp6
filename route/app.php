<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
use think\facade\Route;

Route::get('/index', 'Index/index');
Route::get('/', 'Index/index');


Route::group('iframe', function () {
    Route::get('index', 'iframe/index');
    Route::get('/', 'iframe/index');
    Route::get('main', 'iframe/main')->ext('html');
    Route::get(':name', 'iframe/empty')->ext('html');
});

Route::get(':name', 'Html/empty')->ext('html');

Route::group('html', function () {
    Route::get('index', 'Html/index');
    Route::get('/', 'Html/index');
});



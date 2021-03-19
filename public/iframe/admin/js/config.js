const menu = [{
    "name": "首页",
    "icon": "&#xe68e;",
    "url": "/iframe/index.html",
    "hidden": false,
    "list": []
}, {
    "name": "基本组件",
    "icon": "&#xe653;",
    "url": "/iframe/",
    "hidden": false,
    "list": [{
        "name": "layui基本组件",
        "url": "/iframe/pages_component.html",
    }, {
        "name": "layui内置模块",
        "url": "/iframe/pages_model.html"
    }, {
        "name": "提示框",
        "url": "/iframe/pages_msg.html"
    }]
}, {
    "name": "用户管理",
    "icon": "&#xe612;",
    "url": "/iframe/",
    "hidden": false,
    "list": [{
        "name": "用户列表",
        "url": "/iframe/user_index.html"
    }, {
        "name": "添加用户",
        "url": "/iframe/user_add.html"
    }]
}, {
    "name": "文章管理",
    "icon": "&#xe609;",
    "url": "/iframe/",
    "hidden": false,
    "list": [{
        "name": "栏目管理",
        "url": "/iframe/type_index.html"
    }, {
        "name": "文章管理",
        "url": "/iframe/article_index.html"
    }]
}, {
    "name": "系统设置",
    "icon": "&#xe620;",
    "url": "/iframe/",
    "hidden": false,
    "list": [{
        "name": "网站设置",
        "url": "/iframe/web_index.html"
    }, {
        "name": "友情连接",
        "url": "/iframe/flink_index.html"
    }, {
        "name": "导航管理",
        "url": "/iframe/nav_index.html"
    }, {
        "name": "修改密码",
        "url": "/iframe/web_pwd.html"
    }, {
        "name": "清除缓存",
        "url": "/iframe/web_cache.html"
    }, {
        "name": "登录页",
        "url": "/iframe/login.html"
    }]
}, {
    "name": "数据库",
    "icon": "&#xe857;",
    "url": "/iframe/",
    "hidden": false,
    "list": [{
        "name": "备份数据库",
        "url": "/iframe/db_backup.html"
    }, {
        "name": "还原数据库",
        "url": "/iframe/db_reduction.html"
    }]
}, {
    "name": "退出登录",
    "icon": "&#xe65c;",
    "url": "/iframe/out.html",
    "list": []
}, {
    "name": "开发者官网",
    "icon": "&#xe65f;",
    "url": "/iframe/http://www.qadmin.net/",
    "target": "_blank",
    "list": []
}, {
    "name": "开发文档",
    "icon": "&#xe655;",
    "url": "/iframe/http://docs.qadmin.net/",
    "target": "_blank",
    "list": []
}];

const config = {
    name: "Qadmin",
    menu: menu,
};

// module.exports.name = "Qadmin";
// module.exports.menu = menu;

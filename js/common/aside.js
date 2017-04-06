define(['jquery', 'jqueryCookie', 'template'], function ($, undefined, template) {


    /**
     * 1、获取本地存储的用户信息
     * 2、把用户信息解析为js对象方便使用
     * 3、拼接用户信息模版字符串
     * 4、调用模版引擎的compile方法编译这个模版字符串，得到一个渲染函数
     * 5、调用渲染函数，把要渲染的数据传入进去，就会得到一个完整的html
     * 6、最后把这个html替换到页面指定位置
     * */


    // 转码成相应的中文
    var userInfoStr = $.cookie('userInfo');

    // 应用JSON.parse解析成对象形式, 方便使用
    var userInfoObj = JSON.parse(userInfoStr);
    var tplhtml = '  <!-- 头像 -->' +
        '<div class="avatar img-circle">' +

        '<img src={{tc_avatar?tc_avatar:' + "/boxuegu/img/define.png" + '}}>' +
        '</div>' +
        '<h4>{{tc_name}}</h4>';








    var render = template.compile(tplhtml);
    // 能拿到 userInfoObj 下面的属性
    var html = render(userInfoObj);
    $('.profile').append(html);
    console.log(html);

    

})
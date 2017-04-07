define(['jquery', 'jqueryCookie','nprogress','loading','template'], function ($,undefined,nprogress,undefined,template) {

    // 验证是否已经登陆
    (function () {
        if ($.cookie('PHPSESSID')) {
            location.href = '/boxuegu/index.html';
            
        }
        // console.log($.cookie('PHPSESSID'));

    })();



    // 保留上个用户的头像
    (function(){
        var userStr=$.cookie('userInfo');
        var userObj;
        try{
            userObj=JSON.parse(userStr);
        }catch(e){
            // userObj={tc_avatar:''};
            userObj={};
        }
        // console.log(userObj);
        // console.log(userObj.tc_avatar);
        avatarUrl=userObj.tc_avatar?userObj.tc_avatar:"/boxuegu/img/default.png";
       
        
        var avatar=  '<img src='+avatarUrl+' '+'class="img-circle" alt="">'
        console.log( $('#avatarT'));
        $('#avatarT').css('backgroundColor','#2f4050');
        $('.avatar').html(avatar);
    })();






    // 登陆验证
    (function () {
        $('#login-form').on('submit', function () {

            $.ajax({
                url: '/v6/login',
                type: 'post',
                data: $(this).serialize(),
                success: function (data) {
                    // console.log(data);
                    // console.log(data);
                    if (data.code == 200) {
                        console.log(data);

                        // 将用户头衔等信息用cookie传递给其他页面
                        // 记得将data.result转化为字符串形式
                        $.cookie('userInfo',JSON.stringify(data.result),{path:'/'});


                        location.href = '/boxuegu/index.html';
                        // alert('成功');

                    }
                },
                error: function () {
                    // alert('账号错误');
                    // alert(arguments);
                    // console.log(arguments);
                    alert("密码" + arguments[1]);

                }
            })
            return false;

        })
    })();




    nprogress.done();
})
define(['jquery'], function ($) {
    $('#login-form').on('submit', function () {

        // $(this).serialize();
        console.log(1);
        $.ajax({
            url: '/v6/login',
            type: 'post',
            data: $(this).serialize(),
            success: function (data) {
                // console.log(data);
                // console.log(data);
                if(data.code==200){
                    location.href='/boxuegu';
                    
                }
            },
            error:function(){
                alert('账号错误');
            }
        })
        return false;

    })

    console.log(123123);
})
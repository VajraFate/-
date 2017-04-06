define(["jquery"],function($){


    $('#loginout').on('click',function(){
        $.post('/v6/logout',function(data){
            data.code==200&&(location.href = '/boxuegu/html/home/login.html');
        })
    })
})
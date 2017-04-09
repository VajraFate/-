define(['jquery','aside','header','common','nprogress','loading','template'],function($,undefined,undefined,undefined,nprogress,undefined,template){
    $.get('/v6/course',function(data){
        if(data.code==200){
           $('.courses').append(template('course-list',data));
        }
    })

    template.helper('random',function(sourse,param){
        var arr =param.split('~');
        return Math.ceil(Math.random()*(arr[1]-arr[0])+arr[0]);
    })





nprogress.done();


})
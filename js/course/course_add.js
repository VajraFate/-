define(['aside','header','nprogress','jquery'],function(undefined,undefined,nprogress,$){
    
    

   $("#form-creat-add").on('click',function(e){
        e.preventDefault();
        // console.log( $("#course-creat"));
        var formStr= $("#course-creat").serialize();
        console.log(formStr);
        $.post('/v6/course/create',formStr,function(data){
            location.href='/boxuegu/html/course/course_add_step1.html';
        })
    })








    nprogress.done();
})
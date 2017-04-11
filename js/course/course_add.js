define(['aside', 'header', 'nprogress', 'jquery'], function (undefined, undefined, nprogress, $) {



    $("#form-creat-add").on('click', function (e) {
        e.preventDefault();
        // console.log( $("#course-creat"));
        var formStr = $("#course-creat").serialize();
        console.log(formStr);
        $.post('/v6/course/create', formStr, function (data) {
            // console.log(data);
            // alert('请求成功');
            if (data.code == 200) {
                location.href = '/boxuegu/html/course/course_add_step1.html?cs_id='+data.result.cs_id;

            }

        })
    })








    nprogress.done();
})
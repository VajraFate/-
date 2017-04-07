define(['header', 'aside', 'nprogress', 'jquery'], function (undefined, undefined, nprogress, $) {


    // 将 fomrData格式转化为 JSON格式
    // function formToJSON(formArray) {
    //     var Jobj = {};
    //     for (var i = 0; i < formArray.length; i++) {
    //         Jobj[formArray[i].name] = Jobj[formArray[i].value];
    //     }
    //     return Jobj;
    // }


    // formObj = JSON.parse(formArray);
    // console.log(formObj);
    $('#add-list').on('click', function (e) {
        e.preventDefault();

        //   e.preventDefault();
        // var formArray = $('#teacher-add-form').serializeArray();
        // console.log(formStr);
        // var formObj = formToJSON(formArray);
        // console.log(formObj);


        // 支持FormDate格式
        var formStr = $('#teacher-add-form').serialize();
        console.log(formStr);
        // $.post('/v6/teacher/add',formStr ,function () {
        //     location.href='/boxuegu/html/teacher/teacher_list.html';
        // })

        $.ajax({
            type: 'post',
            data: formStr,
            url: '/v6/teacher/add',
            success: function (data) {
                location.href = '/boxuegu/html/teacher/teacher_list.html';
            }
        })
    })






    nprogress.done();
})
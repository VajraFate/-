define(['header', 'aside', 'nprogress', 'jquery', 'template', 'jqueryForm','bootstrapDatepicker','datepickerCN'], function (undefined, undefined, nprogress, $, template, undefined,undefined,undefined) {

    var urlSearch = location.search.slice(1);
    var urlSearchArr = urlSearch.split('&');
    var urlObj = {};
    for (var i = 0; i < urlSearchArr.length; i++) {
        var oneArr = urlSearchArr[i].split('=');
        urlObj[oneArr[0]] = oneArr[1];
    }

    console.log(urlObj);






    // function getQueryString(name) {
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    //     var r = window.location.search.substr(1).match(reg);
    //     if (r != null) return (r[2]);
    //     return null;
    // }

    // var teacherId = getQueryString('tc_id');
    // console.log(teacherId);

    // 如果页面有传值 就是 编辑 没传值  就是添加

    // 添加

    if (urlObj.hasOwnProperty("tc_id")) {
        // console.log('jinlail');

        // 如果是 编辑 有id的情况下
        $.ajax({
            url: '/v6/teacher/edit',
            type: 'get',
            data: {
                tc_id: urlObj.tc_id
            },
            success: function (data) {
                var html = template('pangci-box', data.result);
                $('.teacher').append(html);



                // 设置 日期0选择器
                $('.datepicker').datepicker({
                    language:'zh-CN',
                    endDate:new Date(),
                    todayHighlight: true,
                    format:'yyyy-mm-dd'
                })




                // 点击添加发送请求 执行的内容
                $('#teacher-add-form').ajaxForm(function (data) {
                    console.log(data);
                    console.log(1111111111111);
                    // alert('成功');
                    // console.log(  $('#teacher-add-form').serialize());
                    console.log(data);
                    if (data.code == 200) {
                        location.href = '/boxuegu/html/teacher/teacher_list.html';
                    } else {
                        alert('格式有误');
                    }
                })


            }
        })
        // 有ajaxForm方法了
        // teacherAdd('update');

    } else {
        // 没有id 非编辑的情况下
        var html = template('pangci', {});
        $('.teacher').append(html);

        // 有ajaxForm方法了
        // teacherAdd('add');
    }






    nprogress.done();













    function teacherAdd(which) {
        var url;
        if (which == 'update') {
            url = '/v6/teacher/update';
        } else if (whice == "add") {
            url = '/v6/teacher/add';
        } else {
            return
        }



        // 如果是直接添加讲师


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
        $(document).on('click', '#add-list', function (e) {
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
                type: 'POST',
                data: formStr,
                url: url,
                success: function (data) {
                    console.log(1111);
                    alert('提交成功');
                    location.href = '/boxuegu/html/teacher/teacher_list.html';

                }
            })

        })
    }


})
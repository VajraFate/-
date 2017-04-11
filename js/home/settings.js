define(['header', 'aside', 'nprogress', 'template', 'loading', 'uploadify', 'jqueryForm', 'jqueryRegion', 'ckeditor', 'bootstrapDatepicker', 'datepickerCN', 'jqueryCookie'], function (undefined, undefined, nprogress, template, undefined, undefined, undefined, undefined, ckeditor, undefined, undefined, undefined) {

    //用于接收 这个变量 以便他在其他函数中使用
    var newTextarea = null;

    // 用于接收 头像的cookie
    var tc_avatar = null;
    var tc_name = null;

    $.get('/v6/teacher/profile', function (data) {
        if (data.code == 200) {
            console.log(data);
            $('.main').append(template('setting-model', data.result));

            tc_name = data.tc_name;

            // 创建上传头像插件
            $('#upfile').uploadify({
                swf: '/boxuegu/lib/uploadify/uploadify.swf',
                uploader: '/v6/uploader/avatar',

                fileObjName: 'tc_avatar',
                height: $('.preview').height(),

                buttonText: "",
                'onUploadSuccess': function (file, data, response) {
                    console.log(1234)
                    var src = JSON.parse(data).result.path;

                    $('#avatar-img').attr('src', src);
                    tc_avatar = src;
                    // $('#avatar-img').attr('src',)
                }

            })




            // 创建时间选择器
            $('.data-datepicter').datepicker({
                language: 'zn-CN',
                todayHighlight: true,
                format: 'yyyy-mm-dd',
                endDate: new Date()
            });


            // 创建地域选择器
            $('#region').region({
                url: '/boxuegu/lib/jquery-region/region.json'
            });


            // 使用 ckeditor 第三方textarea插件
            newTextarea = ckeditor.replace('chang-textarea');




        }
    })



    $(document).on('click', '#setting-submit-btn', function () {

        // 更新 富文本框内容
        newTextarea.updateElement();

        // console.log($('#chang-textarea').val());
        // 将 省 市 区 拼接  tc_hometown 字符串

        var tc_hometown = $('#p').find('option:selected').text() + '|' + $('#c').find('option:selected').text() + '|' + $('#d').find('option:selected').text();

        console.log(tc_hometown);




        // 将相应数据发送到后台
        console.log()
        $('#setting-form').ajaxSubmit({
            data: {
                tc_hometown: tc_hometown
            },
            success: function (data) {
                if (data.code == 200) {
                    // alert('更改成功');
                    // console.log(data);
                    ;
                    // tc_name:

                    $.cookie('userInfo', JSON.stringify({
                        tc_avatar: tc_avatar,
                        tc_name: tc_name

                    }), {
                        path: '/'
                    })
                    location.reload();

                }
            }
        })
    })



    nprogress.done();
})
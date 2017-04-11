define(['aside', 'header', 'nprogress', 'jquery', 'jqueryForm', 'jqueryCookie', 'common', 'template', "uploadify"], function (undeinfed, undeinfed, nprogress, $, undeinfed, undeinfed, common, template, uploadify) {
    var cs_id = common.parseSearch('cs_id');


    $.get('/v6/course/picture', {
        cs_id: cs_id
    }, function (data) {
        console.log(111);    
        console.log(data);
        if (data.code == 200) {
            $('.steps').append(template('course-step2', data.result));
            uploadifyLoad()
        }

    })



    function uploadifyLoad() {
        $('#uploadify').uploadify({
            height: '100%',
            width: '100%',
            swf: '/boxuegu/lib/uploadify/uploadify.swf',
            uploader: '/v6/uploader/cover',
            fileObjName: 'cs_cover_original',
            formData: {
                cs_id: cs_id
            },
            buttonText: '选择图片',
            buttonClass: 'btn btn-success btn-sm',
            itemTemplate: '<i></i>',
            // buttonText: '选择图片',
            onUploadSuccess: function (file, data, respone) {
                try {
                    data = JSON.parse(data);
                } catch (e) {
                    data = {}
                }
                console.log(data);
                $('.thumb img').attr('src', data.result.path);

                $('.preview img').attr('src', data.result.path);
                location.href='/boxuegu/html/course/course_add_step3.html?cs_id='+cs_id;
            }

        })
    }







    nprogress.done();
})
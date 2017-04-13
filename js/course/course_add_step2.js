define(['aside', 'header', 'nprogress', 'jquery', 'jqueryForm', 'jqueryCookie', 'common', 'template', "uploadify", 'Jcrop', 'loading'], function (undeinfed, undeinfed, nprogress, $, undeinfed, undeinfed, common, template, uploadify, undefined, undefined) {
    var cs_id = common.parseSearch('cs_id');
    var clipResult = null;

    $.get('/v6/course/picture', {
        cs_id: cs_id
    }, function (data) {
        console.log(111);
        console.log(data);
        if (data.code == 200) {
            $('.steps').append(template('course-step2', data.result));
            uploadifyLoad()
        }
        showData();


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
                location.href = '/boxuegu/html/course/course_add_step3.html?cs_id=' + cs_id;
            }

        })
    }




    $(document).on('click', '.Jcrop-img-btn', function () {
        console.log('进来了');
        $('#Jcrop-img').Jcrop({
            setSelect: [0, 0, 100, 100],
            boxWidth: 400,
            boxHeight: 400,
            aspectRatio: 2,
            onSelect: showData

        }, function () {
            this.container.on('cropend', function (e, s, c) {

                // 这个结果是相对于图片原尺寸来计算的，最终的值传给后台，后台就会对原图进行裁剪
                console.log(c.x, c.y, c.w, c.h);

                // 裁剪结果后，把结果存储到一个外界变量，供大家使用
                clipResult = c;
                $('.Jcrop-img-btn').text('上传图片');
            });

        });


        if ($(this).text() == '上传图片') {
            console.log('comeing')
            var c = clipResult;
            $.post('/v6/course/update/picture', {
                cs_id: cs_id,
                x: c.x,
                y: c.y,
                w: c.w,
                h: c.h
            }, function (data) {
                console.log(data);
                if (data.code == 200) {
                    location.href = '/boxuegu/html/course/course_add_step3.html?cs_id=' + cs_id;
                }
            })
        }

    })



    // 显示步骤阴影
    showData();

    function showData() {
        var path = location.pathname;
        var numb = 0;
        switch (path) {
            case '/boxuegu/html/course/course_add_step2.html':
                numb = 2;
                break;
            case '/boxuegu/html/course/course_add_step1.html':
                numb = 1;
                break;
            case '/boxuegu/html/course/course_add_step3.html':
                numb = 3;
                break;
        }
        console.log("numb===" + numb);
        $('.steps .list-unstyled a').removeClass('active').eq(numb-1).addClass('active');
    }








    nprogress.done();
})
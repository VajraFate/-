define(['bootstrap', 'aside', 'header', 'nprogress', 'jquery', 'jqueryForm', 'jqueryCookie', 'common', 'template', ], function (undeinfed, undeinfed, undeinfed, nprogress, $, undeinfed, undeinfed, common, template) {


    var cs_id = common.parseSearch('cs_id');

    // 渲染 课时列单
    $.get('/v6/course/lesson', {
        cs_id: cs_id
    }, function (data) {
        console.log(111);
        console.log(data);
        if (data.code == 200) {
            $('.steps').append(template('course-step3', data.result));
        }
        showData();


    })


    // 模态框渲染
    $(document).on('click', '.edit-btn', function () {
        var ct_id = $(this).data('ctid');

        // 添加有id的话 编辑
        $.get('/v6/course/chapter/edit', {
            ct_id: ct_id
        }, function (data) {
            console.log(data);
            $('#chapterModal .modal-dialog').html(template('modle-step3', data.result));
        })
    })

    // 没有id的话 走 添加
    $(document).on('click', '.edit-btn-add', function () {
        $('#chapterModal .modal-dialog').html(template('modle-step3', {}));
    })


    $(document).on('click', '.btn-form-update', function () {
        // console.log(222);
        var is_on = $('.ckeck').prop('checked') ? 1 : 0;
        console.log(is_on)
        $('#add-edit-form').ajaxSubmit({
            data: {
                ct_is_free: is_on,
                ct_cs_id: cs_id
            },
            success: function (data) {
                console.log(data);
                location.reload();
            }
        })
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
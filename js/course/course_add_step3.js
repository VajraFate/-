define(['bootstrap','aside', 'header', 'nprogress', 'jquery', 'jqueryForm', 'jqueryCookie', 'common', 'template', ], function (undeinfed,undeinfed, undeinfed, nprogress, $, undeinfed, undeinfed, common, template) {


    var cs_id = common.parseSearch('cs_id');


    $.get('/v6/course/lesson', {
        cs_id: cs_id
    }, function (data) {
        // console.log(111);
        console.log(data);
        if (data.code == 200) {
            $('.steps').append(template('course-step3', data.result));


        }

    })


    // 模态框渲染
    $(document).on('click', '.edit-btn', function () {
        var ct_id = $(this).data('ctid');
        console.log(ct_id);
        $.get('/v6/course/chapter/edit', {
            ct_id: ct_id
        }, function (data) {
            console.log(data);
            $('#chapterModal .modal-dialog').html(template('modle-step3', data.result));
        })




    })
















    nprogress.done();
})
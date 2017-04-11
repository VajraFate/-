define(['bootstrap', 'aside', 'header', 'nprogress', 'jquery', 'jqueryForm', 'jqueryCookie', 'common', 'template', ], function (undeinfed, undeinfed, undeinfed, nprogress, $, undeinfed, undeinfed, common, template) {


    var cs_id = common.parseSearch('cs_id');

// 渲染 课时列单
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


    $(document).on('click','.btn-form-update',function(){
        // console.log(222);
        var is_on=$('.ckeck').prop('checked')?1:0;
        console.log(is_on)
        $('#add-edit-form').ajaxSubmit({
            data:{
                ct_is_free:is_on
            },
            success:function(data){
                console.log(data);
            }
        })
    })









    nprogress.done();
})
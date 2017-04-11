define(['bootstrap', 'aside', 'nprogress', 'jquery', 'template', 'header'], function (undefined, undefined, nprogress, $, template, undefined) {
    (function () {
        $.get('/v6/teacher', function (data) {
            if (data.code = 200) {
                console.log(data);

                var html = template('teachTel', data);

                $('.teacher-table-list tbody').append(html);


            }
            else if(data.code==403){
                alert('权限不足');
            }




        })
    })()




    // 要等模板渲染后才能拿得到
    

    // 讲师编辑
    $(document).on('click', '.teach-edit', function (e) {
        e.preventDefault();
        var teacherId = $(this).parent().attr('data-teacher-id');
        console.log(teacherId);

        location.href = '/boxuegu/html/teacher/teacher_add.html?tc_id=' + teacherId + '';

    });


    // 教师查看
    $(document).on('click', '.teacher-check', function () {
        var teacherId = $(this).parent().attr('data-teacher-id');
        console.log(teacherId);


        $.ajax({
            type: 'get',
            url: '/v6/teacher/edit',
            data: {
                tc_id: teacherId
            },
            success: function (data) {
                console.log(data);
                if (data.code == 200) {
                    // console.log(data);
                    var html = template('motai-box', data.result);
                    $('#teacherModal').html(html);
                }
            }
        })
    });




    // 教师注销
    $(document).on('click', '.teach-status', function () {
        var self = this;
        $.ajax({
            type: 'post',
            data: {
                tc_id: +$(self).parent().attr('data-teacher-id'),
                tc_status: $(self).data('teacher-status')
            },
            url:'/v6/teacher/handle',
            success: function (data) {
                if (data.code == 200) {
                    // 状态为0 当前为开启  按钮要显示注销\
                    // 按钮是显示 点击后的状态
                    if (  data.result.tc_status == 0) {
                        $(self).data('teacher-status', 0);
                        $(self).html('注销');
                    } else {
                        $(self).data('teacher-status', 1);
                        $(self).html('启用');

                    }
                }
            }
        })
    })



    nprogress.done();
})
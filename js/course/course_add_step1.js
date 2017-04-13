define(['aside', 'header', 'nprogress', 'jquery', 'jqueryForm', 'jqueryCookie', 'common', 'template'], function (undeinfed, undeinfed, nprogress, $, undeinfed, undeinfed, common, template) {

    // 获取数据

    // 更新数据信息
    // /v6/course/update/basic

    //  默认应该也要 渲染 相应的子类标签


    var cs_id = common.parseSearch('cs_id');
    // console.log(cs_id);

    $.get('/v6/course/basic', {
        cs_id: cs_id
    }, function (data) {
        // console.log(data.result);
        $('.steps').html(template('couse_step1_form', data.result));

        showData();

    })


    // 二级联动 监听事件实时更新子集分类
    $(document).on('change', '.cgp-select', function (e) {
        // console.log(e);
        // console.log(this);
        // console.log($(this).val());
        var cg_id = $(this).val();
        $.get('/v6/category/child', {
            cg_id: cg_id
        }, function (data) {
            var html = '';
            for (var i = 0; i < data.result.length; i++) {

                html += '<option value="' + data.result[i].cg_id + '">' + data.result[i].cg_name + '</option>'
            }
            //   $(this).append(html);
            // console.log(html);
            $('.cg-select').html(html);
        })
    })


    // 
    $(document).on('click', '.couse_step1_btn', {

    }, function (e) {
        e.preventDefault();
        $('#course_step1-form').ajaxSubmit({
            cs_id: cs_id,
            success: function (data) {
                console.log(data);
                location.href = '/boxuegu/html/course/course_add_step2.html?cs_id=' + data.result.cs_id;
            }
        })
        // alert('可以出发');
    })





    // 显示步骤阴影

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
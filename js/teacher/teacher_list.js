-define(['aside', 'nprogress', 'jquery', 'template','header'], function (undefined, nprogress, $, template,undefined) {
    (function () {
        $.get('/v6/teacher', function (data) {
            var html = template('teachTel', data);

            $('.teacher-table-list tbody').append(html);
        })
    })()









    nprogress.done();
})
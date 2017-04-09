define(['jquery', 'header', 'aside', 'nprogress', 'loading', 'template'], function ($, undefined, undefined, nprogress, undefined, template) {


    $.get('/v6/category', function (data) {

        $('#category-list-keng').append(template('category-list', data));


    })



    nprogress.done();

})
define(['jquery', 'header', 'aside', 'nprogress', 'loading', 'template','common'],function($, undefined, undefined, nprogress, undefined, template,parseSearch){

// get 到 url上面传过来的参数
    parseSearch()
        

    $.get('/v6/category/edit',{cg_id:cg_id},function(data){

    })



    nprogress.done();
})
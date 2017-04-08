    define([], function () {
    // 配置
    require.config({
        baseUrl: '/boxuegu',
        paths: {
            advertAdd: 'js/advert/advert_add',
            advertList: 'js/advert/advert_list',
            courseAdd1: 'js/course/course_add_step1',
            courseAdd2: 'js/course/course_add_step2',
            courseAdd3: 'js/course/course_add_step3',
            courseAdd: 'js/course/course_add',
            courseCategoryAdd: 'js/course/course_category_add',
            courseCategory: 'js/course/course_category',
            courseTopic: 'js/course/course_topic',
            courseList:'js/course/course_list',
            login: 'js/home/login',
            repass: 'js/home/repass',
            settings: 'js/home/settings',
            teacherAdd: 'js/teacher/teacher_add',
            teacherList: 'js/teacher/teacher_list',
            userList: 'js/user/user_list',
            userProfile: 'js/user/user_profile',
            loading:'js/common/loading',

            // 配置第三方库
            template: 'lib/artTemplate/template-debug',
            bootstrap: 'lib/bootstrap/js/bootstrap',
            // bootstrap: 'lib/bootstrap/js/bootstrap',
            bootstrapDatepicker: 'lib/bootstrap-datepicker/js/bootstrap-datepicker',
            datepickerCN:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
            ckeditor: 'lib/ckeditor/ckeditor',
            ckeditorLand: 'lib/ckeditor/ckeditor/lang/zh-cn',

            echarts: 'lib/echarts/echarts.common.min',
            jquery: 'lib/jquery/jquery',
            jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
            jqueryForm: 'lib/jquery-form/jquery.form',
            jqueryRegion: 'lib/jquery-region/jquery.region',
            nprogress: 'lib/nprogress/nprogress',
            index: 'js/home/index',
            common:'js/common/common',
            aside:'js/common/aside',
            header:'js/common/header',
        },
        shim: {
            // 是非define 定义的模块 ,有依赖与JQUERY 所以要在这里手动配置
            bootstrap: {
                deps: ['jquery']
            },
            datepickerCN:{
                deps:['jquery','bootstrapDatepicker']
            },
            // 日期插件的语言包
            
        },

    });


    require(['nprogress'],function(nprogress){
        nprogress.start();
    })

// 如果有 部分js在任何文件上都需要 执行 ,可以在 mian.js上面添加一个 require, 在 它的js文件之前执行
    // require(['common']);

    // 根据页面加载对应的JS模块
    var pathname = location.pathname;
    // console.log(pathname);   
    switch (pathname) {
        case '/boxuegu/index.html':
            require(['index']);
            break;
        case '/boxuegu/html/home/login.html':
            require(['login']);
            break;
        case '/boxuegu/html/home/repass.html':
            require(['repass']);
            break;
        case '/boxuegu/html/home/settings.html':
            require(['settings']);
            break;
        case '/boxuegu/html/advert/advert_add.html':
            require(['advertAdd']);
            break;
        case '/boxuegu/html/advert/advert_list.html':
            require(['advertList']);
            break;
        case '/boxuegu/html/course/course_add_step1.html':
            require(['courseAdd1']);
            break;
        case '/boxuegu/html/course/course_add_step2.html':
            require(['courseAdd2']);
            break;
        case '/boxuegu/html/course/course_add_step3.html':
            require(['courseAdd3']);
            break;
        case '/boxuegu/html/course/course_add.html':
            require(['courseAdd']);
            break;
        case '/boxuegu/html/course/course_category_add.html':
            require(['courseCategoryAdd']);
            break;
        case '/boxuegu/html/course/course_category.html':
            require(['courseCategory']);
            break;
        case '/boxuegu/html/course/course_list.html':
            require(['courseList']);
            break;
        case '/boxuegu/html/course/course_topic.html':
            require(['courseTopic']);
            break;
        case '/boxuegu/html/teacher/teacher_add.html':
            require(['teacherAdd']);
            break;
        case '/boxuegu/html/teacher/teacher_list.html':
            require(['teacherList']);
            break;
        case '/boxuegu/html/user/user_profile.html':
            require(['userProfile']);
            break;
        case '/boxuegu/html/user/user_list.html':
            require(['userList']);
            break;
    
    }




});
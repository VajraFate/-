define([], function () {
    // 配置
    require.config = {
        baseUrl: './',
        paths: {
            advertAdd: 'js/advert/advert_add ',
            advertList: 'js/advert/advert_list ',
            courseAdd1: 'js/course/course_add_step1',
            courseAdd2: 'js/course/course_add_step2',
            courseAdd3: 'js/course/course_add_step3',
            courseAdd: 'js/course/course_add',
            courseCategoryAdd: 'js/course/course_category_add',
            courseCategory: 'js/course/course_category',
            courseTopic: 'js/course/course_topic',
            login: 'js/home/login',
            repass: 'js/home/repass',
            settings: 'js/home/settings',
            teacherAdd: 'js/teacher/teacher_add',
            teacherList: 'js/teacher/teacher_list',
            userAdd: 'js/user/user_add',
            userProfile: 'js/user/user_profile',

            // 配置第三方库
            artTemplate: 'lib/artTemplate/template-debug',
            bootstrap: 'lib/bootstrap/js/bootstrap',
            // bootstrap: 'lib/bootstrap/js/bootstrap',
            bootstrapDatepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
            ckeditor: 'lib/ckeditor/ckeditor',
            ckeditorLand: 'lib/ckeditor/ckeditor/lang/zh-cn',

            echarts: 'lib/echarts/echarts.common.min',
            jquery: 'lib/jquery/jquery',
            jqueryCookie: 'lib/jquery-cookie/jquery.cookie',
            jqueryForm: 'lib/jquery-form/jquery.form',
            jqueryRegion: 'lib/jquery-region/jquery.region',
            nprogress: 'lib/nprogress/nprogress',

        },
        shim: {
            // 是非define 定义的模块 ,有依赖与JQUERY 所以要在这里手动配置
            bootstrap:{
                deps:['jquery']
            }
        },

    }



    // 根据页面加载对应的JS模块
});
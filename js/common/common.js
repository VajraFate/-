define(['jqueryCookie'], function () {
    // var cookArr = document.cookie.split('; ');
    // var isLogin = false;
    // console.log(111);
    // // console.log(/^PHPSESSID=/.text(cookArr));
    // for (var i = 0; i < cookArr.length; i++) {
    //     if (/^PHPSESSID=/.test(cookArr[i])) {
    //         isLogin = true;

    //         break;
    //     }
    // }
    // if(!isLogin){
    //      alert('请登陆页面');
    // }
    // !isLogin&&(location.href='/boxuegu/html/home/login.html');

    if (!$.cookie('PHPSESSID')) {
        alert('登陆!');
        location.href = '/boxuegu/html/home/login.html';
    }
})
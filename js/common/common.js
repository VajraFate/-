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
    // 
    // !isLogin&&(location.href='/boxuegu/html/home/login.html');

    if (!$.cookie('PHPSESSID')) {
        alert('登陆!');
        location.href = '/boxuegu/html/home/login.html';
    }



    return {
        parseSearch:function(searchName){
            var searchArr=location.search.slice(1).split('&');
            var searchObj={};
            var tep;
            for(var i=0;i<searchArr.length;i++){
                tep=searchArr[i].split('=');
                searchObj[tep[0]]=tep[1]
              }
              return (searchName==null)?searchObj:search[searchName]
        }
    }
})
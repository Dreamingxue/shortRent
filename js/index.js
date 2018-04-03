//初始化fullPage配置
$(function(){
    $('#container').fullpage({
        anchors:['page1','page2','page3','page4','page5'],
        menu:'#fullpageMenu',
        controlArrows:true,
        navigation:false,
        showActiveTooltip:true,
        slidesNavigation:true,
        slidesNavPosition: 'bottom',
        controlArrowColor: '#fff'

    });
});
//弹框居中
function getWindowSize(ele){
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    var nw = $(ele).outerWidth();
    var nh = $(ele).outerHeight();
    $(ele).css({'margin-left':(w-nw)/2,'margin-top':(h-nh)/2});
}
getWindowSize('.login-panel');
$(window).resize(function(){
   getWindowSize('.login-panel');
});
//鼠标悬浮在按钮上的样式
$('.section1 .user-btn').mouseover(function(event) {
    $(this).css('border','1px solid #fff').siblings('.section1 .user-btn').css('border','none');
});

//显示/关闭登录注册面板
$('.section1 .login').click(function(){
    $('.login-panel').slideDown();
});
$('#closeBtn').click(function(){
    $('.login-panel').slideUp();
})
//向下翻页
$('.down-page').click(function(){
     $.fn.fullpage.moveSectionDown();
 })
$('.up-page').click(function(){
     $.fn.fullpage.moveSectionUp();
 })
//点击查看详情
$('#detail').click(function(){

})
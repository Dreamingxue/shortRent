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
$('.section1 .user-btn').mouseover(function(event) {
    $(this).css('border','1px solid #fff').siblings('.section1 .user-btn').css('border','none');
});
function getWindowSize(){
    var w = $(window).outerWidth();
    var h = $(window).outerHeight();
    var nw = $('.login-panel').outerWidth();
    var nh = $('.login-panel').outerHeight();
    $('.login-panel').css({'margin-left':(w-nw)/2,'margin-top':(h-nh)/2});

}
getWindowSize();
$(window).resize(function(){
   getWindowSize();
});
$('.section1 .login').click(function(){
    $('.login-panel').show();
});
$('#closeBtn').click(function(){
    $('.login-panel').hide();
})
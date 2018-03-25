$(function(){
    $('#container').fullpage({
        anchors:['page1','page2','page3','page4'],
        menu:'#fullpageMenu',
        controlArrows:true,
        paddingTop:'50px',
        navigation:false,
        showActiveTooltip:true,
        slidesNavigation:true,
        controlArrowColor: 'pink'

    });
});
$.ajaxSetup({
    error : function(xhr, textStatus, thrownError) {
        var msg = xhr.readyState != 0 && xhr.readyState != 1 ? xhr.statusText : textStatus;
        var error = xhr.status + ":" + msg;
        alert(xhr.status)
        if(xhr.status != 200){
            if(textStatus == 'timeout'){
                alert('网络不稳定，请求超时');
                xhr.abort();
            }else{
                alert('网络异常');
            }
        }
        //$.messager.alert('温馨提示',error,'error');
    }
});
$(function(){
    //.ajaxError事件定位到document对象，文档内所有元素发生ajax请求异常，都将冒泡到document对象的ajaxError事件执行处理
    $(document).ajaxError(
            //所有ajax请求异常的统一处理函数，处理
            function(event,xhr,options,exc ){
                if(xhr.status == 'undefined'){
                    return;
                }
                switch(xhr.status){
                    case 403:
                        // 未授权异常
                        alert("系统拒绝：您没有访问权限。");
                        break;

                    case 404:
                        alert("您访问的资源不存在。");
                        break;
                   default:
                       alert('网络异常');
                }
            }
    );
});
var page =1;
var url = openUrl+"/video/viewList?page="
$(function (){
    $("#body").css("background-image","url('http://"+theUrl+"/image/background/1.jpg')")
    $("#a2Div1").html('');
    $("#a2Input").removeAttr("disabled");
    $("#a2Input").val("下一页");
    Video();
})
$("#a2Input").click(function (){

})//下一页
function Video(){
    $.get(url+page,function (data) {
        for (var i=0;i<data.length-1;i++){
            $("#a2Div1").append("<p>"+data[i].label+"</p><video src='http://"+theUrl+"/image/"+data[i].storageLocation+"/"+data[i].id+"."+data[i].type+"'controls='controls'></video>");
        }
        if (data[data.length-1]){
            $("#a2Input").attr("disabled","true");
            $("#a2Input").val("不好意思啊，已经到底啦");
        }
        console.log(data,data.length)
    })
}//获取视频方法
$("#a1SpanSvg5").click(function (){
    if ($.cookie("userId")==null)window.location.href="login.html"
    else window.location.href="user.html?type=0"
})//跳转个人用户界面
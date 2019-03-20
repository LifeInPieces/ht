$(function(){
// 收货状态的管理
var flags=$(".status_down").data("flag");
$(".status_first .status").click(function(){
        $(".status_down").slideToggle()
        flags=!flags;
})
$(".status_second .status").click(function(){
    $(".status_down1").slideToggle()
    flags=!flags;
})
// 分页
$(".pagination li").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
})

// 修改密码
$(".rever_password").click(function(){
   $(".outline_time").fadeIn(1000);
   $(".mengban_over").fadeIn(1000)
})
$(".cancel").click(function(){
    $(".outline_show").fadeIn(1000);
    $(".mengban_over").fadeIn(1000)
 })
 $(".assign").click(function(){
    $(".outline_go").fadeIn(1000);
    $(".mengban_over").fadeIn(1000)
 })
$(".open_down ,.preserve").click(function(){
    $(".form_show").fadeOut(1000);
    $(".mengban_over").fadeOut(1000);
})
})
// 角色管理的编辑和删除
$(".pencil_eimt").click(function(){
    $(".role_eimt").fadeIn(1000);
    $(".mengban_over").fadeIn(1000)
 })
 $(".splice_del").click(function(){
    $(".role_del").fadeIn(1000);
    $(".mengban_over").fadeIn(1000)
 })

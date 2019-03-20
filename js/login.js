$(function(){
    $(".denglu").click(function(){
    //  手机号
    var username=$("#username").val()
//     localStorage.setItem("photo",photo)
//     //  密码
//     var Password=$("#Password").val()
    //  b密码
    var password=$("#password").val()
    //  手机号验证码
     var reg1=/^1\d{10}$/;
    //  密码验证码
    var reg2=/^[a-zA-Z][A-Za-z0-9]{6,20}$/
     //  验证手机号
     if(!reg1.test(photo)){
        $(".alert").text("您输入的手机号有误,请从新输入");
        $(".alert").fadeIn(1500);
        $(".alert").fadeOut(1500)
        return;
        }
    // 密码的正则验证
    if(!reg2.test(Password)){
            $(".alert").text("您输入的密码有误,请从新输入");
            $(".alert").fadeIn(1500);
            $(".alert").fadeOut(1500)
            return;
        }
//     if(Password!=password){
//         $(".alert").text("您输入的密码不匹配,请重新输入")
//         $(".alert").fadeIn(1500);
//         $(".alert").fadeOut(1500);
//         return;
//     }
//     if(photo!="" && Password!="" && password!=""){
//         location.href="contact.html"
//     }
//  })
// // ------------------------------------------------------------------------------------------------------------------------------------------
// // 联系方式

// $(".contact").click(function(){
// //  手机号
// var photo=localStorage.getItem("photo")
// //  获取用户名称
// var username=$("#username").val()
//  // 邮箱
//  var email=$("#email").val()
//  //    联系方式的手机号
//  var photos=$("#photos").val()
//  // 邮箱验证码
//  var reg=/^\d+[@]\w+[.]\w+$/;

// if(username==""){
//     $(".alert").text("您还没有输入名称");
//     $(".alert").fadeIn(1500);
//     $(".alert").fadeOut(1500)
//     return;
// }

//   if(!reg.test(email)){
//       $(".alert").text("您输入的邮箱有误,请从新输入");
//       $(".alert").fadeIn(1500);
//       $(".alert").fadeOut(1500)
//       return;
//     }

//     if(photos==""){
//         $(".alert").text("您还没有输入手机号")
//         $(".alert").fadeIn(1500);
//         $(".alert").fadeOut(1500)
//        return;
//     }
//    // 匹配手机号是否一致
//    if(photos!=photo){
//        $(".alert").text("您输入的手机号不匹配,请重新输入")
//        $(".alert").fadeIn(1500);
//        $(".alert").fadeOut(1500)
//       return;
//    }

//    if(username!="" && email!="" && photos!=""){
//     location.href="company.html"
// }
// })

// // ------------------------------------------------------------------------------------------------------------------------------------------
// // 公司信息
// $(".company").click(function(){
// // 公司名称
// var compute=$("#compute").val()
// // 公司电话
// var tel=$("#tel").val()
// // 验证公司电话
// // var reg3=/\d{3}-\d{8}|\d{4}-\d{7}/
// var reg3=/\d{11}/

// if(compute==""){
//     $(".alert").text("您还没有输入公司名称");
//     $(".alert").fadeIn(1500);
//     $(".alert").fadeOut(1500)
//     return;
// }
// // 公司电话
// if(!reg3.test(tel)){
//     $(".alert").text("您输入的公司电话有误,请从新输入");
//     $(".alert").fadeIn(1500);
//     $(".alert").fadeOut(1500)
//     return;
// }
// if(compute!="" && tel!=""){
//     $(".alert").text("恭喜您，注册成功");
//     $(".alert").fadeIn(1500);
//     $(".alert").fadeOut(1500,function(){
//         location.href="login.html"
//     })
//     return;
// }
// })

   
})
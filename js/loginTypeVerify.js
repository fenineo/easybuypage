var token = localStorage.getItem("token");
var flag = false;
var typeLv = 0;

//页面查看权限验证，非登陆用户不可查看
$(function (){
    //后台管理模块默认隐藏
    $(".admin").hide();

    if(token == null){
        //没有登陆，踢回首页
        window.location.href = "Index.html";
    }

    $.ajax({
        url:"/easybuy/user/regist/loginInfo",
        type:"post",
        data:{"token":token},
        dataType:"JSON",
        beforeSend:function (XMLHttpRequest){
            XMLHttpRequest.setRequestHeader("token",token);
        },
        success:function(result){
            flag = result.flag;
            typeLv = result.type;

            if (flag){
                //管理员用户展示管理模块
                if (typeLv == 1){
                    $(".admin").show();
                }
            }else {
                //没有登陆，踢回首页
                window.location.href = "Index.html";
            }

        }
    })
});
window.onload = function(){
    // 获取元素
    var userName = document.querySelector("#user_name");
    var userPwd = document.querySelector("#user_name");
    var loginBtn = document.querySelector("#login_btn");
    var nameMsg = document.querySelector("#namemsg");
    userName.onblur = function(){
        var nameValue = userName.value;
        // 正则
        // 只能是汉字与大小字母及_的组合
        var userNameReg = new RegExp(/^[A-Za-z_\u4e00-\u9fa5]{3,10}$/);
        var bool = userNameReg.test(nameValue);
        if(bool){
            nameMsg.innerHTML = "";
            userName.style.borderColor = "#ccc";
            
        }else {
            nameMsg.innerHTML = "用户名格式错误";
            userName.style.borderColor = "red";
        }
    }
    
    

    


    





}
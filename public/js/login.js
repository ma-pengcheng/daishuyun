window.onload = function(){
    // 获取元素
    var userName = document.querySelector("#user_name");
    var userPwd = document.querySelector("#user_pwd");
    var loginBtn = document.querySelector("#login_btn");
    var nameMsg = document.querySelector("#namemsg");
    var pwdMsg = document.querySelector("#pwdmsg");

    // 用户名输入框
    // 用户名输入框失去焦点后(默认用户完成输入),开始正则验证和后台验证
    userName.onblur = function(){
        // 失去焦点时，如果用户为输入任何东西，则恢复默认值
        if(userName.value == ""){
            userName.value = "请输入用户名";
            nameMsg.innerHTML = "";
            userName.style.borderColor = "#ccc";
            return;
        }
        // 正则
        // 只能是汉字与大小字母及_的组合
        var userNameReg = new RegExp(/^[A-Za-z_\u4e00-\u9fa5]{3,10}$/);
        var bool = userNameReg.test(userName.value);
        // 开始正则验证
        if(bool){
            nameMsg.innerHTML = "";
            userName.style.borderColor = "#ccc";
            // 正则验证成功后 开始后台验证
            var $uname = userName.value;
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    var result = xhr.responseText;
                    // 数据库中如果存在该用户名则默认用户可以继续向下填写密码
                    if(result == 1){
                        return;
                    };
                    // 数据库中如果不存在该用户，则在页面显示给用户错误的信息
                    if(result == 0){
                        nameMsg.innerHTML = "用户名不存在 请重新输入！";
                        userName.style.borderColor = "red";
                    }
                }
            }
            xhr.open("get","/user/dsy/loginName/" + $uname, true);
            xhr.send();
        }else {
            nameMsg.innerHTML = "用户名格式错误";
            userName.style.borderColor = "red";
        }
    }
    // 用户名输入框获取焦点事件(默认用户开始输入或者继续输入);错误提示的样式清除
    userName.onfocus = function(){
        nameMsg.innerHTML = "";
        userName.style.borderColor = "#ccc";
        // 获得焦点时,如果用户时第一次输入则替用户清除默认value值
        if(userName.value == "请输入用户名"){
            userName.value = "";
        }
    }

    // 密码输入框
    // 密码框的获取焦点事件(默认用户开始输入或者继续输入);样式清除
    userPwd.onfocus = function(){
        pwdMsg.innerHTML = "";
        userPwd.style.borderColor = "#ccc";
        // 更改表单类型
        userPwd.type = "password";
        if(userPwd.value == "请输入密码"){
            userPwd.value = "";
        }
    }
    // 密码框的失去焦点事件
    userPwd.onblur = function(){
        // 失去焦点时，如果用户为输入任何东西，则恢复默认值
        if(userPwd.value == ""){
            userPwd.type = "text";
            userPwd.value = "请输入密码";
            pwdMsg.innerHTML = "";
            userPwd.style.borderColor = "#ccc";
            return;
        }

    }
<<<<<<< HEAD
    // 提交按钮单击事件
=======

    // 提交按钮单击事件

>>>>>>> 7dc9d03e9f91014cb20420db341ab252d4c2994c
    loginBtn.addEventListener("click",function(){
        // 正则验证 六位以上数字和大小写字母及._的组合,但是只能以数字或字母开头
        var userPwdReg = new RegExp(/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,19}$/);
        var bool = userPwdReg.test(userPwd.value);
        if(bool){
             pwdMsg.innerHTML = "";
             userPwd.style.borderColor = "#ccc";
             var $uname = userName.value;
             var $upwd = userPwd.value;
             var xhr = new XMLHttpRequest();
             xhr.onreadystatechange = function(){
                 if(xhr.readyState === 4 && xhr.status === 200){
                     var result = xhr.responseText;
                     if(result == 1){
                         // 准备跳转的页面
                         window.location.href="index.html"
                         return;
                     };
                     if(result == 0){
                         pwdMsg.innerHTML = "密码错误,请重新输入！";
                         userPwd.style.borderColor = "red";
                         return;
                     }
                 }
             }
             xhr.open("get","/user/dsy/login/" + $uname + "&" + $upwd, true);
             xhr.send();
        }else {
            pwdMsg.innerHTML = "密码格式错误";
            userPwd.style.borderColor = "red";
            return;
        }
    })
    
    

    


    





}
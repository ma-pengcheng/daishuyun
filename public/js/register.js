window.onload = function() {
    // 1.获取需要操作的元素
    var regUname = document.querySelector("#reg_uname");
    var regPhone = document.querySelector("#reg_phone");
    var regPwd = document.querySelector("#reg_pwd");
    var regEmail = document.querySelector("#reg_email");
    var regCop = document.querySelector("#reg_cop");
    var regBtn = document.querySelector("#reg_btn");
    var mustInfo = document.querySelector(".text_box>.must")
    var inputs = document.querySelectorAll(".register_box input");
    // 2.获得焦点的验证函数
    function Hvali(element, value, info) {
        if (element.value === value) {
            element.value = "";
            element.nextElementSibling.style.display = "block"
            element.nextElementSibling.className = "vali_info";
            element.nextElementSibling.innerHTML = info;
        }
        element.nextElementSibling.style.display = "block"
        element.nextElementSibling.className = "vali_info";
        element.nextElementSibling.innerHTML = info;
    }
    // 3.失去焦点的验证函数
    function Svali(element, reg, val) {
        var bool = reg.test(element.value);
        if (bool) {
            element.nextElementSibling.className = "success";
            element.nextElementSibling.innerHTML = "";
        } else {
            element.nextElementSibling.className = "fail";
            element.nextElementSibling.innerHTML = "";
        }
        if (element.value === "") {
            element.value = val;
        }
    }
    // 4.姓名输入框验证
    regUname.onfocus = function() {
        Hvali(regUname, "设置登录姓名", "2~10位汉字与大小字母的组合");
    }
    regUname.onblur = function() {
            var regNameReg = new RegExp(/^[A-Za-z_\u4e00-\u9fa5]{2,10}$/);
            Svali(regUname, regNameReg, "设置登录姓名");
            // searchName();
        }
    // 5.手机输入框验证
    regPhone.onfocus = function() {
        Hvali(regPhone, "请输入手机号", "11位的合法手机号码")
    }
    regPhone.onblur = function() {
            var regPhoneReg = new RegExp(/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/);
            Svali(regPhone, regPhoneReg, "请输入手机号")
        }
        // 6.密码输入框验证
    regPwd.onfocus = function() {
        Hvali(regPwd, "请设置密码", "6~20位数字与大小字母组合")
    }
    regPwd.onblur = function() {
            var regPwdReg = new RegExp(/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,19}$/);
            Svali(regPwd, regPwdReg, "请设置密码")
        }
        // 7.邮箱输入框验证
    regEmail.onfocus = function() {
        Hvali(regEmail, "请输入邮箱地址", "带有@的合法邮箱地址")
    }
    regEmail.onblur = function() {
            var regEmailReg = new RegExp(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
            Svali(regEmail, regEmailReg, "请输入邮箱地址")
        }
        // 8.公司输入框验证
    regCop.onfocus = function() {
        Hvali(regCop, "请输入公司名称",
            "请输入详细的公司名称")
    }
    regCop.onblur = function() {
        var regCopReg = new RegExp(/^[\u4e00-\u9fa5]{2,}$/)
        Svali(regCop, regCopReg, "请输入公司名称")
    }

    // ajax请求
    function searchName() {
        var $uname = regUname.value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var result = xhr.responseText;
                if (result == 1) {
                    name_msg.innerHTML = "用户名已存在！"
                }
            }
        }
        xhr.open("get", "/pro/v1/getUser/" + $uname, true);
        xhr.send();
    }
    // 注册用户
    function regUser() {
        var $uname = regUname.value;
        var $upwd = regPwd.value;
        var $email = regEmail.value;
        var $phone = regPhone.value;
        var $company = regCop.value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var result = xhr.responseText;
                console.log(1)
                if (result == 1) {
                    console.log(1)
                    // window.location.href = "index.html"
                };
                if (result == 0) {
                    alert("注册失败！");
                }
            }
        }
        xhr.open("post", "/user/dsy/regUser", true);
        // 设置请求头
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // 创建请求主体
        var formdata = "uid=" + null + "&uname=" + $uname + "&upwd=" + $upwd + "&email=" + $email + "&phone=" + $phone + "&company=" + $company;
        // 发送请求主体
        console.log(formdata);
        xhr.send(formdata);
    }
    regBtn.onclick = function() {
        regUser();
    }
}
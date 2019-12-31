
$(function(){
    // 网页头部加载
    $.ajax({
        url:"http://127.0.0.1:6060/header.html",
        type:"get",
        success: function(result) {
            $("#header").replaceWith(result);
            var search = location.search;
            if(search !== ""){
                var strName = decodeURIComponent(search);
                var uname = strName.split("=")[1];
                var indexLogin = document.querySelector("#index_login");
                var logout = document.querySelector("#login_out");
                indexLogin.innerHTML = uname;
                logout.innerHTML = "注销";
                logout.onclick = function(e){
                    if(logout.innerHTML === "注销"){
                        e.preventDefault();
                        window.location.href = "index.html";
                        logout.innerHTML = "注册";
                        indexLogin.innerHTML = "登录";
                    }
                }
            }
        }
    });
    // 网页尾部加载
    $.ajax({
        url:"http://127.0.0.1:6060/footer.html",
        type:"get",
        success: function(result) {
            $("#footer").replaceWith(result);
        }
    });
    // 网页表单加载
    $.ajax({
        url:"http://127.0.0.1:6060/form.html",
        type:"get",
        success: function(result) {
            $("#form").replaceWith(result);
            function client(){
                var form = document.querySelector("#form");
                var $company = f_company.value;
                var $city = f_city.value;
                var $industry = f_industry.value;
                var $fname = f_name.value;
                var $fphone = f_phone.value;
                if(f_solution.checked){
                    var $necessary = "数据中台解决方案";
                };
                if(f_stack.checked){
                    var $necessary = "数栈";
                };
                if(f_visua.checked) {
                    var $necessary = "数据可视化大屏幕";
                };
                if(f_partner.checked){
                    var $necessary = "成为合作伙伴";
                }
                var $demand = f_demand.value;
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        var result = xhr.responseText;
                        if (result == 1) {
                            alert("我们将尽快给您回复!");
                            location.reload();
                        }
                        if (result == 0) {

                        }
                    }
                }
                xhr.open("post", "/user/dsy/fomUser", true);
                // 设置请求头
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                // 创建请求主体
                var formdata = "uid=" + null + "&company=" + $company + "&city=" + $city + "&industry=" + $industry + "&fname=" + $fname + "&fphone=" + $fphone + "&necessary=" + $necessary + "&demand=" + $demand;
                // 发送请求主体
                console.log(formdata);
                xhr.send(formdata);
                }
                var fsubmit = document.querySelector("#f_submit");
                fsubmit.onclick = function(){
                    client();
                }
        }
    })
})
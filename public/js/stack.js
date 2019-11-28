window.onload = function(){
// 数栈页面 产品功能介绍
// 获取元素
var faqIcon = document.querySelectorAll(".faq_item_icon");
var faqBtm = document.querySelectorAll(".faq_item_btm");
var tabSlider = document.querySelector(".slider_wrap_item");
var tabItem = tabSlider.querySelectorAll("span");
var functionTop = document.querySelectorAll(".function_btm_top");
var faqGroup = document.querySelectorAll(".faq_group");

// 测试是否准确获取
// console.log(tabItem.length);
// console.log(functionTop.length);
// console.log(faqGroup.length);
for(var i = 0;i < tabItem.length;i++){
    tabItem[i].setAttribute("Tabindex",i);
    tabItem[i].addEventListener("click",function(){
        for(var i = 0 ;i < tabItem.length;i++){
            functionTop[i].style.display = "none";
            faqGroup[i].style.display = "none";
            tabItem[i].className = "";
        }
        this.className = "tab_current";
        var Tabindex = this.getAttribute("Tabindex");
        functionTop[Tabindex].style.display = "block";
        faqGroup[Tabindex].style.display = "block";
    })
}


var flag = true;
for(var i = 0; i < faqIcon.length;i++){
    faqIcon[i].setAttribute("index",i);
    // 利用jQuery实现faq_item_btm的显示与隐藏
    $(document).ready(function(){
        $(faqIcon[i]).click(function(){
            var index = this.getAttribute("index");
            $(faqBtm[index]).toggle(1000);
        });
    });
    // 加减图标的切换
    faqIcon[i].addEventListener("click",function(){
        if(flag){
            this.className = "faq_item_icon faq_item_icon2";
            flag=false;
        }else {
            this.className = "faq_item_icon";
            flag=true;
        }
        
    })
}

// 客户案例板块的切换 (前两个部分功能)
// 获取元素
 var clientList = document.querySelector(".client_list")
 var listItems = clientList.querySelectorAll("span");
 var clientDes = document.querySelectorAll(".client_des");
//  验证是否获取成功
//  console.log(clientDes.length);
// 一级切换(点击左边，更换右面的内容)
for(var i = 0;i < listItems.length; i++){
    listItems[i].setAttribute("listIndex",i);
    listItems[i].addEventListener("click",function(){
        var listIndex = this.getAttribute("listIndex");
        console.log(listIndex);
        for(var i = 0; i < listItems.length;i++){
            listItems[i].className = "";
        }
        // 右侧的展示框只写了前两个list的，数量不一致，所以不能用同一个for循环排他
        for(var i = 0;i < clientDes.length;i++){
            clientDes[i].style.display = "none";
        }
        this.className = "current";
        clientDes[listIndex].style.display = "block";
    })

}
// 二级切换 想不出来
  var clientTabItem = document.querySelectorAll(".tab_slider_item");
  var clientTabslider = clientTabItem.querySelectorAll("span");
}
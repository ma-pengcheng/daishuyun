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
}
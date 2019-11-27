// 客户
var customerUndrop = document.querySelectorAll(".home_customer_drop");
var customerMore = document.querySelector('.home_customer_more');
var flag = true;
customerMore.addEventListener("click",function(){
    if(flag){
        for(var i = 0;i<customerUndrop.length;i++){
            customerUndrop[i].style.display = "block";
        }
        customerMore.className = "home_customer_more unfold";
        flag=false;
    }else {
        for(var i = 0;i<customerUndrop.length;i++){
            customerUndrop[i].style.display = "none";
        }
        customerMore.className = "home_customer_more";
        flag=true;
    }

})
// 单选按钮
var formlist = document.querySelector(".input_list_radio");
var inputR = formlist.querySelectorAll("input");
    console.log(inputR.length)
    for(var i = 0;i < inputR.length;i++){
        inputR[i].addEventListener("click",function(){
            for(var i = 0;i < inputR.length;i++){
                inputR[i].checked = "";
            }
            this.checked = "on";
        })
    }
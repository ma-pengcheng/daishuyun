// 数据可视化页面的功能
window.onload = function(){
    // 视频播放
    var videoBj = document.querySelector(".home_video_bj");
    var videoDe = document.querySelector(".videoDefault");
    var video = document.querySelector("video");
    var flag = true;
    videoBj.addEventListener("click",function(){
        if(flag){
            videoBj.style.display = "none";
            // 视频自动播放的方法
            video.play();
            videoDe.style.display = "block";  
        }
    })
    // nav栏的定位类型切换
    // 获取元素
    var dataNav = document.querySelector(".data_nav");
    var header = document.querySelector(".header");
    var dataNavGroup = document.querySelector(".data_nav_group");
    var as = dataNav.querySelectorAll("a");
    // 注册事件
    document.addEventListener("scroll",move)
    function move(){
        // console.log(window.pageYOffset);
        if(window.pageYOffset >= 400){
            dataNav.className = "data_nav data_nav_f";
            header.className = "header header_f"
        }else {
            dataNav.className = "data_nav";
            header.className = "header";
        }
    }
    for(var i = 0;i < as.length;i++){
        as[i].addEventListener("click",function(){
            for(var i = 0;i < as.length;i++){
                as[i].className = "";
            }
            this.className = "current";
        })
    }
}
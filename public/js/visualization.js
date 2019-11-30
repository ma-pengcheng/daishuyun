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
}
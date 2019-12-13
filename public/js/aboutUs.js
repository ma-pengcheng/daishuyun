window.onload = function(){
    // 视频播放
    var videoBtn = document.querySelector(".about_video_btn");
    var mask = document.querySelector(".mask");
    var videoBox = document.querySelector(".video_promt_box");
    var video = document.querySelector("video");
    var videoClose = document.querySelector(".video_close");

    videoBtn.addEventListener("click",function(){
        mask.style.display = "block";
        videoBox.style.display = "block";
        video.play();
    })
    videoClose.addEventListener("click",function(){
        mask.style.display = "none";
        videoBox.style.display = "none";
        video.close();
    })
}
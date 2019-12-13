//PC
$(function(){
    //开启搜索弹窗
    $(".search_icon").on("click",function(){
        $(".search_popup").toggle("")
    })

    //关闭搜索弹窗
    $(".input_close").on("click",function(){
        $(".search_popup").fadeOut()
    })

    $(".top").on("click",function(){
          $("html,body").animate({"scrollTop":"0"},500)
      })
})

//移动端
//侧边导航
$(function(){
  $(".menu").on("click",function(){
      $(".phone_mask").fadeIn()
      $(".phone_nav_right").animate({right:"0"},500);
  })

   $(".phone_mask").on("click",function(){
      $(".phone_nav_right").animate({right:"-60%"},500);
      $(".phone_mask").fadeOut()
   })

   //收缩展开
    $(".level").on("click",function(){
        $(this).parents(".phone_nav_top").toggleClass("current")
        $(this).parents(".phone_nav_top ").next().slideToggle();
    })

})

$(function(){
  $('.nav>ul>li').each(function(){
      if($(this).hasClass('current-menu-item') || $(this).hasClass('current-category-ancestor') || $(this).hasClass('current-menu-parent') || $(this).hasClass('current-post-ancestor')){
          $(this).addClass('current');
      }
  })
})









$(function(){
    $.ajax({
        url:"http://127.0.0.1:6060/header.html",
        type:"get",
        success: function(result) {
            $("#header").replaceWith(result);
        }
    })
})
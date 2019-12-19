$(function(){
    $.ajax({
        url:"http://127.0.0.1:6060/footer.html",
        type:"get",
        success: function(result) {
            $("#footer").replaceWith(result);
        }
    })
})
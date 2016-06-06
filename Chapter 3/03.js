// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("#switcher-default").addClass("selected");

    $("#switcher button").click(function () {
        var bodyClass = this.id.split("-")[1];
        $("body").removeClass().addClass(bodyClass);
        $("#switcher button").removeClass();
        $(this).addClass("selected");
    });

    $("#switcher h3").click(function(){
       $("#switcher button").toggleClass("hidden");
    }).hover(function(){
        // 鼠标进入时,促发事件
        $(this).addClass("hover");
    },function(){
        // 鼠标离开时,促发事件
        $(this).removeClass("hover");
    });

});
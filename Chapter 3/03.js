// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("#switcher-default").addClass("selected");

    //$("#switcher button").click(function (event) {
    //    var bodyClass = this.id.split("-")[1];
    //    $("body").removeClass().addClass(bodyClass);
    //    $("#switcher button").removeClass();
    //    $(this).addClass("selected");
    //    event.stopPropagation(); // 停止事件传播
    //});

    $("#switcher").hover(function(){
        $("#switcher").addClass("hover");
    },function(){
        $("#switcher").removeClass("hover");
    });

    // 使用内置事件委托功能
    $("#switcher").on("click","button",function(){
        var bodyClass = event.target.id.split("-")[1];
        $("body").removeClass().addClass(bodyClass);
        $("#switcher button").removeClass();
        $(this).addClass("selected");
    });

    $("#switcher").click(function(event){
        if(event.target == this) {
            $("#switcher button").toggle("hidden");
            //event.stopPropagation();
        }
    })


});
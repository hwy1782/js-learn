// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("#switcher-default")
        .addClass("selected")
        .on("click", function () {
            $("body").removeClass("large").removeClass("narrow");
            //$("#switcher button").removeClass();
            //$(this).addClass("selected");
        });

    $("#switcher-large")
        .on("click", function () {
        $("body").removeClass("large")
            .removeClass("narrow")
            .addClass("large");
        //$("#switcher button").removeClass("selected");
        //$(this).addClass("selected");
    });

    $("#switcher-narrow").on("click", function () {
        $("body").removeClass("large").removeClass("narrow").addClass("narrow");
        //$("#switcher button").removeClass();
        //$(this).addClass("selected");
    });

    $("#switcher button").on("click",function(){
        $("#switcher button").removeClass("selected");
        $(this).addClass("selected");
    })
});
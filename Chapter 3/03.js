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
        //console.log(bodyClass);
        $("#switcher button").removeClass();
        $("body").removeClass().addClass(bodyClass);
        $(this).addClass("selected");
    });

});
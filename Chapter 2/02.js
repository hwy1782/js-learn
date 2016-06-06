// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
    $("#selected-plays > li > ul > li").addClass("special");
    //$("td:eq('2')").addClass("year");
    $("td").parent().find("td:eq(2)").addClass("year");
    //$("tr > td:eq(2)").addClass("year");
    $("tr > td:contains('Tragedy'):eq(0)").parent().addClass("special");

    $("li > a").addClass("afterlink");

});
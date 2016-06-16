// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("<a href='#top'>back to top</a>").insertAfter("div.chapter p");
    $("<a id='top'></a>").prependTo("body");

    $("span.footnote").insertBefore("#footer").wrapAll("<ol id='notes'></ol>").wrap("<li></li>");

    $("div.chapter a[href*='wikipedia']").attr({
            rel: 'external',
            title: function () {
                return "learn more about " + $(this).text() + " at wikipedia";
            },
            id: function (index, oldValue) { // 值回调:就是给参数传入一个函数,而不是一个具体的值
                return "wikilink-" + index;
            }
        }
    );
});
// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("div.chapter a[href*='wikipedia']").attr({
            rel: 'external',
            title: "learn more at Wikipedia ",
            id: function (index, oldValue) { // 值回调:就是给参数传入一个函数,而不是一个具体的值
                return "wikilink-" + index;
            }
        }
    );
});
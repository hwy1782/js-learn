// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("<a href='#top'>back to top</a>").insertAfter("div.chapter p");
    $("<a id='top'></a>").prependTo("body");

    //$("span.footnote").insertBefore("#footer").wrapAll("<ol id='notes'></ol>").wrap("<li></li>");

    var $note = $("<ol id='notes'></ol>").insertBefore("#footer");
    // 利用.each()回调的参数。这个参数表示迭代的次 数,从0开始,每迭代一次就加1
    $("span.footnote").each(function (index) {
        //在回调函数中,this关键字指 向当前正在操作的DOM元素
        //$("<sup>" + (index + 1) + "</sup>").insertBefore(this);
        //$(this).appendTo($note).wrap("<li></li>");
        //$(this).before(["<sup>", index + 1, "</sup>"].join("")).appendTo($note).wrap("<li></li>");
        // <a href='xx'>xxx</a>
        $(this).before(["<sup>", "<a href='#footnode-", index + 1,
                "' id='context-", index + 1, "'>", index + 1, "</a>", "</sup>"].join(""))
            .appendTo($note).wrap("<li id='footnode-" + (index + 1) + "'></li>");
    });

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
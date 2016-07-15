// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.
$(document).ready(function () {
    $("#topics a").click(function (event) {
        // 阻止连接打开新的页面
        event.preventDefault();
        // 删除所有topic上的selected样式
        $("#topics a.selected").removeClass("selected");
        // 在被点击的selected上添加样式
        $(this).addClass("selected");

        // 获取当前点击的文本内容
        var topic = $(this).text();
        // 展示所有的新闻内容
        $("#news tr").show();

        if (topic != 'All') {
            $("#news tr:has(td):not(:contains('" + topic + "'))").hide();
        }
    });
});
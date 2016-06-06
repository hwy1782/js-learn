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

    $("#switcher").hover(function () {
        $("#switcher").addClass("hover");
    }, function () {
        $("#switcher").removeClass("hover");
    });

    // 使用内置事件委托功能
    $("#switcher").on("click", "button", function () {
        var bodyClass = event.target.id.split("-")[1];
        $("body").removeClass().addClass(bodyClass);
        $("#switcher button").removeClass();
        $(this).addClass("selected");
    });

    // 非button区域点击隐藏折叠样式转换器
    //$("#switcher").click(function (event) {
    //    if (!$(event.target).is("button")) {
    //        $("#switcher button").toggleClass("hidden");
    //    }
    //});
    // 定义按钮点击事件
    var toggleSwitch = function (event) {
        if (!$(event.target).is("button")) {
            $("#switcher button").toggleClass("hidden");
        }
    };
    // 给样式转换器绑定按钮点击事件
    $("#switcher").on("click.collapse", toggleSwitch);
    // 用户任意单击时解除绑定,确定是default按钮时添加绑定
    $("#switcher button").click(function () {
        //console.log("button click remove biding");
        $("#switcher").off("click", toggleSwitch);
        if (this.id == "switcher-default") {
            $("#switcher").on("click.collapse", toggleSwitch);
        }
    });
});
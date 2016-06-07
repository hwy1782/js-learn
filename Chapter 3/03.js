// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function () {
    $("#switcher-default").addClass("selected");

    $("#switcher").hover(function () {
        $("#switcher").addClass("hover");
    }, function () {
        $("#switcher").removeClass("hover");
    });

    // 使用内置事件委托功能,修改页面样式
    $("#switcher").on("click", "button", function (event) {
        var bodyClass = event.target.id.split("-")[1];
        $("body").removeClass().addClass(bodyClass);
        $("#switcher button").removeClass();
        $(this).addClass("selected");
    });

    // 定义 隐藏样式转换器 方法
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

    // 模仿用户操作,在文档加载完毕的时候,自动隐藏样式转换器.注意这段代码必须放在click事件定义之后,才能使用click事件
    //$("#switcher").trigger("click");
    // 使用不带参数的click方法也能够触发,自动隐藏转换器的效果
    $("#switcher").click();


    // 需要监听的键盘字符
    var trigger = {
        D: "default",
        N: "narrow",
        L: "large"
    };

    // 键盘点击事件
    $(document).keyup(function (event) {
        var key = String.fromCharCode(event.which);
        if (key in trigger) {
            $("#switcher-" + trigger[key]).click();
            //$("#switcher-default").click();
        }
    });
});
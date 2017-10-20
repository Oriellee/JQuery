$(function() {
    $("#search input").hover(function() {
        $(this).stop(true, true)
            .animate({ width: "200" }, 200);
    }, function() {
        $(this).stop(true, true)
            .animate({ width: "150" }, 200);
    });
    $("#search input,#secondInput input").focus(function(event) {
        if ($(this).val() == this.defaultValue) {
            $(this).val("");
        }
    }).blur(function(event) {
        if ($(this).val() == "") {
            $(this).val(this.defaultValue);
        }
    }).keyup(function(e) {
        if (e.which == 13) {
            alert("回车提交表单！");
        }
    });
    $("#search img").click(function(event) {
        if ($("#search input").css('display') == "none") {
            $("#secondInput").show();
            $("#secondInput input").focus();
        } else {}
    });
    $("#secondInput").focusout(function(event) {
        $(this).hide();
    });
    $(window).resize(function() {
        $("#secondInput").hide();

    });
})
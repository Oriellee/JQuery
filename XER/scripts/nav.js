$(function() {
    $("#menu li").hover(function() {
        $(this).find('.nav').show();
    }, function() {
        $(this).find('.nav').hide();
    });

    function check(width) {
        if (width < 768) {
            $("#smallMenu").show();
            $("#menu").appendTo($("#newMenu"));
            $("#header").css('height', '6rem');
        } else {
            $("#header").css('height', '9rem');
            $("#menu").appendTo($("#header"));
            $("#smallMenu").hide();
            $("#newMenu").hide();
        }
    }
    check($(window).width());
    $(window).resize(function() {
        var width = $(this).width();
        check(width);
    });
    $("#smallMenu").click(function(event) {
        if ($("#newMenu").css("display") == "none") {
            $("#newMenu").show();

        } else {
            $("#newMenu").hide();
        }
    });

})
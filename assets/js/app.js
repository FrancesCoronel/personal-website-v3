$(function() {
    $("a.black-scheme").click(function() {
        $(".site-wrapper").addClass("black");
        $(".logo").attr("src", "assets/img/logo-white.svg");
    });
    $("a.white-scheme").click(function() {
        $(".site-wrapper").removeClass("black");
        $(".logo").attr("src", "assets/img/logo-black.svg");
    });
});

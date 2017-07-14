$(document).ready(function () {

    /* Light Gallery */
    $("#lightgallery").lightGallery({
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });

    /* Changing Tab Title */
    var title = document.title;
    var alttitle = "Whatcha up to? 👀";

    $(window).blur(function () {
        document.title = alttitle;
    });

    $(window).focus(function () {
        document.title = title;
    });
});
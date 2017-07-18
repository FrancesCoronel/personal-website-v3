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

    /* Twemoji */

    // Set the size of the rendered Emojis
    // This can be set to 16x16, 36x36, or 72x72
    twemoji.size = '36x36';

    // Parse the document body and
    // insert <img> tags in place of Unicode Emojis
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg'
    });

    $('a.navbar-brand-link').hover(function () {
        $('.navbar-brand img').attr('src' , '/assets/images/logo-red.svg');
    });

    $("input.gsc-search-button.gsc-search-button-v2").attr('src', 'https://www.clker.com/cliparts/Y/3/d/w/R/r/search-icon-white-hi.png');
});
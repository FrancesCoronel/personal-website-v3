$(document).ready(function () {

    /* Light Gallery */
    $("#lightgallery").lightGallery({
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });

    /* Changing Tab Title */
    var title = document.title;
    var altTitles = ["Whatcha up to? 👀", "'Ello Gov'nor! 🎩", "Top o' the mornin' to ya! ☘", "Wubba, lubba dub-dub! 🔬", "E.T. phone home. 👽", "There's no place like home. 🏠", "Live long and prosper. 🖖", "Here's Johnny! 🔪", "My precious. 💍", "Do you read me, HAL? 🔴", "Expecto patronum! ⚡"];
    var altTitle = altTitles[Math.floor(Math.random() * altTitles.length)];

    $(window).blur(function () {
        document.title = altTitle;
    });

    $(window).focus(function () {
        document.title = title;
    });

    /* Twemoji */

    // Set the size of the rendered Emojis
    // This can be set to 16x16, 36x36, or 72x72
    twemoji.size = '36x36';
    twemoji.parse(document.body, {
        folder: 'svg',
        ext: '.svg'
    });

    $('a.navbar-brand-link').hover(function () {
        $('.navbar-brand img').attr('src', '/assets/img/logo-red.svg');
    });

    $("input.gsc-search-button.gsc-search-button-v2").attr('src', 'https://www.clker.com/cliparts/Y/3/d/w/R/r/search-icon-white-hi.png');
});
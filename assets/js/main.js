$(document).ready(function() {

    /* Light Gallery */
    $("#lightgallery").lightGallery({
        thumbnail: true,
        animateThumb: true,
        showThumbByDefault: true
    });

    /* Attempting to Change Tab Title */
    var title = document.title;
    var alttitle = "Whatcha up to? <i class='twa twa-lg twa-eyes'></i>";

    $(window).blur(function() {
        document.title = alttitle;
    });

    $(window).focus(function() {
        document.title = title;
    });


    /* Scroll Up Button */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /* FitVids */
    $("#main").fitVids();

    /* Sticky Bar */
    $(".sticky").Stickyfill();

    var stickySideBar = function() {
        var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 1024 : !$(".author__urls-wrapper button").is(":visible");
        if (show) {
            // fix
            Stickyfill.rebuild();
            Stickyfill.init();
            $(".author__urls").show();
        } else {
            // unfix
            Stickyfill.stop();
            $(".author__urls").hide();
        }
    };

    stickySideBar();

    $(window).resize(function() {
        stickySideBar();
    });

    // Follow menu drop down
    $(".author__urls-wrapper button").on("click", function() {
        $(".author__urls").fadeToggle("fast", function() {});
        $(".author__urls-wrapper button").toggleClass("open");
    });

    // init smooth scroll
    $("a").smoothScroll({ offset: -20 });

    // add lightbox class to all image links
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

    // Magnific-Popup options
    $(".image-popup").magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
        },
        removalDelay: 500, // Delay in milliseconds before popup is removed
        // Class that is added to body when popup is open.
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-zoom-in',
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

});

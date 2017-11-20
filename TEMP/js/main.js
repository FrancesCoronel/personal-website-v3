$(document).ready(function() {
  /*
   * Greedy Navigation
   *
   * https://codepen.io/lukejacksonn/pen/PwmwWV
   *
   */

  var $nav = $("#site-nav");
  var $btn = $("#site-nav button");
  var $vlinks = $("#site-nav .visible-links");
  var $hlinks = $("#site-nav .hidden-links");

  var breaks = [];

  function updateNav() {
    var availableSpace = $btn.hasClass("hidden")
      ? $nav.width()
      : $nav.width() - $btn.width() - 30;

    // The visible list is overflowing the nav
    if ($vlinks.width() > availableSpace) {
      // Record the width of the list
      breaks.push($vlinks.width());

      // Move item to the hidden list
      $vlinks
        .children()
        .last()
        .prependTo($hlinks);

      // Show the dropdown btn
      if ($btn.hasClass("hidden")) {
        $btn.removeClass("hidden");
      }

      // The visible list is not overflowing
    } else {
      // There is space for another item in the nav
      if (availableSpace > breaks[breaks.length - 1]) {
        // Move the item to the visible list
        $hlinks
          .children()
          .first()
          .appendTo($vlinks);
        breaks.pop();
      }

      // Hide the dropdown btn if hidden list is empty
      if (breaks.length < 1) {
        $btn.addClass("hidden");
        $hlinks.addClass("hidden");
      }
    }

    // Keep counter updated
    $btn.attr("count", breaks.length);

    // Recur if the visible list is still overflowing the nav
    if ($vlinks.width() > availableSpace) {
      updateNav();
    }
  }

  /** https://benmarshall.me/responsive-iframes/ **/
  // Find all iframes
  var $iframes = $("iframe");

  // Find &#x26; save the aspect ratio for all iframes
  $iframes.each(function() {
    $(this)
      .data("ratio", this.height / this.width)
      // Remove the hardcoded width &#x26; height attributes
      .removeAttr("width")
      .removeAttr("height");
  });

  // Resize the iframes when the window is resized
  $(window)
    .resize(function() {
      $iframes.each(function() {
        // Get the parent container&#x27;s width
        var width = $(this)
          .parent()
          .width();
        $(this)
          .width(width)
          .height(width * $(this).data("ratio"));
      });
      // Resize to fix all iframes on page load.
    })
    .resize();

  // Window listeners

  $(window).resize(function() {
    updateNav();
  });

  $btn.on("click", function() {
    $hlinks.toggleClass("hidden");
    $(this).toggleClass("close");
  });

  updateNav();
  // Light gallery initialization
  $("#lightgallery").lightGallery({
    thumbnail: true,
    animateThumb: true,
    showThumbByDefault: true
  });

  // Changing title of tab
  var title = document.title;
  var altTitles = [
    "Whatcha up to? 👀",
    "'Ello Gov'nor! 🎩",
    "Top o' the mornin' to ya! ☘",
    "Wubba, lubba dub-dub! 🔬",
    "E.T. phone home. 👽",
    "There's no place like home. 🏠",
    "Live long and prosper. 🖖",
    "Here's Johnny! 🔪",
    "My precious. 💍",
    "Do you read me, HAL? 🔴",
    "Expecto patronum! ⚡"
  ];
  var altTitle = altTitles[Math.floor(Math.random() * altTitles.length)];

  $(window).blur(function() {
    document.title = altTitle;
  });

  $(window).focus(function() {
    document.title = title;
  });

  // Twemoji
  // Set the size of the rendered Emojis
  // This can be set to 16x16, 36x36, or 72x72
  twemoji.parse(document.body, {
    folder: "svg",
    ext: ".svg"
  });

  $("a.navbar-brand-link").hover(function() {
    $(".navbar-brand img").attr("src", "/assets/img/logo-red.svg");
  });

  // Google Search
  $("input.gsc-search-button.gsc-search-button-v2").attr(
    "src",
    "https://www.clker.com/cliparts/Y/3/d/w/R/r/search-icon-white-hi.png"
  );

  // Return to Top
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
  });

  $("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });
});

var OneSignal = window.OneSignal || [];

OneSignal.push(["init", {
  appId: "7bc782bf-6ee1-4373-8d1d-1346aba3b9ff",
  autoRegister: false,
  persistNotification: false,
  notifyButton: {
    enable: true, // Required to use the notify button
    size: 'medium', // One of 'small', 'medium', or 'large'
    theme: 'default', // One of 'default' (red-white) or 'inverse" (white-red)
    colors: { // Customize the colors of the main button and dialog popup button
      'circle.background': 'rgb(96, 125, 139)',
      'circle.foreground': 'white',
      'badge.background': 'rgb(96, 125, 139)',
      'badge.foreground': 'white',
      'badge.bordercolor': 'white',
      'pulse.color': 'white',
      'dialog.button.background.hovering': 'rgb(37, 49, 55)',
      'dialog.button.background.active': 'rgb(37, 49, 55)',
      'dialog.button.background': 'rgb(96, 125, 139)',
      'dialog.button.foreground': 'white'
    },
    position: 'bottom-left', // Either 'bottom-left' or 'bottom-right'
    offset: {
      bottom: '20px',
      left: '20px',
      /* Only applied if bottom-left */
      right: '0px' /* Only applied if bottom-right */
    },
    prenotify: true,
    /* Show an icon with 1 unread message for first-time site visitors */
    showCredit: false,
    /* Hide the OneSignal logo */
    text: {
      'tip.state.unsubscribed': 'Subscribe to notifications 🍓️',
      'tip.state.subscribed': "You're subscribed to notifications 🎉",
      'tip.state.blocked': "You've blocked notifications 😢️",
      'message.prenotify': 'Click to subscribe to notifications 🍓️',
      'message.action.subscribed': "Thanks for subscribing! 😊",
      'message.action.resubscribed': "You're subscribed to notifications 🎉",
      'message.action.unsubscribed': "You won't receive notifications again 😳",
      'dialog.main.title': 'Manage Site Notifications ⚙️',
      'dialog.main.button.subscribe': 'SUBSCRIBE',
      'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
      'dialog.blocked.title': 'Unblock Notifications',
      'dialog.blocked.message': "Follow these instructions to allow notifications:"
    }
  }
}]);
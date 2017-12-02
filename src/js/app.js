// Navbar
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
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

window.blur = function() {
  document.title = altTitle;
};

window.focus = function() {
  document.title = title;
};

// Twemoji
twemoji.parse(document.body, {
  folder: "svg",
  ext: ".svg"
});

// One Signal
var OneSignal = window.OneSignal || [];

OneSignal.push([
  "init",
  {
    appId: "7bc782bf-6ee1-4373-8d1d-1346aba3b9ff",
    autoRegister: false,
    persistNotification: false,
    notifyButton: {
      enable: true, // Required to use the notify button
      size: "medium", // One of 'small', 'medium', or 'large'
      theme: "default", // One of 'default' (red-white) or 'inverse" (white-red)
      colors: {
        // Customize the colors of the main button and dialog popup button
        "circle.background": "rgb(96, 125, 139)",
        "circle.foreground": "white",
        "badge.background": "rgb(96, 125, 139)",
        "badge.foreground": "white",
        "badge.bordercolor": "white",
        "pulse.color": "white",
        "dialog.button.background.hovering": "rgb(37, 49, 55)",
        "dialog.button.background.active": "rgb(37, 49, 55)",
        "dialog.button.background": "rgb(96, 125, 139)",
        "dialog.button.foreground": "white"
      },
      position: "bottom-left", // Either 'bottom-left' or 'bottom-right'
      offset: {
        bottom: "20px",
        left: "20px",
        /* Only applied if bottom-left */
        right: "0px" /* Only applied if bottom-right */
      },
      prenotify: true,
      /* Show an icon with 1 unread message for first-time site visitors */
      showCredit: false,
      /* Hide the OneSignal logo */
      text: {
        "tip.state.unsubscribed": "Subscribe to notifications 🍓️",
        "tip.state.subscribed": "You're subscribed to notifications 🎉",
        "tip.state.blocked": "You've blocked notifications 😢️",
        "message.prenotify": "Click to subscribe to notifications 🍓️",
        "message.action.subscribed": "Thanks for subscribing! 😊",
        "message.action.resubscribed": "You're subscribed to notifications 🎉",
        "message.action.unsubscribed":
          "You won't receive notifications again 😳",
        "dialog.main.title": "Manage Site Notifications ⚙️",
        "dialog.main.button.subscribe": "SUBSCRIBE",
        "dialog.main.button.unsubscribe": "UNSUBSCRIBE",
        "dialog.blocked.title": "Unblock Notifications",
        "dialog.blocked.message":
          "Follow these instructions to allow notifications:"
      }
    }
  }
]);

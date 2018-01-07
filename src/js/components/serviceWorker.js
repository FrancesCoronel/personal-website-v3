if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/OneSignalSDKWorker.js", {
      scope: "/"
    })
    .then(function(registration) {
      console.log("Service Worker Registered");
    });
  navigator.serviceWorker.ready.then(function(registration) {
    console.log("Service Worker Ready");
  });
}

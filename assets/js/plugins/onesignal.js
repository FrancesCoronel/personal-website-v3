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
      'circle.background': 'rgb(37, 49, 55)',
      'circle.foreground': 'white',
      'badge.background': 'rgb(37, 49, 55)',
      'badge.foreground': 'white',
      'badge.bordercolor': 'white',
      'pulse.color': 'white',
      'dialog.button.background.hovering': 'rgb(77, 101, 113)',
      'dialog.button.background.active': 'rgb(70, 92, 103)',
      'dialog.button.background': 'rgb(37, 49, 55)',
      'dialog.button.foreground': 'white'
    },
    position: 'bottom-left', // Either 'bottom-left' or 'bottom-right'
    offset: {
      bottom: '0px',
      left: '0px',
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
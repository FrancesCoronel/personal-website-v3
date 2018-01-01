// Changing title of tab

var title = document.title;

var altTitles = [
  "Whatcha up to? 👀",
  "'Ello Gov'nor! 🎩",
  "Top o' the mornin' to ya! ☘",
  "Wubba, lubba dub-dub! 🔫",
  "E.T. phone home. 👽",
  "There's no place like home. 🏠",
  "Live long and prosper. 🖖",
  "Here's Johnny! 🔪",
  "My precious. 💍",
  "Do you read me, HAL? 🔴",
  "Expecto patronum! ⚡",
  "You've been such a peach! 🍑"
];

var altTitle = altTitles[Math.floor(Math.random() * altTitles.length)];

$(window).blur(() => {
  document.title = altTitle;
});

$(window).focus(() => {
  document.title = title;
});

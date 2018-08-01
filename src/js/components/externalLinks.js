const anchors = document.querySelectorAll(".content-body a[href^='https://']");

for (var i = 0; i < anchors.length; i++) {
  anchors[i].target = "_blank";
  anchors[i].rel = "noopener";
}

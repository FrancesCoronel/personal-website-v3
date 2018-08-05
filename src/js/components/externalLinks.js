const anchors = document.querySelectorAll(".content a[href^='https://']");

for (let i = 0; i < anchors.length; i++) {
  anchors[i].target = "_blank";
  anchors[i].rel = "noopener";
}

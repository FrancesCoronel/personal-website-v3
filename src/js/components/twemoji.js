import twemoji from "twemoji";

twemoji.parse(document.body, {
  base: "https://twitter.github.io/twemoji/2/",
  folder: "svg",
  ext: ".svg"
});

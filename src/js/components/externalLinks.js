const newPageAttributes = {
  target: "_blank",
  rel: "nofollow"
};

$("a[href^='//']").attr(newPageAttributes);
$("a[href^='http://']").attr(newPageAttributes);
$("a[href^='https://']").attr(newPageAttributes);

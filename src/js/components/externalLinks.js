const newPageAttributes = {
  target: "_blank",
  rel: "noopener"
};

$("a[href^='//']").attr(newPageAttributes);
$("a[href^='http://']").attr(newPageAttributes);
$("a[href^='https://']").attr(newPageAttributes);

var imagesLoaded = require("imagesloaded");
var Isotope = require("isotope-layout");
var jQueryBridget = require("jquery-bridget");

imagesLoaded.makeJQueryPlugin($);
jQueryBridget("isotope", Isotope, $);

function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match(/filter=([^&]+)/i);
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent(hashFilter);
}

// init Isotope
var $grid = $(".isotope-grid");
var $loadingMessage = $("#loading");
var $results = $(".isotope-results");

// bind filter button click
var $filterButtonGroup = $(".filter-button-group");
$filterButtonGroup.on("click", "button", function() {
  var filterAttr = $(this).attr("data-filter");
  // set filter in hash
  location.hash = "filter=" + encodeURIComponent(filterAttr);
});

var isIsotopeInit = false;

function onHashchange() {
  var hashFilter = getHashFilter();
  if (!hashFilter && isIsotopeInit) {
    return;
  }
  isIsotopeInit = true;
  $loadingMessage.show();
  $results.hide();
  // filter isotope
  $grid.imagesLoaded(() => {
    $results.show();
    $loadingMessage.hide();
    $grid.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
      // use filterFns
      filter: hashFilter
    });
  });
  // set selected class on button
  if (hashFilter) {
    $filterButtonGroup.find(".is-checked").removeClass("is-checked");
    $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass("is-checked");
  }
}

$(window).on("hashchange", onHashchange);

// trigger event handler to init Isotope
onHashchange();

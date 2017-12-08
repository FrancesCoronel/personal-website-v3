// Isotope

function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match(/filter=([^&]+)/i);
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent(hashFilter);
}

// bind filter button click
var $filterButtonGroup = $(".button-group");
$filterButtonGroup.on("click", "button", function() {
  var filterAttr = $(this).attr("data-filter");
  // set filter in hash
  location.hash = "filter=" + encodeURIComponent(filterAttr);
});

$("#loading").show();

var $grid = $(".isotope-grid").imagesLoaded(function() {
  $(".isotope-grid").show();
  $("#loading").hide();
  // init Isotope after all images have loaded
  $grid.isotope({
    itemSelector: ".isotope-item",
    layoutMode: "fitRows"
  });
});

var isIsotopeInit = false;

function onHashchange() {
  var hashFilter = getHashFilter();
  if (!hashFilter && isIsotopeInit) {
    return;
  }
  isIsotopeInit = true;
  // filter isotope
  var $grid = $(".isotope-grid").imagesLoaded(function() {
    $(".isotope-grid").show();
    $("#loading").hide();
    // init Isotope after all images have loaded
    $grid.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "fitRows",
      filter: hashFilter
    });
  });
  // set selected class on button
  if (hashFilter) {
    $filterButtonGroup.find(".is-checked").removeClass("is-checked");
    $filterButtonGroup
      .find("[data-filter='' + hashFilter + '']")
      .addClass("is-checked");
  }
}

$(window).on("hashchange", onHashchange);

// trigger event handler to init Isotope
onHashchange();

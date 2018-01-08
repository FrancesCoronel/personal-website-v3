/*jshint browser: true, strict: true, undef: true, unused: true */

(function(window, factory) {
  // universal module definition
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["get-size/get-size", "isotope/js/layout-mode"], factory);
  } else if (typeof module == "object" && module.exports) {
    // CommonJS
    module.exports = factory(require("get-size"), require("isotope-layout/js/layout-mode"));
  } else {
    // browser global
    factory(window.getSize, window.Isotope.LayoutMode);
  }
})(window, function factory(getSize, LayoutMode) {
  // -------------------------- definition -------------------------- //

  // create an Outlayer layout class
  var FitRowsCentered = LayoutMode.create("fitRowsCentered");
  var proto = FitRowsCentered.prototype;

  proto._resetLayout = function() {
    // pre-calculate offsets for centering each row
    this.x = 0;
    this.y = 0;
    this.maxY = 0;
    this._getMeasurement("gutter", "outerWidth");
    this.centerX = [];
    this.currentRow = 0;
    this.initializing = true;

    for (var i = 0, len = this.isotope.filteredItems.length; i < len; i++) {
      var item = this.isotope.filteredItems[i];
      this._getItemLayoutPosition(item);
    }

    this.centerX[this.currentRow].offset = (this.isotope.size.innerWidth + this.gutter - this.x) / 2;

    this.initializing = false;
    this.currentRow = 0;

    // centered offsets were calculated, reset layout
    this.x = 0;
    this.y = 0;
    this.maxY = 0;

    this._getMeasurement("gutter", "outerWidth");
  };

  proto._getItemLayoutPosition = function(item) {
    item.getSize();
    var itemWidth = item.size.outerWidth + this.gutter;
    // if this element cannot fit in the current row
    var containerWidth = this.isotope.size.innerWidth + this.gutter;
    if (this.x !== 0 && itemWidth + this.x > containerWidth) {
      if (this.initializing) this.centerX[this.currentRow].offset = (containerWidth - this.x) / 2;
      this.currentRow++;

      this.x = 0;
      this.y = this.maxY;
    }

    if (this.initializing && this.x == 0) {
      this.centerX.push({offset: 0});
    }

    var position = {
      x: this.x + (this.initializing ? 0 : this.centerX[this.currentRow].offset),
      y: this.y
    };

    this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
    this.x += itemWidth;

    return position;
  };

  proto._getContainerSize = function() {
    return {height: this.maxY};
  };

  return FitRowsCentered;
});

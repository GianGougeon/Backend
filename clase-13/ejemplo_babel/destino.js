"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// const lista = [2, 3, 4, 5];
// lista.map((x) => x * x).forEach((x) => console.log(x));
var RandomRGB = /*#__PURE__*/function () {
  function RandomRGB() {
    _classCallCheck(this, RandomRGB);

    this.r = Math.floor(Math.random() * 256);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 256);
  }

  _createClass(RandomRGB, [{
    key: "getColor",
    value: function getColor() {
      return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
    }
  }]);

  return RandomRGB;
}();

console.log(new RandomRGB().getColor());

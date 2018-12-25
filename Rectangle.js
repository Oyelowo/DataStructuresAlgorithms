"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(_length, width) {
        this._length = _length;
        this._length = _length;
        this._width = width;
    }
    Rectangle.perimeterDiff = function (rec1, rec2) {
        return rec1.perimeter - rec2.perimeter;
    };
    /**
     * isDouble
      */
    Rectangle.prototype.areaIsDouble = function (rectangle) {
        return this.area === 2 * rectangle.area;
    };
    Object.defineProperty(Rectangle.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (length) {
            this._length = length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (width) {
            this._width = width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "area", {
        get: function () {
            return this._length * this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "perimeter", {
        get: function () {
            return 2 * (this._length + this._width);
        },
        enumerable: true,
        configurable: true
    });
    return Rectangle;
}());
exports.Rectangle = Rectangle;
var r1 = new Rectangle(12, 7);
var r2 = new Rectangle(42, 4);
var r3 = new Rectangle(42, 4);
console.log(r2.perimeter === r3.perimeter);
console.log(r2.area);
console.log(r2.areaIsDouble(r1));
var kk = Rectangle.perimeterDiff(r2, r1);
//console.log(kk);
//console.log(r1.area);
//console.log(r2.area);
//console.log(r1.perimeter)
//console.log(r2.perimeter)
//console.log(r2.width);
r2.width = 33;

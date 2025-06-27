var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    Object.defineProperty(Melon.prototype, "elementIndex", {
        get: function () {
            return this.weight * this.melonSort.length;
        },
        enumerable: false,
        configurable: true
    });
    Melon.prototype.toString = function () {
        return "Element: ".concat(this.element, "\nSort: ").concat(this.melonSort, "\nElement Index: ").concat(this.elementIndex).trim();
    };
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Watermelon.prototype, "element", {
        get: function () {
            return 'Water';
        },
        enumerable: false,
        configurable: true
    });
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Firemelon.prototype, "element", {
        get: function () {
            return 'Fire';
        },
        enumerable: false,
        configurable: true
    });
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Earthmelon.prototype, "element", {
        get: function () {
            return 'Earth';
        },
        enumerable: false,
        configurable: true
    });
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        return _super.call(this, weight, melonSort) || this;
    }
    Object.defineProperty(Airmelon.prototype, "element", {
        get: function () {
            return 'Air';
        },
        enumerable: false,
        configurable: true
    });
    return Airmelon;
}(Melon));
var Melolemonmelon = /** @class */ (function (_super) {
    __extends(Melolemonmelon, _super);
    function Melolemonmelon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        _this.index = 0;
        return _this;
    }
    Melolemonmelon.prototype.morph = function () {
        this.index < 3 ? ++this.index : this.index = 0;
    };
    Object.defineProperty(Melolemonmelon.prototype, "element", {
        get: function () {
            return this.elements[this.index];
        },
        enumerable: false,
        configurable: true
    });
    return Melolemonmelon;
}(Watermelon));
// let test : Melon = new Melon(100, "Test");
// Throws error
// let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
var melo = new Melolemonmelon(12.5, 'Kingsize');
// Element: ${element}
// Sort: Kingsize
// Element Index: 100
console.log(melo.toString()); // Water
console.log('----------');
melo.morph();
console.log(melo.toString()); // Fire
console.log('----------');
melo.morph();
console.log(melo.toString()); // Earth
console.log('----------');
melo.morph();
console.log(melo.toString()); // Air
console.log('----------');
melo.morph();
console.log(melo.toString()); // Water
console.log('----------');
melo.morph();

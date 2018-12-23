"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        /**
         * pop
         */
        this.pop = function () {
            if (_this._count === 0) {
                return undefined;
            }
            _this._count--;
            var result = _this._storage[_this._count];
            delete _this._storage[_this._count];
            return result;
        };
        this._count = 0;
        this._storage = {};
    }
    Object.defineProperty(Stack.prototype, "size", {
        get: function () {
            return this._count;
        },
        set: function (val) {
            this._count = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * name
     */
    Stack.prototype.push = function (value) {
        this._storage[this._count] = value;
        this._count++;
    };
    /**
     * peek
     */
    Stack.prototype.peek = function () {
        return this._storage[this._count - 1];
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(4);
console.log(myStack.size);
myStack.push("Oyelowo");
myStack.push("Oyelowo");
myStack.push("Oyelowo");
myStack.pop();
myStack.size = 3000;
myStack.push("Oyedayo");
console.log("######", myStack.peek());
console.log(myStack.size);
console.log(myStack);
var myList = [3, 5, 6, 8, 2, 56, 7, 8];
var sum = function (arr) {
    return arr.reduce(function (a, b) { return a + b; }, 0);
};
console.log(sum(myList));

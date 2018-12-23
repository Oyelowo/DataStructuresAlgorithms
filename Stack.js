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
var ourStack = new Stack();
var secondStack = new Stack();
console.log(ourStack === secondStack);
ourStack.push(5);
console.log(ourStack);
ourStack.push('lowo');
ourStack.pop();
console.log(ourStack);
ourStack.size = 3000;
console.log(ourStack.size);
console.log("#######", ourStack.peek());

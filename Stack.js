"use strict";
var Stack = /** @class */ (function () {
    function Stack() {
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
     * pop
     */
    Stack.prototype.pop = function () {
        if (this._count === 0) {
            return undefined;
        }
        this._count--;
        var result = this._storage[this._count];
        delete this._storage[this._count];
        return result;
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

class Stack {
    private _count: number;
    private _storage: any;

    constructor(){
        this._count=0;
        this._storage = {};
    }

    public get size() : number {
        return this._count;
    }

    public set size(val: number) {
        this._count = val;
    }

    
    /**
     * name
     */
    public push(value: any) :void{
        this._storage[this._count] = value;
        this._count++;
    }

    /**
     * pop
     */
    public pop=()=> {
        if (this._count === 0) {
            return undefined;
        }

        this._count--;
        let result = this._storage[this._count];
        delete this._storage[this._count];
        return result;
    }

    /**
     * peek
     */
    public peek() {
        return this._storage[this._count - 1];
    }
}



let ourStack = new Stack();
let secondStack = new Stack();





console.log(ourStack === secondStack)



ourStack.push(5);
console.log(ourStack);

ourStack.push('lowo');

ourStack.pop()
console.log(ourStack);

ourStack.size = 3000;
console.log(ourStack.size)
console.log("#######",ourStack.peek());

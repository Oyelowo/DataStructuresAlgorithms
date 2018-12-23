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


let myStack = new Stack();
myStack.push(4)
console.log(myStack.size)
myStack.push("Oyelowo")
myStack.push("Oyelowo")
myStack.push("Oyelowo")
myStack.pop()
myStack.size = 3000;

myStack.push("Oyedayo")
console.log("######", myStack.peek())
console.log(myStack.size)
console.log(myStack)

let myList : number[] = [3,5,6,8,2,56,7,8];

let sum = (arr: number[]) =>{
  return arr.reduce((a,b)=> a + b, 0)
}

console.log(sum(myList));



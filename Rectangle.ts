class Rectangle {
    private _length: number;
    private _width : number;

    constructor(length: number,  width: number){
        this._length = length;
        this._width = width;
    }

    public static perimeterDiff (rec1 : Rectangle, rec2: Rectangle): number{
        return rec1.perimeter - rec2.perimeter;
    }

    /**
     * isDouble
      */
    public areaIsDouble(rectangle: Rectangle ) : boolean{
        return this.area === 2 * rectangle.area;
    }
    
    public get length() : number {
        return this._length;
    }

    public get width() : number {
        return this._width;
    }
    
    public get area() : number {
        return this._length * this._width;
    }
    
    public get perimeter() : number {
        return 2 * (this._length + this._width);
    }
    
    public set length(length : number ) {
        this._length = length;
    }

    public set width(width : number ) {
        this._width = width;
    }
    
}

let r1 = new Rectangle(12, 7);
let r2 = new Rectangle(42, 4);

console.log(r2.area)
console.log(r2.areaIsDouble(r1));

let kk = Rectangle.perimeterDiff(r2, r1);

//console.log(kk);

//console.log(r1.area);
//console.log(r2.area);

//console.log(r1.perimeter)
//console.log(r2.perimeter)
//console.log(r2.width);


r2.width = 33;

//console.log(r2.width);
//console.log(r1 === r2);

export {Rectangle}; 
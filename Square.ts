
import { Rectangle } from "./Rectangle";

class Square extends Rectangle{
    constructor(_length: number, _width: number){
        super(_length, _width);
    }
}


let hr = new Square(2, 8);

console.log(hr)


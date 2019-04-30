//import { log } from "util";
//import { log } from "util";
var n1;
var n2;
n1 = 29;
n2 = 56;
var sum = n1 + n2;
console.log(sum);
var cadet = /** @class */ (function () {
    //id:number;
    //name:string;
    function cadet(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
    cadet.prototype.greeting = function () {
        console.log(this.id);
    };
    return cadet;
}());
var c1 = new cadet();
c1.id = 10;
c1.name = "ank";
c1.greeting();

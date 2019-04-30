let n1 : number;
let n2 : number;

n1 = 29;
n2 = 56;

let sum :  number = n1 + n2;
console.log(`Sum of ${n1} and ${n2} is ${sum}`);

class cadet{
    id:number;
    name:string;
 constructor(private id:number , private name: string){
 this.id=id;
 this.name=name;
 }

greeting(){
    console.log(this.id+"   "+this.name);    
}
}

let c1 : cadet =new cadet();
c1.id =10;
c1.name ="ankita";

c1.greeting();




class cadetnew{
 constructor(private id:number , private name: string){
 this.id=id;
 this.name=name;
 }

greetings(){
    console.log("In constructor "+this.id+"   "+this.name);    
}
}

let c11 : cadetnew =new cadetnew(1,"ankiiii");

c11.greetings();
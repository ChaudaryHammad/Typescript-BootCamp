const a = 34;
let surname:string|number; ///union type
surname=2123;
let nambo=<string>"Hamad"; //type assertion
let tambo:string = "HamMad";//type annotation
let b = <number>20 //type assertion
console.log(nambo,surname);
console.log(tambo,b);


const  myName=(n:number,r:number)=>{
console.log("Function is called",n,r);

}


myName(77,90);


type variabe= (t:number,s:number)=>number

let newFunc:variabe=(t,s)=>{
console.log(t,s);
return t+s;
}


newFunc(23,45);


type notFun={
    x:string,
    y:number | any,
}


let object1:notFun={
    x:"Hamad",
    y:"23",
}


console.log(object1.x);
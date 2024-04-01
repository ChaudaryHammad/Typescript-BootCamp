// const a = 34;
// let surname:string|number; ///union type
// surname=2123;
// let nambo=<string>"Hamad"; //type assertion
// let tambo:string = "HamMad";//type annotation
// let b = <number>20 //type assertion
// console.log(nambo,surname);
// console.log(tambo,b);
// const  myName=(n:number,r:number)=>{
// console.log("Function is called",n,r);
// console.log("Function is called",n,r);
// }
// myName(75,90);
// type variabe= (t:number,s:number)=>number
// let newFunc:variabe=(t,s)=>{
// console.log(t,s);
// return t+s;
// }
// newFunc(23,45);
// type notFun={
//     x:string,
//     y:number | any,
// }
// let object1:notFun={
//     x:"Hamad",
//     y:"23",
// }
// console.log(object1.x);
// //arrays 2 methods
// let num:number[]=[1,2,3,4,5,6,7,8,9,10];
// let fruits:Array<string>=["apple","banana","mango","orange"];
// let fruitsNames:Array<string | number>=["apple","banana","mango","orange",10,11,12];
// console.log(fruits[1]);
// console.log(fruitsNames[5]);
// let arr:[number,number,string]=[1,2,'Tuple']
// console.log(arr[2]);
// // objects
// // 1st method
// let obj:{
//     height:number,
//     width:number,
//     gender:boolean
// }={
//     height:300,
//     width:200,
//     gender:true
// }
// console.log(obj.gender);
// // boject by type alias
// type area={
//     height:number,
//     width:number,
//     gender?:boolean  // we made this property as optional
// }
// let obj1:area={
//     height:800,
//     width:900,
//     gender:false
// }
// let obj2:area={
//     height:800,
//     width:900,
// }
// console.log(obj1.gender);
// console.log(obj2.height ,"<-w h->", obj2.width);
// // Objects with interface
// interface area1{
//     height?:number,
//     width?:number
// }
// interface area2 extends area1{
//     gender:boolean,
//     nam:string,
//     funv:(aa:number,ba:number)=>void;
// }
// let obj3:area2={
//     gender:true,
//     nam:"Naeem",
//     funv:(aa,ba)=>{
//         console.log(aa+ba)
//     }
// }
// console.log(obj3.gender,obj3.nam);
// obj3.funv(22,2)
// //rest operator
// type FuncType=(n:number,m:number,l?:number)=>number;
// let funct:FuncType=(n,m,l=20)=>{
//     return n+m+l;
// }
// console.log(funct(2,3));
// type asertion
// const btn = document.getElementById('btn') !;
// const btn2 = document.getElementById('btn') as HTMLButtonElement;
// const btn3 = <HTMLButtonElement>document.getElementById('btn');
var form = document.getElementById('form');
var input = document.getElementById('input');
var result = document.getElementById('result');
form.onsubmit = function (e) {
    e.preventDefault();
    var value = Number(input.value);
    console.log(typeof value);
    result.textContent = String(value + 20);
    document.body.appendChild(result);
};

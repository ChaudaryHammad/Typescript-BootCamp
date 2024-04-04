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




// const form = document.getElementById('form') as HTMLFormElement;
// const input = document.getElementById('input') as HTMLInputElement;
// const result = document.getElementById('result') as HTMLDivElement;

// form.onsubmit=(e:SubmitEvent)=>{
//     e.preventDefault();
//     const value = Number(input.value);
//     console.log(typeof value);
//     result.textContent =String(value + 20)
//     document.body.appendChild(result);
// }


// interface Person{
//  [key:string]:string
// }


// const person:Person={
//     name:"Hamad",
 
// }

// const getData=(key:string):string=>{
//     return person[key] 
// }

// console.log(getData("name"));

// utlity types

// 1. Partial<Type>
// It makes properties optional like we did using ? in interface

// type user = {
//     name:string,
//     email?:string,
// }


// type user1 = Partial<user>

// const user1={
//     name:"Hamad"
//     }

// console.log(user1.name);

// 2. Required<Type>
// it is opposite of Partial<Type> it makes all properties required

// type user={
//     name?:string,
//     age:number
// }


// type user1 = Required<user>

// now the user1 has all required properties


// 3. readonly<Type>
//  it makes all properties readonly and restricts to change the value of properties

// type user={
//     name?:string,
//     age:number
// }

// const user1: Readonly<user> = {
//     name:"Hamad",
//     age:23
// }

// user1.name = "Naeem"; // it will give error because we made name property readonly


// 4. Record<Keys,Type>
// it creates an object type whose property keys are Keys and values are Type

type User={
    name:string,
    email:string
}

// type User1 = Record<"name"|"email",string>


// Pick and omit utility types
// Pick<Type,Keys>
// it creates a type by picking some properties from another type


interface OrderInfo {
readonly id:string,
user:string,
city:string,
state:String

}

type ShippingInfo =  Pick<OrderInfo,"city" |"state" | "user">

const ShippingInfo2:ShippingInfo = {
    city:"Karachi",
    state:"Sindh",
    user:"Hamad"
}

console.log(ShippingInfo2.city);

type Random = Omit<ShippingInfo,"user">

const Address:Random = {
    city:"Karachi",
    state:"Sindh"

}

console.log(Address.state);


// 5. Exclude<Type,ExcludeUnion>
// it creates a type by excluding some types from another type
// Extract<Type,Union>
// it creates a type by extracting some typesfrom another type
// NonNullable<Type>
// it creates a type by excluding null and undefined from another type


// 5. Exclude<Type,ExcludeUnion>

type myType = string | number | boolean | undefined | null;

type ExcludeType = Exclude<myType,string>;  
// it will exclude string from myType

// Extract<Type>

type ExtractType = Extract<myType,string>;  


type nonNull = NonNullable<myType>;


// Parameters<Type>
// it extracts the parameters of a function type in a tuple
// ConstructorParameters<Type>
// it extracts the parameters of a constructor function in a tuple
// ReturnType<Type>
// it extracts the return type of a function type
// InstanceType<Type>
// it extracts the instance type of a constructor function type

const myFunc = (a:number , b:number):number=>{
    return a*b;
}

console.log(myFunc(2,3));

type Params = Parameters<typeof myFunc>

const anotherFunction = (a:Params[0],b:Params[1])=>{
    console.log(a *b);
}

anotherFunction(2,3);


type returnTy = ReturnType<typeof myFunc>

type num = {
    age:returnTy
}

const obj:num={
    age:63
}   

console.log(obj.age);


function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
  }
  console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

  class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10
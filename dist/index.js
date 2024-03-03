"use strict";
const a = 34;
let surname; ///union type
surname = 2123;
let nambo = "Hamad"; //type assertion
let tambo = "HamMad"; //type annotation
let b = 20; //type assertion
console.log(nambo, surname);
console.log(tambo, b);
const myName = (n, r) => {
    console.log("Function is called", n, r);
};
myName(75, 90);
let newFunc = (t, s) => {
    console.log(t, s);
    return t + s;
};
newFunc(23, 45);
let object1 = {
    x: "Hamad",
    y: "23",
};
console.log(object1.x);
//arrays 2 methods
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits = ["apple", "banana", "mango", "orange"];
let fruitsNames = ["apple", "banana", "mango", "orange", 10, 11, 12];
console.log(fruits[1]);
console.log(fruitsNames[5]);
let arr = [1, 2, 'Tuple'];
console.log(arr[2]);
// objects
// 1st method
let obj = {
    height: 300,
    width: 200,
    gender: true
};
console.log(obj.gender);
let obj1 = {
    height: 800,
    width: 900,
    gender: false
};
let obj2 = {
    height: 800,
    width: 900,
};
console.log(obj1.gender);
console.log(obj2.height, "<-w h->", obj2.width);
let obj3 = {
    gender: true,
    nam: "Naeem",
    funv: (aa, ba) => {
        console.log(aa + ba);
    }
};
console.log(obj3.gender, obj3.nam);
obj3.funv(22, 2);

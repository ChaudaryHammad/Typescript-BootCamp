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
myName(77, 90);
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

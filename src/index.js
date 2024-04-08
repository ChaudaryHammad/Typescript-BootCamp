// const a = 34;
// let surname:string|number; ///union type
// surname=2123;
// let nambo=<string>"Hamad"; //type assertion
// let tambo:string = "HamMad";//type annotation
// let b = <number>20 //type assertion
// console.log(nambo,surname);
// console.log(tambo,b);
var ShippingInfo2 = {
    city: "Karachi",
    state: "Sindh",
    user: "Hamad"
};
console.log(ShippingInfo2.city);
var Address = {
    city: "Karachi",
    state: "Sindh"
};
console.log(Address.state);
// Parameters<Type>
// it extracts the parameters of a function type in a tuple
// ConstructorParameters<Type>
// it extracts the parameters of a constructor function in a tuple
// ReturnType<Type>
// it extracts the return type of a function type
// InstanceType<Type>
// it extracts the instance type of a constructor function type
var myFunc = function (a, b) {
    return a * b;
};
console.log(myFunc(2, 3));
var anotherFunction = function (a, b) {
    console.log(a * b);
};
anotherFunction(2, 3);
var obj = {
    age: 63
};
console.log(obj.age);
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
var NamedValue = /** @class */ (function () {
    function NamedValue(name) {
        this.name = name;
    }
    NamedValue.prototype.setValue = function (value) {
        this._value = value;
    };
    NamedValue.prototype.getValue = function () {
        return this._value;
    };
    NamedValue.prototype.toString = function () {
        return "".concat(this.name, ": ").concat(this._value);
    };
    return NamedValue;
}());
var value = new NamedValue('myNumber');
value.setValue(10);
console.log(value.toString()); // myNumber: 10
// generics
var Convert = function (input) {
    var x = [input];
    return x;
};
console.log(Convert("123" + "324"));
function TwoArrays(input1, input2) {
    return [input1, input2];
}
console.log(TwoArrays(2, "Hamad"));

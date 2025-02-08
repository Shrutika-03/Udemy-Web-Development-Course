//Number
let num1 = 120;

let num2 = new Number(122);

// console.log(num1);
// console.log(num2.valueOf());

// console.log(typeof num1); //number
// can also be convert the primitive data type into non-primitive data types
// console.log(typeof num2); //object

// that's why everyone say that in Javacript everything is an object

// Boolean
let isActive = true;

let isStillActive = new Boolean(true); //not recommended

// console.log(typeof isActive);
// console.log(typeof isStillActive);

// Null and Undefined

// let firstname;
// console.log(firstname); //undefined

// console.log(lastname); //it is not defined

// let middlename = null;
// console.log(middlename);

// let username = undefined;
// console.log(undefined);

// String
let myString = "hello";
let myStringOne = "hola";
let username = "shruti";

// let oldGreet = myString + " shruti";
// let oldGreet = myString + " " + "shruti";
// console.log(oldGreet);

// let greetMsg = `hello ${username} !`;
// console.log(greetMsg);

// let getValue = `Value is ${2 * 2}`;

// console.log(getValue);

// Symbol

// let sm1 = Symbol();
// let sm2 = Symbol();
// console.log(sm1 == sm2); //false
// console.log(sm1 === sm2); //false

let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");

// console.log(sm1 == sm2); //false

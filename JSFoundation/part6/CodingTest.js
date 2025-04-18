// **********************Playing with Types

/* Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number". */

function stringToNumber(str) {
  let num = Number(str);
  return isNaN(num) ? "Not a number" : num;
}

// console.log(stringToNumber("123"));
// console.log(stringToNumber("JAVA"));

/* Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc. */

function flippBoolean(input) {
  return !Boolean(input);
}
// console.log(flippBoolean("123"));
// console.log(flippBoolean(0));

/* Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!" */

function whatAmI(input) {
  if (!isNaN(Number(input))) {
    return "I'm a number!";
  } else if (typeof input === "string") {
    return "I'm a string!";
  } else {
    return "I'm something else";
  }
}

// console.log(whatAmI("Shruti"));
// console.log(whatAmI("0304"));
// console.log(whatAmI(["dewfc"]));

/* Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey. */

function isItTruthy(input) {
  return input ? "It's truthy" : "It's falsey";
}

// console.log(isItTruthy(""));
// console.log(isItTruthy("jdsb"));

/* Perform the following mathematical operations
on the provided variables a and b */

// *********Playing with Variables********

const a = 18;
const b = 24;

// Addition of two values
function add() {
  const result = a + b;
  return result;
}

// Subtract small value from larger one
function subtract() {
  const result = b - a;
  return result;
}

function multiply() {
  const result = a * b;
  return result;
}

// Divide larger value by small
function divide() {
  const result = b / a;
  return result;
}

// Increase value of a by 1
function increment() {
  let result = a;
  result += 1;
  return result;
}

// Decrease value of b by 1
function decrement() {
  let result = b;
  result -= 1;
  return result;
}

// Divide larger value by small to find the reminder
function reminder() {
  const result = b % a;
  return result;
}

// *************Arrays and Methods

/* Write a function filterNumbers(arr) that returns only numbers from a mixed array */

function filterNumbers(arr) {
  return arr.filter((item) => typeof item === "number");
}

// let newArray = ["a", 1, 3, "e", 4, "i"];
// console.log(filterNumbers(newArray));

/* Write a function reverseArray(arr) that reverses the array */

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let newValue = [8, 7, 6, 5, 4];
// console.log(reverseArray(newValue));

// function reverseString(str) {
//     return str.split("").reverse().join("");
//   let word = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     word += str[i];
//   }
//   return word;
// }

// let newWord = "occo";

// console.log(reverseString(newWord));

/* Write a function findMax(arr) that returns the largest number in the array */

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let newArra = [3, 5, 66, 1, 22, 90, 23, 123];
// console.log(findMax(newArra));

/* Write a function removeDuplicates(arr) that returns a new array with all duplicates removed */

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let theArr = [2, 45, 6, 7, 2, 56, 9, 7, 4];
// console.log(removeDuplicates(theArr));

/* Write a function flattenArray(arr) that takes a nested array and returns a single flattened array */

function flattenArray(arr) {
  return arr.flat(Infinity);
}

let data = [1, 3, 56, [2, 54, 88, [7, 8, 9, [45, 65]]]];
// console.log(flattenArray(data));

// *********************** LOOPS

/* Write a function sumOfN(n) that returns the sum of the first n natural numbers */

function sumOfN(n) {
  return (n * (n + 1)) / 2;
}

// console.log(sumOfN(7));

/* Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4 */

function printMultiplicationTable(n) {
  let table = [];
  for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
  }
  return table;
}

// console.log(printMultiplicationTable(12));

/* Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str. */

function countVowels(str) {
  return str.split("").filter((char) => "aeiouAEIOU".includes(char)).length;
}

// console.log(countVowels("phylanthopist"));

// **************************** Higher-Order Functions and Arrow Functions

/* Write a function squareNumbers(arr) using map() and arrow functions */

function squareNumbers(arr) {
  return arr.map((num) => num * num);
}

// console.log(squareNumbers([2, 3, 4, 5]));

/* Create a function filterEvenNumbers(arr) using filter() and arrow functions */

const filterEvenNumbers = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

// console.log(filterEvenNumbers([2, 3, 5, 6, 7, 8]));

/* Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions */

const sumPositiveNumbers = (arr) => {
  return arr.filter((item) => item > 0).reduce((num, sum) => sum + num, 0);
};

// console.log(sumPositiveNumbers([2, 3, 8, 5, 4, -3, -1]));

/* Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions */

const getNames = (arr) => arr.map((person) => person.name);

// const getNames = (arr) => arr.map((item) => item.name);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

// console.log(getNames(people));

/* Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function */

const findLongestWord = (arr) =>
  arr.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );

const words = ["apple", "banana", "strawberry", "blueberry", "kiwi"];
// console.log(findLongestWord(words));

// *************Nested Functions and Context

/* Create an object person with a method introduce() that uses this
additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce() */

const obj = {
  name: "Shruti",
  age: 28,
  introduce() {
    return `My name is ${this.name} and my age is ${this.age}`;
  },
};

// console.log(obj.introduce());

/* Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer() */

function outer() {
  function inner() {
    return "Inner function called";
  }
  return inner();
}

// console.log(outer());

/* Array Constructor  */

// Array constructor creates Array object
// const newEmptyArray = new Array(2);
// const newEmptyArray = new Array("john", "johnny");
// console.log(newEmptyArray);
// console.log(typeof newEmptyArray);

/* Array.from  */

// console.log(Array.from("foo"));

/* Array length method */
/* const arr = ["apple", 34, { name: "John" }, ["hello"]];

console.log(arr);
console.log(arr.length); */

/* How to get particular value from given array */

/* const arr = ["Banana", 15, { cityName: "Nagpur" }];

console.log(arr[1]); */

/* Find Last index value from given array
using .at() method
*/

// const arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr.at(-1));
// console.log(arr.at(1));
// console.log(arr.at(10));

/* add value in given array using push() method */

// const arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.push(7));
// console.log(arr.push(7, "Grapes"));
// console.log(arr);

/* let updatedDataLength = arr.push(7, "Grapes", 8, 9);
console.log(updatedDataLength); */

/* remove last value from an given array */

/* const data = ["a", "b", "c", "d", "e"];
data.pop();
data.pop();
console.log(data);

let popVal = data.pop();
console.log(popVal); */ //get those value return which is remove from array
// console.log(data);

/* Remove first element from the given array */
/* let data = [1, 2, 3, 4, 5];
data.shift();
console.log(data); */

/* Add values in zero index of the array */
/* let data = [3, 4, 5, 6];
// data.unshift(1, 2);
let undhisftedData = data.unshift(1, 2);
console.log(undhisftedData); */

/* Array.indexOf method */
// const animals = ["dog", "cat", "lion", "pig"];

// console.log(animals.indexOf("pig"));

// const data = [1, 2, 3, 4, 2, 1, 3];
// console.log(data.indexOf(2, 3));
// console.log(data.indexOf(2, -1));

/* Array.lastIndexOf() method */

/* const data = ["dog", "cat", "lion", "pig", "cat"];

console.log(data.lastIndexOf("cat", -1)); */

/* Array.toString() method */
/* 
const data = ["dog", "cat", "lion", "pig", "cat"];
console.log(data.toString());
 */

/* Array.fill() method */

// const data = ["dog", "cat", "lion", "pig", "cat"];

// console.log(data.fill("ab"));
// console.log(data.fill("ab", 2));
// console.log(data.fill("ab", 2, 3));

/* Array.join() method */
/* const data = ["dog", "cat", "lion", "pig", "cat"];

const arrWithJoin = data.join("-");
console.log(arrWithJoin); */

/* Array.flat() method */

// const arr = [1, 2, 3, 4, [5, 6]];
// const arr = [1, 2, 3, 4, [5, 6, [7, 8, [9, 10, [11, 12]]]]];

// console.log(arr);
// const flatArr = arr.flat();
// const flatArr = arr.flat(2);
// const flatArr = arr.flat(3);
// const flatArr = arr.flat(Infinity);
// console.log("flatten array", flatArr);
// console.log("original array", arr);

/* Array.concat() method */

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const arrConcat = arr1.concat(arr2, arr3);
console.log(arrConcat); */

/* Array.reverse() method */

/* const arr = ["cat", "aaple", 1, "$"];

const arrReverse = arr.reverse();

console.log(arrReverse); */

/* Array.slice() method */

// const arr = ["apple", "cat", 1, "#", 8, "$"];

// const sliceTheArr = arr.slice(2, 5);
/* const sliceTheArr = arr.slice(-3, -1);

console.log(sliceTheArr); */

/* Array.splice() method */

const arr = ["@", "%", "&", "*", "#", "+"];

/* Remove element */
// const spliceTheArr = arr.splice(0, 2);
// const spliceTheArr = arr.splice(-4, 2);

/* Adding Element */
// const spliceTheArr = arr.splice(1, 0, "-");

// console.log(spliceTheArr); //tis is[] blank bcoz not remove the single element from given array
// console.log(arr); //changes made or adding element  in original array

/* Array.sort() method */

/* const aplha = ["z", "r", "a", "c", "k", "n"];

const aplhaSort = aplha.sort();
console.log(aplhaSort);

const num = [3, 5, 7, 1, 0, 5];

const numSort = num.sort();
console.log(numSort);
 */

/* Array.some() method */

/* const numbers = [1, 22, 39, 56, 0];

function findNumbers(num) {
  return num < 40;
}

console.log(numbers.some(findNumbers)); */

/* Array.every() method */

/* const numbers = [10, 15, 17, 6, 80, 45];

function findNumbers(num) {
  //   return num < 5;
  return num > 5;
}

console.log(numbers.every(findNumbers)); */

/* Array.forEach() method */

/* const arrVal = [1, 2, 3, 4, 5];

arrVal.forEach((ele, index) => {
  console.log(ele * 2, index);
}); */

/* Array.map() method */

const arrVal = [1, 2, 3, 4, 5];

const mappedrr = arrVal.map((item, index) => {
  return item * 2;
});

console.log(mappedrr);

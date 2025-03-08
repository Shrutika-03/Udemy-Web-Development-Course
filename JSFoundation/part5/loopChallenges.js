/* 1) Write a "While" loop that clculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum' */

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}

// console.log(sum);

/* 2) Write a "while" loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown */

let countdown = []; //for stores the numbers
let j = 5; // start loop from 5 upto 1

while (j > 0) {
  countdown.push(j);
  j--;
}

// console.log(countdown);

/* 3) Write  "do while" loop tt prompts a user to enter their favorite tea type until they enter "stop" store each tea type in an array named 'teaCollection' */

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`); // the prompt only work on BROWSER
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

/* 4) Write a 'do while' loop that adds number from 1 to 3 and stores the result in the variable named 'total'  */

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

// console.log(total);

/* 5) Write a 'for' loop that multiplies each element in the array [2,4,6] by 2 and stores the result in a new array named 'multipliedNumbers  */

let multipliedNumbers = [];
let arr = [2, 4, 6];
for (let i = 0; i < arr.length; i++) {
  let takeNumbers = arr[i] * 2;
  multipliedNumbers.push(takeNumbers);
  multipliedNumbers.push(arr[i] * 2);
}

// console.log(multipliedNumbers);

/* 6) Write a 'for' loop that lists all the cities in the array ['paris','Ney york','Tokyo','London'] and store te result each city in a new array named cityList*/

let cityList = [];

let arr1 = ["Paris", "Ney York", "Tokyo", "London"];

for (let i = 0; i < arr1.length; i++) {
  //   cityList.push(arr[i]);
  cityList.unshift(arr1[i]);
}

// console.log(cityList);

let originalString = "Shrutika";

let convert = [];

for (let i = 0; i < originalString.length; i++) {
  convert.push(originalString[i]);
}

// console.log(convert);

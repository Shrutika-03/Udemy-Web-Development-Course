/* 1) Write a function named 'makeTea' that takes one parameter 'typeOfTea' and returns a string like 'Making green tea' when called with 'green tea' store the result in a variable named 'teaOrder'  */

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("green tea");
// console.log(teaOrder);

/* 2) Create a function named orderTea that takes one parameter teaType. Inside this function create another function named 'confirmOrder' that returns a message like "Order confirm for chai" Call confirmOrder from within orderTea and return the result */

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirm for ${teaType}`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("Chai");
// console.log(orderConfirmation);

/* 3) Write an arrow function named 'calculateTotal' that takes two parameter 'price' and 'quantity'. The function should return the totalCost by multiplying 'price' and 'quantity. Store the result in a variable named 'totalCost' */
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499, 10);
// console.log(totalCost);

/* 4) Write a function named 'process' that takes another function 'makeTea' as a parameter and calls it with the argument 'earl grey' . Return a result of calling 'makeTea' */

let makingTea = (type) => {
  return `Making: ${type}`;
};

const process = (teaFn) => {
  return teaFn("lemon tea");
};

let order = process(makingTea);
// console.log(order);

/* 5) Write a function named 'creatTeaMaker' that return another function. The returned function should take an parameter 'teaType' & return message like "Making green tea". Store the returned function in a variable named 'teaMaker' & call it with "green tea" */

function creatTeaMaker(name) {
  return function (teas) {
    return `Hi ${name} we making ${teas}`;
  };
}

let teaMaker = creatTeaMaker("Shruti");
let result = teaMaker("green tea");
console.log(result);

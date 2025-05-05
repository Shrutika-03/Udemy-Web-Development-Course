function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let increment = outer();
console.log(increment());

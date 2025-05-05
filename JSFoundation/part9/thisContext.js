const person = {
  name: "Shruti",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};
// person.greet();

const greetFunction = person.greet;
// greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
// boundGreet();

//bind,call & apply
function greet() {
  console.log(`Hi, I'm ${this.name}`);
}

const user = { name: "Shrutika" };

// greet.call(user);
// greet.apply(user);
// const greetUser = greet.bind(user);
// greetUser();

let computer = { cpu: 12 };

let lenovo = { screen: "HD", __proto__: computer };

let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);

let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

Object.setPrototypeOf(tesla, genericCar);
// console.log(`tesla`, tesla);
// console.log(`tesla`, tesla.tyres);
// console.log(`tesla`, Object.getPrototypeOf(tesla));

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};

let person1 = new Person("Alice");
let person2 = new Person("Vamika");

person1.greet();
person2.greet();

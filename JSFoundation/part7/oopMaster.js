let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

// console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);

// console.log(john.name);

class Animal {
  constructor(type) {
    this.type = type;
  }
  speak() {
    return `${this.type} make it sound`;
  }
}

Array.prototype.shruti = function () {
  return `Custom method ${this}`;
};

const myArr = [1, 2, 3];
// console.log(myArr.shruti());

const myNewArr = [1, 2, 3, 4, 5, 6];
// console.log(myNewArr.shruti());

// -------------- Class -----------

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make} `;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make}: This is an Inheritance example`;
  }
}

let myCar = new Car("Tata", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Tata", "Corolla");
// console.log(vehOne.make);

// ---------------- Encapsulation-----------//

// class BankAccount {
//   #balance = 0; //this means that it is not visibale or usable for anyone
//   deposit(amount) {
//     this.#balance += amount;
//     return this.#balance;
//   }

//   getBalance() {
//     return `$ ${this.#balance}`;
//   }
// }

// let acc = new BankAccount();
// console.log(acc.balance);
// console.log(acc.getBalance());

// class BankAccount {
//   #balance;
//   constructor(initialBlance) {
//     this.#balance = initialBlance;
//   }

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//       // console.log(`Deposited: ${amount}`);
//     } else {
//       // console.log("Invalid deposit amount");
//     }
//   }

//   withdrawn(amount) {
//     if (amount > 0 && amount <= this.#balance) {
//       this.#balance -= amount;
//       // console.log(`Withdrwan: ${amount}`);
//     } else {
//       // console.log("Invalid and insufficient balance");
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const account = new BankAccount(5000);

// account.deposit(1000);
// account.withdrawn(2000);
// console.log(account.getBalance());

// -----------------Abstraction---------------------//

class coffeeMachine {
  start() {
    //call db
    //filter value
    return `Starting the machine...`;
  }

  brewCoffee() {
    //complex calculation behind the scene
    return `And Brewing the coffee..`;
  }

  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} , ${msgTwo}`;
  }
}

let myMachine = new coffeeMachine();

// console.log(myMachine.pressStartButton());

// -------------Polymorphism----------------//

class Bird {
  fly() {
    return `Flying...`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();

let pen = new Penguin();

// console.log(bird.fly());
// console.log(pen.fly());

// -----------Static Methods------------
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// Can't do like this with "Static" method
/* let miniCal = new Calculator();
console.log(miniCal.add(2, 3)); */

// console.log(Calculator.add(2, 3));

//----------------Getters and Setters--------------
class Employee {
  #salary;

  constructor(name, salary) {
    if (salary < 0) {
      // throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allow to see salary`;
  }

  set salary(newSalary) {
    if (newSalary.length < 0) {
      console.log("Invalid Salary");
    } else {
      this._salary = newSalary;
    }
  }
}

let emp = new Employee("Alice", -50000);
// console.log(emp.salary);
// console.log(emp._salary);
// emp.salary = 60000;

// another example of getters/setters

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount >= 0) {
      this._balance = amount;
    } else {
      console.log("Invalid amount: cannot set negative balance");
    }
  }
}

const account = new BankAccount(1000);

console.log(account.balance);

account.balance = 2000;
console.log(account.balance);

// account.balance = -500;
// console.log(account.balance);

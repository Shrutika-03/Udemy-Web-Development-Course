/* 1) Write a 'for' loop that loops through the arrau ['green tea','black tea','chai', 'lemon tea'] and stops the loop when it finds 'chai' stores all teas befor 'chai' in new array named 'selectedTeas' */

let teas = ["green tea", "black tea", "chai", "lemon tea"];

let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] == "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}

// console.log(selectedTeas);

/* 2) Write a 'for' loop that loops throught the array ["London", "NY","Paris","Berlin"] and store the other cities in the new array named 'visitedCities */

let cities = ["London", "NY", "Paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] == "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

// console.log(visitedCities);

/* 3) Use a "for-of" loop to iterate through the array [1,2,3,4,5] and stop when found the number '4' and store the numbers before '4' in an array named 'smallNumbers */

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(smallNumbers);

/* 4) Use a "for-of" loop to iterate through the array ["Chai","Green Tea","Herbal Te","Black Tea"] and skip "Herbal Tea" Store the other teas in an array named "preferredTeas" */

let teaArray = ["Chai", "Green Tea", "Herbal Tea", "Black Tea"];

let preferredTeas = [];

for (const tea of teaArray) {
  if (tea === "Herbal Tea") {
    continue;
  }
  preferredTeas.push(tea);
}

// console.log(preferredTeas);

/* 5) Use a "for-in" loop to loop through an objct containing the city population. Stop the loop when the population of berlin is founded and store all the cities population in a new object named "cityPopulation"
    let citiesPopulation={
    "London":8900000,
    "NY":8400000,
    "Paris":2200000,
    "Berlin": 3500000
    }
*/

let citiesPopulation = {
  London: 8900000,
  NY: 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityNewPopulation = {};

// console.log(Object.keys(citiesPopulation));
// console.log(Object.values(citiesPopulation));

for (const city in citiesPopulation) {
  //   console.log(citiesPopulation.city); //can't access like this
  //   console.log(citiesPopulation[city]);

  // key = value

  if (city === "Berlin") {
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}

// console.log(cityNewPopulation);

/* 6) Use a for..in loop to loop through an object containing city populations. Skip any city with a population below 3 million and store the rest in a new object named "largeCities" */

let worldCities = {
  sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Pearis: 2200000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }

  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/* 7) Write a "forEach" loop that iterates through the array ["earl grey","green tea","chai","black tea"] . Stop the loop when "chai" is found and store all previous tea typpes in an array named "availableTeas" */

let types = ["earl grey", "green tea", "chai", "black tea"];

let availableTeas = [];

types.forEach(function (ele) {
  if (ele === "chai") {
    return;
  }
  availableTeas.push(ele);
});
// console.log(availableTeas);

/* 8) Use a "forEach" loop that iterates through the array ["Berlin","Tokyo","Sydney","Paris"] Skip "Sydney" and store the other cities in a new array named "traveledCities" */

let myWishCities = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

myWishCities.forEach((item) => {
  if (item === "Sydney") {
    return;
  }
  traveledCities.push(item);
});

// console.log(traveledCities);

/* 9) Use a "for" loop that iterates through the array [2,5,7,9] skip the '7' and multiply rest by 2 and store in a  new array named "doubledNumbers" */

let numbered = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < numbered.length; i++) {
  if (numbered[i] === 7) {
    continue;
  }
  doubledNumbers.push(numbered[i] * 2);
}

// console.log(doubledNumbers);

/* 10) Use a for-of loop to iterate through the array ["chai","green tea","black tea,"lemon tea","herbal tea"] and stop when the length of the teas name is greater than 10. Store the teas iterated over in an new array named "shotTeas" */

let teasData = [
  "chai",
  "jasmine tea",
  "green tea",
  "black tea",
  "lemon tea",
  "herbal tea",
];

let shotTeas = [];

for (const item of teasData) {
  if (item.length > 10) {
    break;
  }
  shotTeas.push(item);
}

// console.log(shotTeas);

/* 1. Declare an array named `teaFlavors` that contains the strings `green tea`, `black tea` and `oolong tea`
Access the first element of the array and store it in a variable named `firstTea` */

// let teaFalvors = ["Green tea", "Black tea", "Oolong tea"];

// Another way of creating array
/* let teaFl = new Array("Green tea", "Black tea", "Oolong tea"); */

// access the element of an Array

// const firstTea = teaFalvors[0];
// console.log(firstTea);

/* 2. Declare the array named 'cities' containing 'london', 'tokyo', 'paris' & 'new york'.
Access the 3rd element in the array and store it in a variable named 'favoriteCity' */

/* let cities = ["london", "tokyo", "paris", "new york"];

const favoriteCity = cities[2];
console.log(favoriteCity); */

/* 3. you have an array named 'teaTypes' containing 'herbal tea', 'white tea','masala tea'
Change the 2nd element of the array to 'jasmine tea' */

/* let teaTypes = ["herbal tea", "wite tea", "masala tea"];

teaTypes[2] = "jasmine tea";

console.log(teaTypes); */

/* 4.Declare an array named "citiesVisited" containing "Mumbai", "Sydney"
Add "berlin" to the array using (PUSH) Method */

// let citiesVisited = ["mumbai", "Sydney"];

// citiesVisited[2] = "berlin"; // we can't use for long array length
// if mistakenly push value in index 1 then JS will overrite the index 1 current value
// citiesVisited[1]='berlin' //['mumbai','berlin]

// console.log(citiesVisited);

// but if we want add the value without knowing the length of the array
/* citiesVisited.push("Berlin");
console.log(citiesVisited);

citiesVisited.unshift("paris");
console.log(citiesVisited); */

/* 5. You have an array named 'teaOrders' containing 'chai','iced tea','matcha'and 'earl grey'
Remove the last element of the array using'POP' method and store it in a variable 'lastOrder' */

/* let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);

console.log(lastOrder);

const firstOrder = teaOrders.shift();
console.log(teaOrders);
console.log(firstOrder); */

/* 6.you have an array named 'popularteas' containing 'green tea', 'oolong tea' and'chai'
Create a soft copy of this array named 'sofyCopyTeas' */

// let popularteas = ["green tea", "oolong tea", "chai"];

// let sofyCopyTeas = popularteas;
// popularteas.pop();
// console.log(popularteas);
// console.log(sofyCopyTeas);

/* 7. You have an array named "topCities" containing "Berlin", "Singapore" and "New York"
Create a hard copy of this array named "hardCopy" */

// let topCities = ["Berline", "Singapore", "New York"];

// let hardCopy = [...topCities];
// console.log(topCities);

// topCities.pop();
// console.log(hardCopy);

/* 8.You have two arrays 'europeanCities' containing 'Paris' & "Rome" and 'asianCities' containing "Tokyo" & "Bangkook" 
Merge 2 arrays into a new array named "worldCities" */

// let europeanCities = ["Paris", "Rome"];

// let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = europeanCities + asianCities;
// let worldCities = [europeanCities, asianCities];
// let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);
// console.log(typeof worldCities);

/*9. You have an rray named 'teaMenu' containing 'masala chai', 'oolong tea','green tea' and 'earl grey'
find the length of the array and store it in a variable named 'menuLength' */

/* let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];

let menuLength = teaMenu.length;

console.log(menuLength); */

/*10. You have an array named 'cityBucketList' containing 'kyoto', 'london','cape town' and 'vancouver'
Check if 'london' is in the array and store the result in a variable named 'isLondonInList' */

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];

let isLondonInList = cityBucketList.includes("london");
// let isLondonInLists = cityBucketList.includes("London");

console.log(isLondonInList);

// console.log(isLondonInLists);

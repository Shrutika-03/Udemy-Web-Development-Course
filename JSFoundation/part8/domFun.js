/* --------------------------example-1 */

// document.getElementById("changeTextBtn").addEventListener("click", function () {
//   let para = document.getElementById("myPara");
//   //   console.log(para);
//   //   console.log(para.textContent);
//   para.textContent = "The paragraph is changed";
// });

/* --------------------------example-2 */

// document
//   .getElementById("highlightFirctCity")
//   .addEventListener("click", function () {
//     let cityList = document.getElementById("citiesList");
// console.log(cityList);
// cityList.firstElementChild.classList.add("highlight"); -------highlight first item of list
// cityList.children[1].classList.add("highlight"); --------highlight second item of list
// console.log(cityList.firstElementChild.remove("citiesList")); --remove first item of list
//   });

/* -----------------------------example -3 */

// document.getElementById("changeOrder").addEventListener("click", function () {
//   let type = document.getElementById("coffeeType");
//   type.textContent = "Espresso";
//   type.style.backgroundColor = "Blue";
//   type.style.padding = "15px";
// });

/* ----------------------------example- 4 */

// document.getElementById("addNewItem").addEventListener("click", function () {
//   let newItem = document.createElement("li");
//   newItem.textContent = "Eggs";
//   //   newItem.textContent = "Cheese"; the recent will be added and overwrite the previous one
//   //   console.log(newItem);

//   document.getElementById("shoppingList").appendChild(newItem);
// });

/* -----------------------------example- 5 */

/* document.getElementById("removeTask").addEventListener("click", function () {
  let taskList = document.getElementById("taskList");
  taskList.lastElementChild.remove();
});
 */

/* ---------------------------------example- 6 */
// document.getElementById("clickMeButton").addEventListener("click", function () {
//   console.log("Clicked Me");
// });

/* ---------------------------------example- 7 */
// document.getElementById("teaList").addEventListener("click", function (event) {
//   if (event.target && event.target.matches(".teaItem")) {
//     alert("You selected: " + event.target.textContent);
//   }
// });

/* ---------------------------------example- 8 */
// document
//   .getElementById("feedbackForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     let feedback = document.getElementById("feedbackInput").value;
//     let label = document.querySelector("label");
//     console.log(label.textContent);

//     console.log(feedback);

//     let display = document.getElementById("feedbackDisplay");
//     display.textContent = `Feedback is: ${feedback}`;
//     display.style.backgroundColor = "Red";
//     display.style.padding = "15px";
//     display.style.color = "#fff";
//     display.style.width = "50%";
//   });

/* --------------------------example- 9 */
// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("domStatus").textContent = "DOM fully loaded";
// });

/* -----------------------------example- 10 */
// document
//   .getElementById("toggleHighlight")
//   .addEventListener("click", function () {
//     let text = document.getElementById("descriptionText");
//     // text.classList.add("highlight");
//     text.classList.toggle("highlight");
//   });

// --------------------------Small Toggle Project-----------------------
document.getElementById("toggleBtn").addEventListener("click", function () {
  let toggle = document.getElementById("toggleContainer");
  toggle.classList.toggle("highlight");
});

// ------------------Generate Random Color

function changeColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Corrected RGB format
  const colors = `rgb(${r}, ${g}, ${b})`;

  return colors;
}

function color() {
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = changeColor(); // use function result
}
// var randomColor = changeColor();
// console.log(randomColor);

// const div = document.getElementById("toggleContainer");
// const button = document.getElementById("toggleBtn");

// button.addEventListener("click", function () {
//   if (div.style.backgroundColor === "brown") {
//     div.style.backgroundColor = "black";
//   } else {
//     div.style.backgroundColor = "brown";
//   }
// });

/* ------------------------ event delegation */

// document.getElementById("parent").addEventListener("click", function (event) {
//   if (event.target.tagName === "LI") {
//     console.log(`You clicked on ${event.target.textContent}`);
//     // event.target.style.color = "blue";
//   }
// });

// let newItem = document.createElement("li");
// newItem.textContent = "Item 5";
// document.getElementById("parent").appendChild(newItem);

/* ------------------ event bubbling */
// document.getElementById("parentDiv").addEventListener("click", () => {
//   console.log("Parent div clicked");
// });

// document.getElementById("childBtn").addEventListener("click", (e) => {
//   // e.stopPropagation();

//   console.log("Child button clicked");
// });
// document.getElementById("childBtn").addEventListener("click", (e) => {
//   // e.stopPropagation();

//   console.log("Child button clicked");
// });

// ------------------------- toggle mode
// const btn = document.getElementById("toggle");

// const body = document.body;

// btn.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");
//   body.classList.toggle("light-mode");

//   if (body.classList.contains("dark-mode")) {
//     btn.textContent = "Toggle Dark Mode";
//   } else {
//     btn.textContent = "Toggle Light Mode";
//   }
// });

/* -------------- To Do List App --------------------- */
// Add task & Delete Task
// function addTask() {
//   const input = document.getElementById("taskInput");
//   const taskText = input.value.trim();
//   if (!taskText) return;
//   const li = document.createElement("li");
//   li.textContent = taskText;

//   const btn = document.createElement("button");
//   btn.textContent = "Delete";
//   btn.onclick = () => li.remove();

//   li.appendChild(btn);
//   document.getElementById("taskList").appendChild(li);
//   input.value = "";
// }

const modal = document.getElementById("modal");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

modal.onclick = closeModal;

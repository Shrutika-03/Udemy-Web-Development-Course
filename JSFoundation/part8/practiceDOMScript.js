const userDiv = document.querySelector('[data-user-id="123"]'); //this line uses CSS attribute selector syntax to find the element that has data-user-id="123"

if (userDiv) {
  userDiv.style.backgroundColor = "lightblue";
}

let newItemAdd = document.createElement("li");
newItemAdd.textContent = "Vegies";
let list = document.getElementById("itemList");
list.appendChild(newItemAdd);
list.style.backgroundColor = "yellow";

function removerAllChildren(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

function clearAllNodes() {
  const container = document.getElementById("parentNode");
  removerAllChildren(container);
}

const text = document.getElementById("text");
// console.log(text.innerHTML);

// text.innerHTML = "<p>The text after using inner HTML</p>";
// text.textContent = "This text using textContent";

function showInnerText() {
  const div = document.getElementById("exampleDiv");
  alert(div.innerText);
}

// const button = document.querySelectorAll(".action-btn");

// button.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // alert("Button Clicked");
//   });
// });

document
  .getElementById("buttonContainer")
  .addEventListener("click", function (event) {
    if (event.target.classList.contains("action-btn")) {
      alert("Button clicked: " + event.target.textContent);
    }
  });

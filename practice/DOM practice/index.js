const btn = document.getElementById("changeBtnText");
const p = document.getElementById("thisPara");
btn.addEventListener("click", function () {
  p.classList.toggle("changed");

  if (p.classList.contains("changed")) {
    p.textContent = "This is duplicate paragraph";
  } else {
    p.textContent = "This is original paragraph";
  }
});

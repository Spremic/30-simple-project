const label = document.querySelector("label");
const toggle = document.getElementById("toggle");

label.addEventListener("click", () => {
  if (toggle.checked) {
    document.body.style.backgroundColor = "#f0f0f0";
  } else {
    label.classList.remove("checked");
    document.body.style.backgroundColor = "#000";
  }
});

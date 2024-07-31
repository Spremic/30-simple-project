const form = document.querySelector("form");
const output = document.querySelector("#output");

// let test = Number.isInteger(12);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("input").value.trim();
  const mathOperation = input / 2;
  const validation = Number.isInteger(mathOperation);

  if (validation) {
    output.innerHTML = "Even number";
  } else {
    output.innerHTML = "Odd number";
  }
});

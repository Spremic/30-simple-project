const form = document.querySelector("form");
const output = document.querySelector(".output");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = parseFloat(input.value.trim());

  if (inputValue >= 13) output.innerHTML = inputValue - 12;
  if (inputValue <= 13) output.innerHTML = inputValue + 12;
  else output.innerHTML = "";
});

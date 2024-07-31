const form = document.querySelector("form");
const input = document.querySelector("input");
const resultContainer = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value.trim();
  if (inputValue === "") return;

  try {
    const operation = eval(inputValue);
    resultContainer.innerHTML = `Result: ${operation}`;
  } catch (error) {
    resultContainer.innerHTML = "Error: Invalid expression";
  }
});

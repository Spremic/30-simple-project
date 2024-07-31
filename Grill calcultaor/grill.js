const form = document.querySelector("form");
const resultHtml = document.querySelector("#result");
const input = document.querySelector("#numPeople");
let kgConverter;
let result;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  let totalGrams = inputValue * 300;

  if (totalGrams >= 1000) {
    kgConverter = "kg";
    result = totalGrams / 1000;
  } else {
    kgConverter = "g";
    result = totalGrams;
  }

  resultHtml.innerHTML = ` <p>${result} ${kgConverter} of meat needed</p>`;
});

const form = document.querySelector("form");
let genderCalculation;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const maleRadio = document.querySelector("#male");
  const femaleRadio = document.querySelector("#female");
  const input = document.querySelector("#height").value;
  if (maleRadio.checked) {
    genderCalculation = input - 100;
  } else if (femaleRadio.checked) {
    genderCalculation = (input - 100) * 0.9;
  }

  document.querySelector(
    ".result"
  ).innerHTML = `Ideal Weight: <span id="ideal-weight">${genderCalculation}</span> kg`;
});

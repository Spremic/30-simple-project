const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const emailInput = document.querySelector("#email");
let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let errArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetErrors([nameInput, surnameInput, emailInput]);

  let nameValue = nameInput.value;
  let surnameValue = surnameInput.value;
  let emailValue = emailInput.value;

  validation(nameValue, surnameValue, emailValue);
});

function validation(nameValue, surnameValue, emailValue) {
  if (nameValue.trim().length < 3) {
    errArray.push(nameInput);
  }

  if (surnameValue.trim().length < 3) {
    errArray.push(surnameInput);
  }
  if (!regEmail.test(emailValue.trim())) {
    errArray.push(emailInput);
  }

  if (errArray.length === 0) {
    alert("You have registered");
  } else {
    displayErrors();
  }

  errArray = [];
}

function displayErrors() {
  errArray.forEach((inputs) => {
    inputs.style.borderColor = "red";
  });
}

function resetErrors(inputs) {
  inputs.forEach((elements) => {
    elements.style.borderColor = "#ffffffd7";
  });
}

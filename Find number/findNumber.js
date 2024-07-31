const form = document.querySelector("form");
const info = document.querySelector(".info");
const input = document.querySelector("input");
const questionMark = document.querySelector(".question-mark span");
let validation = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validation) {
    return;
  }

  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let inputValue = parseInt(input.value.trim());

  questionMark.innerHTML = randomNumber;

  if (randomNumber === inputValue) {
    info.innerHTML = `<p style="color: green;">You guessed it, <span class="information">reset the game</span></p>`;
  } else {
    info.innerHTML = `<p style="color: red;">You didn't guess it, <span class="information">try again</span></p>`;
  }
  validation = false;
});

info.addEventListener("click", (e) => {
  if (e.target.classList.contains("information")) {
    questionMark.innerHTML = "?";
    input.value = "";
    validation = true;
    document.querySelector(".info p").innerHTML = "";
  }
});

const allLetters =
  "zWj7B6TICpFu!KD4Ers3vqZg9QJSAkOhdMPnmXy0URHi1lf8LNcoVa5w2YbG?tMx";

const btn = document.querySelector("button");
btn.addEventListener("click", getPassword);

function getPassword() {
  const element = document.querySelector("h2");
  let password = "";

  for (let index = 0; index < 9; index++) {
    const randomIndex = Math.floor(Math.random() * allLetters.length);
    password += allLetters[randomIndex];
    element.innerHTML = `${password}`;
  }
}

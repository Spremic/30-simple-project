const items = document.querySelectorAll(".item");
const roundElement = document.querySelector(".round span");
const winElement = document.querySelector(".win span");
const loseElement = document.querySelector(".lose span");

let round = 0;
let wins = 0;
let losses = 0;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function updateResult(result) {
  round++;
  roundElement.textContent = round;
  if (result === "win") {
    wins++;
    winElement.textContent = wins;
  } else if (result === "lose") {
    losses++;
    loseElement.textContent = losses;
  }
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    const userChoice = item.classList[1];
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    alert(
      `You chose ${userChoice}. Computer chose ${computerChoice}. Result: ${result.toUpperCase()}`
    );

    updateResult(result);
  });
});

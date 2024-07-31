const form = document.querySelector("form");
let betBtns = document.querySelectorAll(".bet-button");
let playerBalanceOne = document.querySelector(".playerBalanceOne");
let playerBalanceTwo = document.querySelector(".playerBalanceTwo");
let newRound = document.querySelector(".new-round-button");
let numberContainer = document.querySelector(".number-display");
let betValidate = false;

let playerOneName;
let playerTwoName;
let userMoney;
let bit;
let winner;
let loser;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userMoney === undefined) {
    alert("Please select a bid");
    return;
  }
  playerOneName = document.querySelector("#playerOne").value.trim();
  playerTwoName = document.querySelector("#playerTwo").value.trim();
  document.querySelector(".form-container").style.display = "none";
  document.querySelector(".game-container").style.display = "block";
  renderDynamicContent();
});

betBtns.forEach((elements) => {
  elements.addEventListener("click", () => {
    betBtns.forEach((btns) => {
      btns.style.backgroundColor = "#ff6f61";
    });

    userMoney = elements.dataset.bet;
    elements.style.backgroundColor = "#ff3b2f";
  });
});

function renderDynamicContent() {
  let playerOneContainer = document.querySelector(".playerOneParagraph");
  let playerTwoContainer = document.querySelector(".playerTwoParagraph");
  playerOneContainer.innerHTML = playerOneName;
  playerTwoContainer.innerHTML = playerTwoName;
  playerBalanceOne.innerHTML = "$" + userMoney;
  playerBalanceTwo.innerHTML = "$" + userMoney;
}

newRound.addEventListener("click", generateRandomNumber);

function generateRandomNumber() {
  if (!betValidation()) {
    return;
  }

  disableInputs(true);

  let rotatingNumber = setInterval(() => {
    numberContainer.innerHTML = Math.floor(Math.random() * 100);
  }, 100);

  setTimeout(() => {
    clearInterval(rotatingNumber);
    displayWinnerInfo();
    disableInputs(false);
    checkForGameEnd();
  }, 2000);
}

function betValidation() {
  if (betValidate) {
    return false;
  }
  let betInput = parseFloat(document.querySelector("#betAmount").value.trim());
  bit = betInput;
  if (
    Array.from(document.querySelectorAll(".player-number")).some(
      (input) => isNaN(input.value) || input.value <= 0 || input.value >= 100
    )
  ) {
    alert("Have both players write their number");
    return false;
  }

  if (isNaN(betInput)) {
    alert("Enter the amount to bet");
    return false;
  }

  if (
    parseInt(playerBalanceOne.innerHTML.substring(1)) < betInput ||
    parseInt(playerBalanceTwo.innerHTML.substring(1)) < betInput
  ) {
    alert("Some player does not have that amount of money");
    return false;
  }

  betValidate = true;

  return true;
}

function displayWinnerInfo() {
  checkCloser();

  const updateBalance = (container, amount) => {
    const balanceElement = container.querySelector(".player-balance");
    const currentBalance = parseFloat(
      balanceElement.textContent.trim().substring(1)
    );
    balanceElement.textContent = `$${currentBalance + amount}`;
  };

  const winnerContainer = document.querySelector(winner);
  const loserContainer = document.querySelector(loser);

  loserContainer.style.border = "none";
  winnerContainer.style.border = "2px solid green";

  updateBalance(loserContainer, -bit);
  updateBalance(winnerContainer, bit);

  betValidate = false;
}

function checkCloser() {
  let playerOneNumber = parseFloat(
    document.querySelector("#numberBetOne").value.trim()
  );
  let playerTwoNumber = parseFloat(
    document.querySelector("#numberBetTwo").value.trim()
  );
  let numberResult = parseFloat(numberContainer.innerHTML.trim());

  const diff1 = Math.abs(numberResult - playerOneNumber);
  const diff2 = Math.abs(numberResult - playerTwoNumber);

  if (diff1 < diff2) {
    winner = "#playerOneContainer";
    loser = "#playerTwoContainer";
  } else if (diff2 < diff1) {
    winner = "#playerTwoContainer";
    loser = "#playerOneContainer";
  } else {
    alert("Both players are equally close to the number");
  }
}

function disableInputs(disable) {
  document.querySelector("#betAmount").disabled = disable;
  document
    .querySelectorAll(".player-number")
    .forEach((input) => (input.disabled = disable));
  newRound.disabled = disable;
}

function checkForGameEnd() {
  let playerOneBalance = parseFloat(
    playerBalanceOne.innerHTML.trim().substring(1)
  );
  let playerTwoBalance = parseFloat(
    playerBalanceTwo.innerHTML.trim().substring(1)
  );

  if (playerOneBalance <= 0) {
    alert(`${playerOneName} has won the game!`);
    newRound.disabled = true;
  } else if (playerTwoBalance <= 0) {
    alert(`${playerTwoName} has won the game!`);
    newRound.disabled = true;
  }
}

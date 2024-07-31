const clickContainer = document.querySelector(".click-container");
const clickHtml = document.querySelector(".statistic-container p span");
const timerHtml = document.querySelector(".timer-container span");
const restartBTN = document.querySelector("#restart");
const launchModal = document.querySelector("#launchModal");
const modalContent = document.querySelector("#exampleModalCenter .modal-body");

let clickTimer = 30;
let clickCounter = 0;
let validation = false;
let interval;

function restartPage() {
  clickTimer = 30;
  timerHtml.innerHTML = 30;
  clickCounter = 0;
  clickHtml.innerHTML = 0;
  clickContainer.innerHTML = "<p>Click to start</p>";
  validation = false;
  clearInterval(interval);
}

clickContainer.addEventListener("click", () => {
  if (!validation) {
    timer();
    validation = true;
    clickContainer.innerHTML = "";
  }

  clickCounter++;
  clickHtml.innerHTML = clickCounter;
});

function timer() {
  interval = setInterval(() => {
    clickTimer--;
    timerHtml.innerHTML = clickTimer;
    if (clickTimer === 0) {
      launchModal.click();
      modalContent.innerHTML = `<p>You got <span>${clickCounter}</span> clicks in 30 seconds!</p>`;
      restartPage();
    }
  }, 1000);
}

restartBTN.addEventListener("click", () => {
  restartPage();
});

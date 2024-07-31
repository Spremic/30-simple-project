const newSessionBtn = document.querySelector("button");
const globalTimeDiv = document.querySelector(".time-timer .stopwatch");
const inhaleTimeDiv = document.querySelector(".inhale-timer .stopwatch");
const inhaleTextDiv = document.querySelector(".inhale-timer .timer-text");
let globalInterval;
let breathInterval;

newSessionBtn.addEventListener("click", () => {
  startGlobalTimer();
  startBreathTimer();
});

function startGlobalTimer() {
  let counter = 60;
  globalTimeDiv.innerHTML = `${counter}s`;

  clearInterval(globalInterval);

  globalInterval = setInterval(() => {
    globalTimeDiv.innerHTML = `${--counter}s`;
    if (counter === 0) {
      clearInterval(globalInterval);
      clearInterval(breathInterval);
      globalTimeDiv.innerHTML = "60s";
    }
  }, 1000);
}

function startBreathTimer() {
  let exhaleInhale = 0;
  let counter = 5;

  updateBreathUI(exhaleInhale, counter);

  clearInterval(breathInterval);

  breathInterval = setInterval(() => {
    inhaleTimeDiv.innerHTML = `${--counter}s`;

    if (counter === 0) {
      exhaleInhale = 1 - exhaleInhale;
      counter = 5;
      updateBreathUI(exhaleInhale, counter);
    }
  }, 1000);
}

function updateBreathUI(exhaleInhale, counter) {
  inhaleTextDiv.innerHTML = exhaleInhale ? "Exhale" : "Inhale";
  inhaleTimeDiv.innerHTML = `${counter}s`;
}

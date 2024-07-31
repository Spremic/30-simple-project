let seconds = 0;
let interval;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");
const timeDisplay = document.getElementById("time");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}m ${remainingSeconds}s`;
}

startButton.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      timeDisplay.textContent = formatTime(seconds);
    }, 1000);
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

restartButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  timeDisplay.textContent = "0m 0s";
});

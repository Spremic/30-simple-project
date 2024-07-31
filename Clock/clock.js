function logCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  document.querySelector(".container").innerHTML = `<span>${
    hours + ":" + minutes
  }</span>`;
}
logCurrentTime();

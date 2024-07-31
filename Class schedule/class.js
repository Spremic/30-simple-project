document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("tbody input");

  function loadSchedule() {
    inputs.forEach((input, index) => {
      const savedClass = localStorage.getItem(`class${index}`);
      if (savedClass) {
        input.value = savedClass;
      }
    });
  }

  function saveSchedule() {
    inputs.forEach((input, index) => {
      localStorage.setItem(`class${index}`, input.value);
    });
  }

  inputs.forEach((input) => {
    input.addEventListener("input", saveSchedule);
  });

  loadSchedule();
});

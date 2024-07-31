const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);

  if (isNaN(number1) || isNaN(number2) || number2 === 0) {
    document.getElementById("result").innerText =
      "Please enter valid numbers and ensure the second number is not zero.";
    return;
  }

  const percentage = (number1 / number2) * 100;
  document.getElementById(
    "result"
  ).innerText = `${number1} is ${percentage.toFixed(2)}% of ${number2}`;
});

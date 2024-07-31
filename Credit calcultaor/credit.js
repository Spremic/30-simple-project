const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);

  const interest =
    parseFloat(document.getElementById("interest").value) / 100 / 12;

  const years = parseFloat(document.getElementById("years").value) * 12;

  if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
    alert("Please enter valid values.");
    return;
  }

  const x = Math.pow(1 + interest, years);
  const monthlyPayment = (amount * interest * x) / (x - 1);

  const totalPayment = monthlyPayment * years;
  const totalInterest = totalPayment - amount;

  document.getElementById(
    "monthly-payment"
  ).innerText = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  document.getElementById(
    "total-payment"
  ).innerText = `Total Payment: $${totalPayment.toFixed(2)}`;
  document.getElementById(
    "total-interest"
  ).innerText = `Total Interest: $${totalInterest.toFixed(2)}`;
});

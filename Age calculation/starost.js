const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let year = parseInt(document.getElementById("year").value);
  let month = parseInt(document.getElementById("month").value);
  let day = parseInt(document.getElementById("day").value);

  let today = new Date();

  let birthday = new Date(year, month - 1, day);

  let difference = today - birthday;

  let ageDate = new Date(difference);
  let years = ageDate.getUTCFullYear() - 1970;
  let months = ageDate.getUTCMonth();
  let days = ageDate.getUTCDate() - 1;

  // Prikaz rezultata
  let result = `You are ${years} years, ${months} months, and ${days} days old.`;
  document.getElementById("ageResult").textContent = result;

  return false;
});

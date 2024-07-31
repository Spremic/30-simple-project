const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    displayInformation(form);
  });
});

function displayInformation(form) {
  let ammount = form.querySelector(".ammount-input").value;
  let description = form.querySelector(".description-input").value;
  let listContainer = form.parentElement.querySelector(".transaction-list");
  let operation;
  if (listContainer.id === "addList") operation = "+";
  else operation = "-";

  listContainer.innerHTML += `<li>
            <span class="amount">${operation} $${ammount}</span>
            <span class="description">${description}</span>
          </li>`;

  updateGlobalValue(operation, ammount);
}

function updateGlobalValue(operation, ammount) {
  const globalValue = document.querySelector("#totalMoney");
  let mathOperation = eval(
    parseFloat(globalValue.innerHTML.substring(1)) + operation + ammount
  );
  globalValue.innerHTML = `$${mathOperation}`;
}

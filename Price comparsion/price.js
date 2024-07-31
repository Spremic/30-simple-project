const compareBTN = document.querySelector("#compareBTN");
compareBTN.addEventListener("click", comparePrices);

function comparePrices() {
  const priceA = parseFloat(document.getElementById("priceA").value);
  const priceB = parseFloat(document.getElementById("priceB").value);

  if (isNaN(priceA) || isNaN(priceB)) {
    alert("Please enter valid prices for both products.");
    return;
  }

  const nameA = document.getElementById("nameA").value;
  const nameB = document.getElementById("nameB").value;

  const difference = priceB - priceA;
  const percentageDiff = ((difference / priceA) * 100).toFixed(2);

  let priceDiffText;
  if (difference > 0) {
    priceDiffText = `${nameB} is $${difference.toFixed(
      2
    )} more expensive than ${nameA}.`;
  } else {
    priceDiffText = `${nameA} is $${Math.abs(difference).toFixed(
      2
    )} more expensive than ${nameB}.`;
  }

  const percentageDiffText = `Percentage difference: ${percentageDiff}%`;

  document.getElementById("price-diff").innerHTML = priceDiffText;
  document.getElementById("percentage-diff").innerHTML = percentageDiffText;
}

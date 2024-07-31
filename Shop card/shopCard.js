const addToCartBtns = document.querySelectorAll(".addCardBtn");
const cartContainer = document.querySelector(".cart-items");

addToCartBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let target = e.target;
    getValue(target);
  });
});

function getValue(target) {
  let parrent = target.closest(".single-item");
  let product = parrent.querySelector(".si-content h3").innerHTML;
  let price = parrent.querySelector(".price span").innerHTML;
  let quantity = parrent.querySelector("input").value;
  let button = parrent.querySelector("button");

  if (quantity > 0) {
    button.disabled = true;
    writeCart(product, price, quantity);
  } else alert("Please enter the quantity");
}

function writeCart(product, price, quantity) {
  let total = parseInt(quantity) * parseInt(price);
  cartContainer.innerHTML += `<div class ="cart-single-item">
    <h3>${product}</h3>
    <p>$${price} x ${quantity} = $<span>${total}</span></p>
    <button class="remove-item"> Remove </button>`;
  updateTotalValue();
}

cartContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item")) {
    const singleCart = e.target.closest(".cart-single-item");
    deleteCartItem(singleCart);
  }
});

function deleteCartItem(singleCart) {
  singleCart.remove();
  let cartProductname = singleCart.querySelector("h3").innerHTML.toLowerCase();
  let singleItemName = document.querySelector(`.${cartProductname}`);
  let singleItemBtn = singleItemName.querySelector("button");
  singleItemBtn.disabled = false;
  updateTotalValue();
}

function updateTotalValue() {
  const allValues = document.querySelectorAll(".cart-single-item p span");
  let totalSum = 0;
  allValues.forEach((e) => {
    totalSum += parseFloat(e.innerHTML) || 0;
  });

  document.querySelector(
    ".total"
  ).innerHTML = `<p> Total price <span>$${totalSum} </span> </p>`;
}

const form = document.querySelector("form");
const list = document.querySelector("#list");

const updateLocalStorage = () => {
  const items = document.querySelectorAll(".listDiv .title h3");
  const itemsArray = [];

  for (let i = 0; i < items.length; i++) {
    itemsArray.push(items[i].innerHTML);
  }
  
  localStorage.setItem("listItems", JSON.stringify(itemsArray));
};

const loadLocalStorage = () => {
  const savedItems = JSON.parse(localStorage.getItem("listItems"));
  if (savedItems) {
    savedItems.forEach((item) => {
      list.innerHTML += `<div class="listDiv">
            <div class="title">
              <h3>${item}</h3>
              <div class="titleBTN">
                <button class="deleteBTN">Delete</button>
              </div>
            </div>
          </div> `;
    });
  }
};

loadLocalStorage();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  let inputValue = input.value.trim();

  if (inputValue !== "") {
    list.innerHTML += `<div class="listDiv">
          <div class="title">
            <h3>${inputValue}</h3>
            <div class="titleBTN">
              <button class="deleteBTN">Delete</button>
            </div>
          </div>
        </div> `;
    input.value = "";
    updateLocalStorage();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBTN")) {
    let forDelete = e.target.closest(".listDiv");
    forDelete.remove();
    updateLocalStorage();
  }
});

const container = document.querySelector(".squares-container");
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close"); 
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");

fetchJson();

function fetchJson() {
  fetch("horoscope.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (const sign in data) {
        if (data.hasOwnProperty(sign)) {
          const square = document.createElement("a");
          square.href = "#";
          square.className = "square";
          square.innerHTML = `
            <img src="${data[sign].image}" alt="${data[sign].name}" />
            <h4>${data[sign].name}</h4>
          `;
          square.addEventListener("click", (event) => {
            event.preventDefault(); 
            openModal(data[sign]);
          });
          container.appendChild(square);
        }
      }
    })
    .catch((error) => {
      alert("There was a problem with the fetch operation: " + error.message);
    });
}

function openModal(signData) {
  modalImage.src = signData.image;
  modalTitle.innerText = signData.name;
  modalDescription.innerText = signData.description;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

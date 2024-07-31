const apiKey =
  "live_ofNlp8kDd3eJVAiFmVQClZ8eID4JoPiN7x0B7kgLYN1wnspRxYI58gpM5n3UFWsu";
const url = "https://api.thedogapi.com/v1/breeds";

function fetchBreeds(query) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
  };


  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const filteredBreeds = result.filter((breed) =>
        breed.name.toLowerCase().includes(query.toLowerCase())
      );
      displayBreeds(filteredBreeds); 
    })
    .catch((error) => console.error("Error:", error)); 
}

function displayBreeds(breeds) {
  const resultsContainer = document.getElementById("breed-results");
  resultsContainer.innerHTML = ""; 

  if (breeds.length === 0) {
    resultsContainer.innerHTML = "<p>No breeds found</p>";
    return;
  }

  breeds.forEach((breed) => {
    const breedCardHtml = `
            <div class="breed-card">
                <img src="${
                  breed.image?.url || "https://via.placeholder.com/300"
                }" alt="${breed.name}" class="breed-image">
                <h2 class="breed-name">${breed.name}</h2>
                <div class="breed-details">
                    <p><strong>Breed Group:</strong> ${
                      breed.breed_group || "N/A"
                    }</p>
                    <p><strong>Height:</strong> ${
                      breed.height?.imperial || "N/A"
                    } in (${breed.height?.metric || "N/A"} cm)</p>
                    <p><strong>Weight:</strong> ${
                      breed.weight?.imperial || "N/A"
                    } lbs (${breed.weight?.metric || "N/A"} kg)</p>
                    <p><strong>Life Span:</strong> ${
                      breed.life_span || "N/A"
                    }</p>
                    <p><strong>Temperament:</strong> ${
                      breed.temperament || "N/A"
                    }</p>
                </div>
            </div>
        `;
    resultsContainer.innerHTML += breedCardHtml;
  });
}

document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search").value.trim();
  fetchBreeds(query); 
});

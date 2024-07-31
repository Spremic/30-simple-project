const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", () => {
  let areaValue = textarea.value.trim();
  let words = areaValue.match(/\S+/g)?.length || 0;
  let characters = areaValue.length;
  document.querySelector(".characters-span").innerHTML = characters;
  document.querySelector(".words-span").innerHTML = words;
});

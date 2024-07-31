const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

document.querySelector(".date p ").innerHTML = `${day}.${month}.${year}`;

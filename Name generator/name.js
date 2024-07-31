const maleNames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Charles",
  "Thomas",
  "Daniel",
  "Matthew",
  "George",
  "Anthony",
  "Mark",
  "Paul",
  "Andrew",
  "Joshua",
  "Benjamin",
  "Samuel",
  "Patrick",
  "Donald",
  "Henry",
  "Joseph",
  "Steven",
  "Kenneth",
  "Edward",
  "Brian",
  "Ronald",
  "Kevin",
  "Jason",
  "Jeffrey",
  "Ryan",
  "Gary",
  "Nicholas",
  "Eric",
  "John",
  "Christopher",
  "Timothy",
  "Jacob",
];

const femaleNames = [
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Elizabeth",
  "Barbara",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
  "Nancy",
  "Margaret",
  "Lisa",
  "Betty",
  "Dorothy",
  "Helen",
  "Sandra",
  "Ashley",
  "Donna",
  "Kimberly",
  "Carol",
  "Michelle",
  "Emily",
  "Amanda",
  "Melissa",
  "Laura",
  "Hannah",
  "Deborah",
  "Angela",
  "Stephanie",
  "Rebecca",
  "Sharon",
  "Cynthia",
  "Kathleen",
  "Anna",
  "Maria",
  "Nicole",
  "Heather",
  "Ruth",
  "Diane",
];


const form = document.querySelector("form");
const maleRadio = document.querySelector("#maleInput");
const femaleRadio = document.querySelector("#femaleInput");
const output = document.querySelector(".centered-text h3");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const randomNumber = Math.floor(Math.random() * 39);
  if (maleRadio.checked) {
    output.innerHTML = maleNames[randomNumber];
  } else {
    output.innerHTML = femaleNames[randomNumber];
  }
});

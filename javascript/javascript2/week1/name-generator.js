const spiritList = [
  "calm dog",
  "beautiful pigeon",
  "lovely cat",
  "powerful eagle",
  "fearless lion",
  "quick horse",
  "love deer",
  "elegance tiger",
  "magical mouse",
  "compassion bear",
];

const button = document.querySelector("button");
let spiritPhrase = document.querySelector("p");

button.addEventListener("click", function () {
  let randAnimal = spiritList[Math.floor(Math.random() * spiritList.length)];
  let userName = document.getElementById("firstName").value;
  if (!userName) {
    spiritPhrase.innerHTML = "Please insert your name";
    return;
  }
  spiritPhrase.innerHTML = `${userName}:${userName}-${randAnimal} `;
  return;
});
/*
const option1 = document.querySelector("#fName");
const input = document.querySelector("input");
const spiritPhrase = document.querySelector("p");
const firstName = document.querySelector("firstName");

option1.addEventListener("click", function () {
  input.addEventListener("input", function () {
    let userName = document.getElementById("firstName").value;
    let randAnimal = spiritList[Math.floor(Math.random() * spiritList.length)];
    spiritPhrase.innerHTML = `${userName}:${userName}-${randAnimal} `;
  });
});
*/

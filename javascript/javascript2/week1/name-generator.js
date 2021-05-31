const button = document.querySelector("button");

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

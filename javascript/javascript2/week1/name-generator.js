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
const spiritPhrase = document.querySelector("p");

button.addEventListener("click", function () {
  const randAnimal = spiritList[Math.floor(Math.random() * spiritList.length)];
  const userName = document.getElementById("firstName").value;
  if (!userName) {
    spiritPhrase.innerHTML = "Please insert your name";
    return;
  }
  spiritPhrase.innerHTML = `${userName}:${userName}-${randAnimal}`;
  return;
});

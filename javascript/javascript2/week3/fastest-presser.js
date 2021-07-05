/*
When the button is clicked, get the value of the input.
This value will be the amount of time the game should run.
*/

const gameButton = document.querySelector("#start"); //start game button
const input = document.querySelector("input");
let sCount = 0;
let lCount = 0;
let confetti = [];

const resultTag = document.getElementById("game-result"); //game result
resultTag.innerHTML = "";
const gameResult = () => {
  if (sCount === 0 && lCount === 0) {
    resultTag.innerHTML = "No action!!!";
  }
  if (sCount === lCount && sCount > 0 && lCount > 0) {
    resultTag.innerHTML = "Game Draw!!!";
  }
  if (sCount > lCount) {
    resultTag.innerHTML = "S is the winer !!!";

    const confettiSettings = { target: "s-canvas", size: 2 };
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
  if (lCount > sCount) {
    resultTag.innerHTML = "L is the winner";
    const confettiSettings = { target: "l-canvas", size: 2 };
    confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }
};

gameButton.addEventListener("click", gameStart);
function gameStart() {
  let gameTime = input.value;
  if (gameTime === "") {
    alert("please enter time");
    document.removeEventListener("keydown", keyDetect);
  }

  if (gameTime > 0) {
    setTimeout(() => {
      document.removeEventListener("keydown", keyDetect);
      alert(" Game End!!!");
      gameResult();
    }, gameTime * 1000);

    document.addEventListener("keydown", keyDetect); //detect the keys
    function keyDetect(event) {
      let userKey = event.key;
      if (userKey === "s") {
        sCount++;
        document.getElementById("S-press").innerHTML = sCount;
      }
      if (userKey === "l") {
        lCount++;
        document.getElementById("L-press").innerHTML = lCount;
      }
    }
  }
}
document.getElementById("restart").addEventListener("click", function () {
  document.getElementById("input").value = "";
  document.getElementById("S-press").innerHTML = "";
  document.getElementById("L-press").innerHTML = "";
  resultTag.innerHTML = "";
  sCount = 0;
  lCount = 0;
  confetti.clear();
});

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(danishWords) {
  let shortWordLength = danishWords[0].length;
  for (let i = 0; i < danishWords.length; i++) {
    if (danishWords[i].length < shortWordLength) {
      shortWordLength = danishWords[i];
    }
  }
  return shortWordLength;
}
console.log(getShortestWord(danishWords)); // returns 'ø'

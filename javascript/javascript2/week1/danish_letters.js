const danishLetters = ["å", "æ", "ø"];

function getDanishLetters(danishString) {
  let letters = danishString.split("");

  let resultArray = [];
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === danishLetters[j]) {
        resultArray.push(letters[i]);
      }
    }
  }
  function freqLetter(resultArray) {
    let count = { total: resultArray.length };
    for (i = 0; i < resultArray.length; i++) {
      let character = resultArray[i].charAt(0);

      if (count[character]) {
        count[character]++;
      } else {
        count[character] = 1;
      }
    }
    return count;
  }
  console.log(freqLetter(resultArray));
}

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
getDanishLetters(danishString); // returns {total: 1, å: 1}
getDanishLetters(danishString2);
getDanishLetters("jeg bør være at sø og ø og køber kål så lækker");
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

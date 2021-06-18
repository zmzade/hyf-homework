const danishLetters = ["å", "æ", "ø"];
let danishLetterSet = new Set(danishLetters);
function getDanishLetters(danishString) {
  let letters = danishString.split("");
  const lettersArr = letters.filter((letter) => danishLetterSet.has(letter));

  function freqLetter(lettersArr) {
    let count = { total: lettersArr.length };
    for (i = 0; i < lettersArr.length; i++) {
      let character = lettersArr[i].charAt(0);

      if (count[character]) {
        count[character]++;
      } else {
        count[character] = 1;
      }
    }
    return count;
  }
  console.log(freqLetter(lettersArr));
}

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
getDanishLetters(danishString); // returns {total: 1, å: 1}
getDanishLetters(danishString2);
getDanishLetters("jeg bør være at sø og ø og køber kål så lækker");
//notThisFunctionName(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

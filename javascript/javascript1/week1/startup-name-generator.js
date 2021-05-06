let firstWords = ['easy', 'awsome', 'cool', 'international', 'new', 'youtube', 'ocean', 'flowers', 'asia', 'Denmark']
let secondWords = ['giant', 'future', 'corporation', 'human', 'love', 'novels', 'language', 'life', 'far', 'like']

const randomNumber1 = Math.floor(Math.random() * 10) + 0;
const randomNumber2 = Math.floor(Math.random() * 10) + 0;
 let sumOfCharacters = firstWords[randomNumber1].length + secondWords[randomNumber2].length + 1
let startupName = '\"The startup: ' + '\"' + firstWords[randomNumber1] +  ' ' + secondWords[randomNumber2]  +'\"' + ' contains ' +  sumOfCharacters  + ' characters\"'
console.log(startupName)
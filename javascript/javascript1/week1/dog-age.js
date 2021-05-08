const dogYearOfBirth = 2021; // const, as year of birth doesnot change
let dogYearFuture = 2031;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false
if (shouldShowResultInDogYears) {
    console.log(`your dog will be ${dogYear} human years old in 2031`)
} else {
    console.log(`your dog will be ${7 * dogYear} dog years old in 2031`)
}
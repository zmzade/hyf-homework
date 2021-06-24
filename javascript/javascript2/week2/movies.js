const movies = require("./movies.json");
const shortTitleMovies = movies.filter((x) => x.title.length < 3);
//console.log(shortTitleMovies);
const longTitleMovies = movies.filter((x) => x.title.length > 50);
//console.log(longTitleMovies);

const moviesIn80s = movies.filter((x) => x.year >= 1980 && x.year <= 1989);
//console.log(moviesIn80s.length);

const moviesWithTag = movies.map((x) => {
  if (x.rating >= 7) {
    return { ...x, tag: "Good" };
  }
  if (x.rating >= 4) {
    return { ...x, tag: "Average" };
  }
  return { ...x, tag: "Bad" };
});
//console.log(moviesWithTag);

const highRatedMovies = movies.filter((x) => x.rating > 6).map((x) => x.rating);
//console.log(highRatedMovies);

const moviesWithKeywords = movies.filter(
  (x) =>
    x.title.toLocaleLowerCase().split(" ").includes("alien") ||
    x.title.toLocaleLowerCase().split(" ").includes("surfer") ||
    x.title.toLocaleLowerCase().split(" ").includes("benjamin")
);
//console.log(moviesWithKeywords.length);
//Create an array of movies where a word in the title is duplicated.
const duplicatedWordArray = movies.filter(function (item) {
  const titleWords = item.title.toLocaleLowerCase().split(" ");
  if (titleWords.length !== [...new Set(titleWords)].length) {
    return true;
  }
});

//console.log(duplicatedWordArray);
//Calculate the average rating of all the movies using reduce
const ratingAverage = movies.reduce(function (average, x) {
  return average + x.rating / movies.length;
}, 0);
//console.log(ratingAverage);
//Count the total number of Good, Average and Bad movies using reduce.
//A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}

const totalNumber = moviesWithTag.reduce(function (sum, x) {
  if (x.tag in sum) {
    sum[x.tag]++;
  } else {
    sum[x.tag] = 1;
  }
  return sum;
}, {});
//sum[x.tag] = sum[x.tag] ? sum[x.tag] + 1 : 1;
console.log(totalNumber);

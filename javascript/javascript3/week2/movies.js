fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((res) => res.json())
  .then((data) => {
    const badMovies = data.filter((x) => x.rating < 3);
    console.log(badMovies);
    const badMoviesSince2000 = badMovies.filter((x) => x.year >= 2000);
    console.log(badMoviesSince2000);
  });
//---------------------------------------------------
//Promise that resolves after set time
function resolveAfterSetTime(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}
/*
resolveAfterSetTime(4).then(() => {
  console.log("I am called asynchronously"); // logged out after 4 seconds
});*/

// use it with async/await
async function asynCall() {
  await resolveAfterSetTime(4);
  console.log("I am called asynchronously"); // logged out after 4 seconds
}
asynCall();

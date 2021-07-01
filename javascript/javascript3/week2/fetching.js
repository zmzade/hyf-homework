/*
1- Wait 3 seconds
2- After 3 seconds fetch some data from any api you like
3- Log out the data from the api
//-----
Do the 3 steps below using promises and .then.
Do the 3 steps below using async/await
*/

function waitFor3Sec(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
      fetchPromise.then((res) => resolve(res.json()));
    }, time);
  });
}
waitFor3Sec(3000).then((data) => console.log(data));

//---------------------------------------------------------------------

async function waitFor4Sec(time) {
  return await new Promise((resolve) => {
    setTimeout(async () => {
      const response = await fetch("https://ghibliapi.herokuapp.com/people");
      const results = await response.json();
      console.log(results);
      //resolve(results);
    }, time);
  });
}
waitFor4Sec(4000);

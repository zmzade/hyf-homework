//Log out the text Called after 2.5 seconds, 2.5 seconds after the script is loaded
setTimeout(() => {
  console.log("text Called after 2.5 seconds");
}, 2500);
/*
Create a function that takes 2 parameters: delay and stringToLog.
 Calling this function should log out the stringToLog after delay seconds.
  Call the function you have created with some different arguments.*/
function getDelayedString(delay, stringToLog) {
  return setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

getDelayedString(5, "This string logged after 5 seconds");
getDelayedString(10, "This string logged after 10 seconds");
/*Create a button in html. When clicking this button,
 use the function you created in the previous task
  to log out the text: Called after 5 seconds, 5 seconds after the button is clicked.*/
const button = document.querySelector("#button");
button.addEventListener("click", function (event) {
  event.target.value;
  return getDelayedString(5, "Called after 5 seconds");
});
/*
Create two functions and assign them to two different variables.
One function logs out Earth, the other function logs out Saturn.
Now create a new third function that has one parameter: planetLogFunction. 
The only thing the third function should do is call the provided parameter function. 
Try call the third function once with the Earth function and once with the Saturn function.
*/
const earthLogger = () => {
  console.log("Earth");
};
const saturnLogger = () => {
  console.log("Saturn");
};
function planetLogFunction(f) {
  f();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

/*
Create a function called runAfterDelay.
It has two parameters: delay and callback. 
When called the function should wait delay seconds and then 
call the provided callback function. Try and call this function 
with different delays and different callback functions
*/
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    return callback();
  }, delay * 1000);
}
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});
runAfterDelay(10, function () {
  console.log(" should be logged after 10 seconds");
});
/*
Check if we have double clicked on the page.
A double click is defined by two clicks within 0.5 seconds. 
If a double click has been detected, log out the text: "double click!"
*/
document.addEventListener("dblclick", () => {
  console.log("double click!");
});

/*
Create a function called jokeCreator that has three parameters:
shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function 
that should log out a funny joke. And vice versa.
*/

const logFunnyJoke = () => {
  console.log("funny joke");
};
const logBadJoke = () => {
  console.log("bad joke");
};

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    return logFunnyJoke();
  }
  return logBadJoke();
}
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);

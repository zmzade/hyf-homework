/*
Create an array with 3 items. All items should be functions.
Iterate through the array and call all the functions.
*/
const arrayOfFunctions = [
  function f() {
    console.log("one");
  },

  function g() {
    console.log("two");
  },
  function h() {
    console.log("three");
  },
];
arrayOfFunctions.forEach((x) => x());

/*
Create a function as a const and try creating a function normally. Call both functions. 
*/
const myFunction = function () {
  return 5;
};
function f() {
  return 10;
}
console.log(myFunction());
console.log(f());
//Create an object that has a key whose value is a function. Try calling this function.
const myObject = {
  myFunc: function f() {
    console.log("Goood");
  },
};
const callFunction = myObject.myFunc;
callFunction();

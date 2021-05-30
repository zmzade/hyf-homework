let userName = [];
let myTodo = [];
function getReply(command) {
  if (command.includes("my name is")) {
    let commandStr = command.split(" ");
    let activeName = commandStr[commandStr.length - 1];

    if (userName.includes(activeName)) {
      console.log(" Yes I know");
      return;
    }

    userName.push(activeName);
    console.log(`nice to meet you ${activeName}`);
    return;
  }

  if (command.includes("what is my name")) {
    if (!userName) {
      console.log("what is your name");
      return;
    }
    console.log(`your name is ${activeName}`);
    return;
  }
  if (command.includes("Add fishing to my todo")) {
    let commandStr = command.split(" ");
    if (myTodo) {
    }
    myTodo.push(commandStr[1]);
    console.log(`${myTodo} added to your todo`);
  }
}
console.log(getReply("Hello my name is Benjamin")); //"nice to meet you Benjamin"
console.log(getReply("Hello my name is Benjamin")); //What if someone writes this twice?

console.log(getReply("What is my name?")); // "Your name is Benjamin"

console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Remove fishing from my todo")); //"Removed fishing from your todo"
console.log(getReply("What is on my todo?")); //Fx you have 2 todos - fishing and singing in the shower
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("Set a timer for 4 minutes"));

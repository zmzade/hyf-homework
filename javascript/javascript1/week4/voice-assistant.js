let userNames = [];
let myTodoList = [];
function getReply(command) {
  let commandStr = command.split(" ");
  let activeName = commandStr[commandStr.length - 1];
  if (command.includes("my name is")) {
    if (userNames.includes(activeName)) {
      return console.log(" Yes I know");
    }

    userNames.push(activeName);
    return console.log(`nice to meet you ${activeName}`);
  }

  if (command.includes("What is my name?")) {
    if (userNames.length === 0) {
      return console.log("I can not guess it. Please write down your name!");
    }
    console.log(`your name is ${userNames[userNames.length - 1]}`);
  }
  if (command.startsWith("Add ") && command.endsWith(" to my todo")) {
    myTodoList.push(command.substr(4, command.length - 15));
    console.log(`${myTodoList[myTodoList.length - 1]} added to your todo`);
  }

  if (command.startsWith("Remove ") && command.endsWith(" from my todo")) {
    if (myTodoList.length === 0) {
      console.log("Your Todo is empty!");
      return;
    }
    const removeTodo = command.substr(7, command.length - 20);

    for (let i = 0; i < myTodoList.length; i++) {
      if (myTodoList[i] === removeTodo) {
        myTodoList.splice(i, 1);
        console.log(`Removed ${removeTodo} from your todo`);
      }
    }
  }
  if (command.includes("What is on my todo")) {
    if (myTodoList == null) {
      return console.log("your todo list is empty");
    }
    console.log(
      `you have ${myTodoList.length} todos -${myTodoList.join(" and ")} `
    );
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  if (command.includes("What day is it today?")) {
    const today = new Date();
    const year = today.getFullYear();
    const date = today.getDate();
    const monthIndex = today.getMonth();
    const monthName = months[monthIndex];
    const dayIndex = today.getDay();
    const dayName = days[dayIndex];
    const formattedDate = `${dayName}, ${date}. of ${monthName} ${year}`;
    console.log(formattedDate);
  }
  if (command.includes("what is")) {
    const simpleMath = command.slice(7).trim();
    console.log(eval(simpleMath));
  }
  if (command.startsWith("Set a timer for ") && command.endsWith(" minutes")) {
    const timerInMinute = parseInt(command.substr(-10, 2).trim());
    const timerInMilliseconds = timerInMinute * 60000;
    //setTimeout(setAlert, timerInMilliseconds);
    console.log(`Timer set for ${timerInMinute} minutes`);
    //function setAlert() {
    // console.log("Timer done");
    //}
  }
}
console.log(getReply("Hello my name is Benjamin")); //"nice to meet you Benjamin"
console.log(getReply("Hello my name is Benjamin")); //What if someone writes this twice?
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add doing homework to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "fishing added to your todo"
console.log(getReply("Remove fishing from my todo")); //"Removed fishing from your todo"
console.log(getReply("What is on my todo?")); //Fx you have 2 todos - fishing and singing in the shower
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3")); //should respond with 6
console.log(getReply("what is 3 * 3"));
console.log(getReply("what is 3 - 3"));
console.log(getReply("what is 3 / 3"));
console.log(getReply("what is 5 % 3"));
console.log(getReply("what is (3 +3) * 2"));
console.log(getReply("Set a timer for 10 minutes")); //Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done".
console.log(getReply("Set a timer for 4 minutes"));

// const addTomyIndex = commandStr.findIndex((element) => element === "to");
// myTodoList.push(commandStr.slice(1, addTomyIndex).join(" "));

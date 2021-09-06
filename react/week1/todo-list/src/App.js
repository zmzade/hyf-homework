import logo from "./logo.svg";
import "./App.css";
const GetToDo = (props) => {
  return (
    <div className="todos">
      <h4>{props.description}</h4>
      <p> {props.deadline} </p>
    </div>
  );
};

const todoList = [
  { description: "Get out of bed", deadline: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadline: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
];
function App() {
  return (
    <div className="App">
      <h2>My to do list</h2>
      {todoList.map((x) => {
        return <GetToDo description={x.description} deadline={x.deadline} />;
      })}
    </div>
  );
}

export default App;

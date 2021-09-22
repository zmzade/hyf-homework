import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Fetching from "./Fetching";
import { getNextId } from "./Helper";
import Timer from "./Timer";

function App() {
  const [todoText, setTodoText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Fetching().then((data) => {
      setTodos(data);
    });
  }, []);

  const addTodo = () => {
    if (!todoText) {
      return alert("Insert new todo");
    }
    if (!deadline) {
      return alert("insert deadline");
    }
    //the built-in toISOString method format date to the ISO 8601 format:
    const currentDay = new Date().toISOString().split("T")[0];

    if (deadline < currentDay) {
      return alert("deadline is not possible");
    }

    const nextId = getNextId(todos);

    const newTodo = todos.concat({
      id: nextId,
      description: todoText,
      deadline: deadline,
    });
    setTodos(newTodo);
  };
  const handleDelete = (id) => {
    const remainedRows = todos.filter((x) => x.id !== id);
    setTodos(remainedRows);
  };

  return (
    <div className="App">
      <h2>Todolist</h2>
      <Timer />
      <br />
      <span>Todo description</span>
      <input
        type="text"
        placeholder="Add new todo .."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <br />
      <span>deadline</span>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <br />
      <button onClick={addTodo} type="submit">
        Add todo
      </button>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

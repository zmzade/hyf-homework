import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import Timer from "./Timer";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
  {
    id: 4,
    description: "go school",
  },
];

function App() {
  const [todoArr, setTodoArr] = useState(todos);

  const addTodo = () => {
    const lastItem = todoArr[todoArr.length - 1];
    const nextId = lastItem === undefined ? 1 : lastItem.id + 1;
    const newTodoItem = {
      id: nextId,
      description: "random text",
    };
    console.log(newTodoItem);
    const newTodoItems = [...todoArr, newTodoItem];
    console.log(newTodoItems);
    setTodoArr(newTodoItems);
  };

  const handleDelete = (id) => {
    const remainedRows = todoArr.filter((c) => c.id !== id);
    setTodoArr(remainedRows);
  };

  return (
    <div className="App">
      <h2>Todolist</h2>
      <Timer />
      <button onClick={addTodo}>Add todo</button>
      <TodoList todorows={todoArr} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

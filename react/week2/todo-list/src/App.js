import React, { useState, useEffect } from "react";
import "./App.css";

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

const TodoTimer = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  });

  return <p>You have used this app for {count} seconds</p>;
};

const NotItem = (props) => {
  return <span>{props.text} </span>;
};

const TodoRow = (props) => {
  const [checked, setChecked] = useState(false);
  const itemChecked = checked ? "label" : "";
  return (
    <li>
      <label id={props.id} className={itemChecked}>
        {props.textDescription}
      </label>
      <input
        id={props.id}
        type="checkbox"
        onChange={() => setChecked(!checked)}
      ></input>
      <button
        style={{ fontSize: 15 }}
        onClick={() => props.handleDelete(props.id)}
      >
        Delete
      </button>
    </li>
  );
};

const TodoList = (props) => {
  if (props.todorows.length === 0) {
    return <NotItem text="No items" />;
  }

  return (
    <ul>
      {props.todorows.map((x, index) => {
        return (
          <TodoRow
            key={index}
            textDescription={x.description}
            id={x.id}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </ul>
  );
};

function App() {
  const [todoArr, setTodoArr] = useState(todos);

  const addTodo = () => {
    let randValue = Math.floor(Math.random() * todoArr.length);
    let newTodo = todoArr[randValue];

    //const newTodoArr = todoArr.concat(newTodo);
    const newTodoArr = [...todoArr, newTodo];

    setTodoArr(newTodoArr);
  };

  const handleDelete = (id) => {
    const remainedRows = todoArr.filter((c) => c.id !== id);
    setTodoArr(remainedRows);
  };

  return (
    <div className="App">
      <h2>Todolist</h2>
      <TodoTimer />
      <button onClick={addTodo}>Add todo</button>
      <TodoList todorows={todoArr} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

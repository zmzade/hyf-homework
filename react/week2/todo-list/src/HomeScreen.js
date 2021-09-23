import React, { useState, useEffect } from "react";
import TodoList from "./Todos";
import { getNextId } from "./helpers";
//import Header from "./Header";

const todos = [
  {
    id: 1,
    description: "Get out of bed",
    completed: false,
  },
  {
    id: 2,
    description: "Brush teeth",
    completed: false,
  },
  {
    id: 3,
    description: "Eat breakfast",
    completed: false,
  },
];
const TodoTimer = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  });

  return <p>You have used this app for {count} seconds</p>;
};

function HomeScreen() {
  const [todoItems, changeTodoItems] = React.useState(todos);

  const addItem = () => {
    // change todos state and rerender
    const nextId = getNextId(todoItems);
    const newTodoItem = {
      id: nextId,
      description: "A text",
    };
    console.log(newTodoItem);
    const newTodoItems = todoItems.concat(newTodoItem);
    console.log(newTodoItems);
    changeTodoItems(newTodoItems);
  };

  const deleteItemFromState = (id) => {
    console.log("delete item from parent", id);
    const newTodoItems = todoItems.filter((todoItem) => {
      if (todoItem.id === id) return false;
      else return true;
    });
    console.log(newTodoItems);
    changeTodoItems(newTodoItems);
  };

  const toggleItemCompleteFromState = (id) => {
    let newTodoItems = todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, completed: !todoItem.completed };
      } else {
        return todoItem;
      }
    });

    changeTodoItems(newTodoItems);
  };

  return (
    <div className="home_screen">
      <h2>Todolist</h2>
      <TodoTimer />
      <button onClick={addItem}>Add todo</button>
      <TodoList
        todoItems={todoItems}
        deleteItem={deleteItemFromState}
        toggleItemComplete={toggleItemCompleteFromState}
      />
    </div>
  );
}

export default HomeScreen;

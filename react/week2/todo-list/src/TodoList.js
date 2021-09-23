import React from "react";
import TodoRow from "./TodoRow";

const TodoList = (props) => {
  if (props.todorows.length === 0) {
    return <span> No Item </span>;
  }

  return (
    <ul>
      {props.todorows.map((x, index) => {
        return (
          <TodoRow
            key={x.id}
            textDescription={x.description}
            id={x.id}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

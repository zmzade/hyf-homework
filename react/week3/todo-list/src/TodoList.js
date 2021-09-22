import React from "react";
import TodoItem from "./TodoItem";

const RowsBorder = (props) => {
  const { children } = props;
  return <div className="border">{children}</div>;
};

const TodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <RowsBorder key={todo.id}>
              <TodoItem todo={todo} handleDelete={props.handleDelete} />
            </RowsBorder>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;

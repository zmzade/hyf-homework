import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

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

TodoList.prototype = {
  id: PropTypes.number,
};
export default TodoList;

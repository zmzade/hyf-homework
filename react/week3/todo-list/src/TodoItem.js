import React, { useState } from "react";

const TodoItem = (props) => {
  const { todo } = props;
  const [checked, setChecked] = useState(false);
  const [editMode, changeEditMode] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const checkedItem = checked ? "complete" : "";
  const buttonName = editMode ? "Update" : "Edit";

  return (
    <li>
      {" "}
      <span className={checkedItem}>
        {!description && alert("Insert updated todo here")}
        {!editMode ? (
          <span>{description}</span>
        ) : (
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}

        <span className="date">{todo.deadline}</span>
      </span>
      <input type="checkbox" onChange={() => setChecked(!checked)} />
      <button onClick={() => props.handleDelete(todo.id)}>Delete</button>
      <button onClick={() => changeEditMode(!editMode)}>{buttonName}</button>
    </li>
  );
};
export default TodoItem;

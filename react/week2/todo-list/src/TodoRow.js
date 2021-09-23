import React, { useState } from "react";

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

export default TodoRow;

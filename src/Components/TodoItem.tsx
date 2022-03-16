import React from "react";
import {ITodoItem} from "../Interfaces";

export const TodoItem: React.FC<ITodoItem> = ({id,classes, title, completed, onChangeHandler, onRemoveHandler}) => {

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemoveHandler(id);
  }

  return (
    <li className={classes}>
      <label>
        <input type="checkbox" checked={completed} onChange={() => onChangeHandler(id)}/>
        <span>{title}</span>
        <i className="material-icons red-text" onClick={event => removeHandler(event, id)}>delete</i>
      </label>
    </li>
  );
}
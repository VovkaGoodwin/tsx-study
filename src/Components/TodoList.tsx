import React from "react";
import {ITodo} from "../Interfaces";
import {TodoItem} from "./TodoItem";

type TodoListProps = {
  todos: ITodo[],
  onToggle: (id: number) => void,
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onRemove, onToggle}) => {
  if (todos.length === 0) {
    return (<p className="center">Пока дел нет</p>);
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = [ 'todo' ];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <TodoItem
            classes={classes.join(' ')}
            onRemoveHandler={onRemove}
            onChangeHandler={onToggle}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
          />
        );
      })}
    </ul>
  )
}
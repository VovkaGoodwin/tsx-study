import React, {useState, useEffect} from "react";
import {TodoForm} from "../Components/TodoForm";
import {TodoList} from "../Components/TodoList";
import {ITodo} from "../Interfaces";

declare var confirm: (question: string) => boolean;

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved: ITodo[] = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos]);
    setTodos(prevState => [newTodo, ...prevState]);
  }

  const toggleHandler = (id: number) => {
    const arr = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      console.log(todo);
      return todo;
    });
    setTodos([...arr]);
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите удалить выбранный элемент?');
    if (shouldRemove) {
      setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }
  }

  return (<>
    <TodoForm onAdd={addHandler}/>
    <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
  </>)
}
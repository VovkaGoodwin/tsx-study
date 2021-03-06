import React, {useState} from 'react';
import {Navbar} from "./Components/Navbar";
import {TodoForm} from "./Components/TodoForm";
import {TodoList} from "./Components/TodoList";
import {ITodo} from "./Interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    // setTodos([newTodo, ...todos]);
    setTodos(prevState => [newTodo, ...prevState]);
  }

  // const toggleHandler = (id: number) => {
  //   const arr = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //     }
  //     console.log(todo);
  //     return todo;
  //   });
  //   setTodos([...arr]);
  // }

  const toggleHandler = (id: number) => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id ) {
          todo.completed = !todo.completed;
        }
        console.log('toggleHandler', todo);
        return todo;
      })
    );
  }

  const removeHandler = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  return <>
    <Navbar/>
    <div className="container">
      {console.log('App',todos)}
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos} onRemove={removeHandler} onToggle={toggleHandler}/>
    </div>
  </>
}

export default App;

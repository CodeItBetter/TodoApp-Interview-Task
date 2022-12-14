import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  
  useEffect(() => {
    let todosArr = localStorage.getItem("todos");
    todosArr = JSON.parse(todosArr);
    console.log(todosArr);

    if (todosArr) {
      setTodos(todosArr);
    }
  }, []);

  useEffect(() => {
    setError("");
  }, [todos]);

  const addTodoHandler = (todo) => {
    let err = "";
    todos.map((ele) => {
      if (ele.title.toLowerCase() === todo.title.toLowerCase()) {
        err = "Err";
        setError("Already exist");
      }
    });
    if (!err) {
      setTodos(() => {
        return [...todos, todo];
      });
      localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    }
    
  };
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {error && <p className="error">{error}</p>}
      <TodoList todos={todos} />
    </div>
  );
}


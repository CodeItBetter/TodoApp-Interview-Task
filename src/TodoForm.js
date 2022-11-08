import React, { useState } from "react";
import { nanoid } from "nanoid";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const todoHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const todos = {
      title: todo,
      id: nanoid()
    };
    addTodo(todos);
    setTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your todo here"
          onChange={todoHandler}
          value={todo}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
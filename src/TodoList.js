import React from "react";
import './TodoList.css';

const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return <p key={todo.id} style={{
            color: todo.color,
            fontSize: "1.25rem",
            marginBottom: "5px",
            
        }}>{todo.title}</p>;
      })}
    </div>
  );
};

export default TodoList;

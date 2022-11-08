import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id} style={{
            color: todo.color
        }}>{todo.title}</p>;
      })}
    </div>
  );
};

export default TodoList;

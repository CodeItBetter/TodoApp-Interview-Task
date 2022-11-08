import React from "react";

const TodoList = ({ todos }) => {
  //console.log(todos);
  let color = `#${Math.random().toString(16).slice(2,8)}`;
    console.log(color);
  return (
    <div>
      {todos.map((todo) => {
        return <p key={todo.id} style={{
            color: color
        }}>{todo.title}</p>;
      })}
    </div>
  );
};

export default TodoList;

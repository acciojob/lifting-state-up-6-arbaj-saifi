import React from "react";

const Child = ({ todos, handleClick }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            {todo.completed && (
              <button onClick={() => handleClick(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;

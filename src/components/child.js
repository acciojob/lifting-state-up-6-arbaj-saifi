import React from "react";

const Child = ({ todos, handleComplete }) => {
  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child;

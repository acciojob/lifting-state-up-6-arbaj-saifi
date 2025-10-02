import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./child";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Lifting State Up", completed: false },
    { id: 3, text: "Build a Project", completed: false },
  ]);

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <Child todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;

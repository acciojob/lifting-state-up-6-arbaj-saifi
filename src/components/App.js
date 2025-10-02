import React, { useState } from "react";
import Child from "./child";
import "./../styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Lifting State Up", completed: false },
    { id: 3, text: "Build a Project", completed: false },
  ]);

  const handleClick = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo))
    );
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <Child todos={todos} handleClick={handleClick} />
    </div>
  );
};

export default App;

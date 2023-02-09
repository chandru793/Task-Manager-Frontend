import React from "react";
import "./App.css";

//components
import Home from "./components/Home";
import TaskState from "./context/TaskState";

function App() {
  return (
    <TaskState>
      <div className="App">
        <Home />
      </div>
    </TaskState>
  );
}

export default App;

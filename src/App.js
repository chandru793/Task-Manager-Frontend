import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//components
import TaskState from "./context/TaskState";
import Sidebar from "./components/Sidebar";
import AddTasks from "./components/AddTasks";
import AllTasks from "./components/AllTasks";
import Dolater from "./components/Dolater";
import Completed from "./components/Completed";
import InProgress from "./components/InProgress";

function App() {
  return (
    <TaskState>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<AddTasks />} />
          <Route path="/alltask" element={<AllTasks />} />
          <Route path="/inprogress" element={<InProgress />} />
          <Route path="/dolater" element={<Dolater />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />
      </div>
    </TaskState>
  );
}

export default App;

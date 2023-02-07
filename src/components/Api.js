import axios from "axios";

//api to create new task
export const createTask = async (task) => {
  await axios.post("http://localhost:8080/api/v1/tasks", { name: task });
};

//api to get all tasks
export const getAllTasks = async () =>
  await axios.get("http://localhost:8080/api/v1/tasks");

//api to update a the completed
export const updateCompleted = async (id,completed) =>
  await axios.patch(`http://localhost:8080/api/v1/tasks/${id}`, {completed:completed });

//api to update a task name
export const updateTask = async (id,name,dolater) =>
  await axios.patch(`http://localhost:8080/api/v1/tasks/${id}`, { name:name,dolater:dolater });

//api to delete a task
export const deleteTask = async (id) =>
  await axios.delete(`http://localhost:8080/api/v1/tasks/${id}`);
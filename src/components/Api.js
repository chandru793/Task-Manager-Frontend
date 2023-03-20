import axios from "axios";

//api to create new task
export const createTask = async (task,description) => {
  await axios.post(`${process.env.REACT_APP_HOST_URL}/api/v1/tasks`, { name: task,description:description });
};

//api to get all tasks
export const getAllTasks = async () =>
  await axios.get(`${process.env.REACT_APP_HOST_URL}/api/v1/tasks`);

//api to update a the completed
export const updateCompleted = async (id,completed,dolater) =>
  await axios.patch(`${process.env.REACT_APP_HOST_URL}/api/v1/tasks/${id}`, {completed:completed,dolater:false});

//api to update a task name
export const updateTask = async (id,name,description,dolater) =>
  await axios.patch(`${process.env.REACT_APP_HOST_URL}/api/v1/tasks/${id}`, { name:name,dolater:dolater });

//api to delete a task
export const deleteTask = async (id) =>
  await axios.delete(`${process.env.REACT_APP_HOST_URL}/api/v1/tasks/${id}`);
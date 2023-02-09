import {
    TaskContext
} from "./TaskContext";
    
import { useState, useEffect } from "react";
import{getAllTasks} from '../components/Api'

const TaskState = props => {
    //Home
    const [allTasks, setAllTasks] = useState([]);
    const [task, setTask] = useState(``);
    const [toggle, setToggle] = useState([true, true, true]);

    const filteredTasks = allTasks.filter((task) => task.dolater === false && task.completed === false);
    const filteredDoLater = allTasks.filter((task) => task.dolater === true && task.completed === false);
    const filterCompleted = allTasks.filter((task) => task.completed === true);

    //Tasks
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        getAllTasks()
            .then(res => {
                console.log("effect")
                console.log(res.data.task);
                setAllTasks(res.data.task);
                console.log("allTasks", allTasks);
            }).catch(err => {
                console.log(err);
            });

    }, [allTasks]);

    return (
        <TaskContext.Provider value={{
            allTasks,
            setAllTasks,
            task,
            setTask,
            toggle,
            setToggle,
            filteredTasks,
            filteredDoLater,
            filterCompleted,
            show,
            setShow,
            edit,
            setEdit,
            handleClose,
            handleShow
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
export default TaskState;
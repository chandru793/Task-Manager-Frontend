import React from 'react'
import '../assets/css/Tasks.css'
import { useState } from 'react'

//components
import EditModal from './EditModal'

//api
import {
    deleteTask,
    updateCompleted
} from './Api'

const Tasks = ({ allTasks }) => {

    //----modal start----
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //----modal end----

    const handleChange = (id, completed) => {
        completed = !completed;
        updateCompleted(id, completed);
        window.location.reload();
        console.log(completed);
    }

    return (
        <div>
            <div className='taskContainer'>
                {allTasks.length > 0 ? allTasks.map((task) => {
                    return (
                        <div
                            key={task._id}
                            className='task'
                        >
                            <div className='taskInner'>
                                <div className='taskInnerLoop'>
                                    <input
                                        type='checkbox'
                                        className='checkbox'
                                        checked={task.completed}
                                        onChange={() => handleChange(task._id, task.completed)}
                                    />
                                    <p className='taskName'>{task.name}</p>
                                </div>
                                <div className='buttons'>
                                    <button className='editButton taskButton' onClick={() => {
                                        handleShow()
                                        setEdit(task)
                                    }
                                    }><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f7f879"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" /></svg></button>
                                    <button className='deleteButton taskButton' onClick={() => { deleteTask(task._id); window.location.reload() }}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#e2675a"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" /></svg></button>
                                </div>
                            </div>
                        </div>
                    )
                }
                ) : <p>No Tasks</p>}
            </div>
            

            {show ? (
                <EditModal show={show} handleClose={handleClose} edit={edit} />
            ) : null}
        
        </div>
    )
}

export default Tasks
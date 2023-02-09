import React, { useContext} from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Home.css'

//icons
import { BiChevronsRight, BiChevronsDown } from 'react-icons/bi'

//axios
import {
    createTask,
} from './Api'

//components
import Tasks from './Tasks'
import { TaskContext } from '../context/TaskContext'

const Home = () => {
    const {
        allTasks,
        task,
        setTask,
        toggle,
        setToggle,
        filteredTasks,
        filteredDoLater,
        filterCompleted
    } = useContext(TaskContext)

    const initialValues = () => ({
        task: task,
    })

    return (
        
            <div>
                <h1>Task Manager</h1>
                <Formik
                    initialValues={initialValues()}
                    onSubmit={(e, onSubmitProps) => {
                        console.log(e.task, e.completed)
                        setTask(e.task);
                        createTask(e.task);
                        console.log("Task Created");
                        onSubmitProps.resetForm();
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type='text'
                                value={values.task}
                                name='task'
                                placeholder='Add new task'
                                className='input'
                                autoFocus
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <button type='submit' className='submitButton'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 20 20" width="40px" fill="#FFFFFF" className='addsvg'><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" /></svg></button>
                        </form>
                    )}
                </Formik>

                {filteredTasks.length > 0 &&
                    <div>
                        <h2
                            styles={{ alignItems: "start", color: "#ffffff" }}
                            onClick={() => setToggle([!toggle[0], toggle[1], toggle[2]])}
                        >
                            In Progress {toggle[0] ? <BiChevronsDown /> : <BiChevronsRight />}
                        </h2>
                        {toggle[0] && <Tasks filtered={filteredTasks} />}
                    </div>
                }
                {filteredDoLater.length > 0 &&
                    <div>
                        <h2
                            styles={{ alignItems: "start", color: "#ffffff" }}
                            onClick={() => setToggle([toggle[0], !toggle[1], toggle[2]])}
                        >
                            Do Later {toggle[1] ? <BiChevronsDown /> : <BiChevronsRight />}
                        </h2>
                        {toggle[1] && <Tasks filtered={filteredDoLater} />}
                    </div>
                }
                {filterCompleted.length > 0 &&
                    <div>
                        <h2
                            styles={{ alignItems: "start", color: "#ffffff" }}
                            onClick={() => setToggle([toggle[0], toggle[1], !toggle[2]])}
                        >
                            Completed {toggle[2] ? <BiChevronsDown /> : <BiChevronsRight />}
                        </h2>
                        {toggle[2] && <Tasks filtered={filterCompleted} />}
                    </div>
                }
                {!allTasks && <p>No tasks found</p>}

            </div>
    )
}

export default Home
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import '../assets/css/Home.css'

//axios
import {
    createTask,
    getAllTasks
} from './Api'

//components
import Tasks from './Tasks'

const Home = () => {
    const [task, setTask] = useState(``);
    const [allTasks, setAllTasks] = useState([]);
    const [toggle, setToggle] = useState([true, false, false]);


    const filteredTasks = allTasks.filter((task) => task.dolater === false && task.completed === false);
    const filteredDoLater = allTasks.filter((task) => task.dolater === true && task.completed === false);
    const filterCompleted = allTasks.filter((task) => task.completed === true);


    const initialValues = () => ({
        task: task,
    })

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

    }, []);

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
                    window.location.reload();
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
                        styles={{ alignItems: "start", color: "#fff" }}
                        onClick={() => setToggle([!toggle[0], toggle[1], toggle[2]])}
                    >
                        In Progress:-
                    </h2>
                    {toggle[0] && <Tasks filtered={filteredTasks} />}
                </div>
            }
            {filteredDoLater.length > 0 &&
                <div>
                    <h2
                        styles={{ alignItems: "start", color: "#fff" }}
                        onClick={() => setToggle([toggle[0], !toggle[1], toggle[2]])}
                    >
                        Do Later:-
                    </h2>
                    {toggle[1] && <Tasks filtered={filteredDoLater} />}
                </div>
            }
            {filterCompleted.length > 0 &&
                <div>
                    <h2
                        styles={{ alignItems: "start", color: "#fff" }}
                        onClick={() => setToggle([toggle[0], toggle[1], !toggle[2]])}
                    >
                        Completed:-
                    </h2>
                    {toggle[2] && <Tasks filtered={filterCompleted} />}
                </div>
            }

        </div>
    )
}

export default Home
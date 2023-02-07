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


    const initialValues = () => ({
        task: task,
    })

    // const segmentSchema = Yup.object().shape({
    //     tasK: Yup.string().min(3, 'Too short!'),
    // });

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
                        {errors.task && touched.task ? <h1>{errors.task}</h1> : null}
                        <button type='submit' className='submitButton'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 20 20" width="40px" fill="#FFFFFF" className='addsvg'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg></button>
                    </form>
                )}
            </Formik>

            <Tasks allTasks={allTasks} setAllTasks={setAllTasks} />
        </div>
    )
}

export default Home
import React, { useContext } from 'react'
import "../assets/css/Addtasks.css"

import { TaskContext } from '../context/TaskContext'

//axios
import { createTask } from './Api'
import { Formik } from 'formik'

const AddTasks = () => {
  const {
    allTasks,
    task,
    setTask,
    description,
    setDescription,
  } = useContext(TaskContext)

  const initialValues = () => ({
    task: task,
    description: description,
  })
  return (
    <div className='outerAdd'>
      <div className='innerAdd'>
        <h1>Add Task</h1>
        <Formik
          initialValues={initialValues()}
          onSubmit={(e, onSubmitProps) => {
            console.log(e.task)
            setTask(e.task);
            console.log(e.description)
            setDescription(e.description);
            createTask(e.task, e.description);
            console.log("Task Created");
            onSubmitProps.resetForm();
          }}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                value={values.task}
                name='task'
                placeholder='Enter task'
                autoFocus
                onChange={handleChange}
              />
              <textarea
                type='text'
                value={values.description}
                name='description'
                placeholder='Description'
                onChange={handleChange}
                rows={10}
              />
              <button className='addbutton'>Add Task</button>
            </form>
          }
        </Formik>
      </div>
    </div >
  )
}

export default AddTasks
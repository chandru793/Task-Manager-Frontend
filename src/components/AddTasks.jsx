import React from 'react'
import "../assets/css/Addtasks.css"

const AddTasks = () => {
  return (
    <div className='outerAdd'>
      <div className='innerAdd'>
        <h1>Add Task</h1>
        <input type='text' name='task' placeholder='Enter task' />
        <textarea type='text' name='description' placeholder='Description' rows={10} />
        <div className="checkboxAdd">
          <input type='checkbox' name='DoLater' checked={false} />
          <label className='DoLaterLabel'>Do this task Later</label>
        </div>
      </div>
    </div>
  )
}

export default AddTasks
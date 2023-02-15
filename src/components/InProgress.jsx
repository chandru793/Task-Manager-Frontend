import React, { useContext } from 'react'
import '../assets/css/Home.css'

//components
import Tasks from './Tasks'
import { TaskContext } from '../context/TaskContext'

const InProgress = () => {
    const {
        filteredTasks,
    } = useContext(TaskContext)

    return (

        <div className='main'>
            <h1>In Progress</h1>
            {filteredTasks.length > 0 ?
                <Tasks filtered={filteredTasks} />
                : <p>No tasks found</p>
            }
        </div>
    )
}

export default InProgress
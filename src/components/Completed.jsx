import React, { useContext } from 'react'
import '../assets/css/Home.css'

//components
import Tasks from './Tasks'
import { TaskContext } from '../context/TaskContext'

const Completed = () => {
    const {
        filterCompleted
    } = useContext(TaskContext)

    return (

        <div className='main'>
            <h1>Completed Tasks</h1>
            {filterCompleted.length > 0 ?
                <Tasks filtered={filterCompleted} />
                :
                <p><i>No tasks found</i></p>
            }
        </div>
    )
}

export default Completed
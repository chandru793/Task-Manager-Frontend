import React, { useContext } from 'react'
import '../assets/css/Home.css'

//components
import Tasks from './Tasks'
import { TaskContext } from '../context/TaskContext'

const Dolater = () => {
    const {
        filteredDoLater
    } = useContext(TaskContext)

    return (

        <div className='main'>
            <h1>Do Later</h1>
            {filteredDoLater.length > 0 ?
                <Tasks filtered={filteredDoLater} />
                : <p><i>No tasks found</i></p>

            }
        </div>
    )
}

export default Dolater
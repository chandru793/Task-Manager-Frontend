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

const AllTasks = () => {
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

    return (
        
        <div className='main'>
            <h1>All Tasks</h1>
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

export default AllTasks
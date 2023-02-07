import React from 'react'
import { useState } from 'react'
import '../assets/css/EditModal.css'

//api
import { updateTask } from './Api';

const EditModal = ({ show, handleClose, edit }) => {
    console.log("edit", edit)
    const [edit1, setEdit1] = useState(edit.name);
    const [dolater, setdoLater] = useState(edit.dolater);

    const handleChange = () => {
        setdoLater(!dolater)
        console.log(dolater)
    }

    return (
        <div className='outerDiv' show={show}>
            <div className='outerDiv1'>
                <div className='outerDiv2'>
                    <div className='innerDiv'>
                        <div>
                            <button onClick={handleClose} className='closeButton'>X</button>
                            <h1>Edit Task</h1>
                            <div className='inputClass'>
                                <label for='task' className='label'>Task Name:</label>
                                <input
                                    type='text'
                                    name='task'
                                    className='editinput'
                                    autoFocus
                                    value={edit1}
                                    onChange={(e) => { setEdit1(e.target.value) }}
                                    placeholder='Task'
                                />
                                <div className='divDoLater'>
                                    <input
                                        type='checkbox'
                                        name='DoLater'
                                        className='DoLater'
                                        checked={dolater}
                                        onChange={() => { handleChange() }}
                                    />
                                    <label className='DoLaterLabel'>Do this task Later</label>

                                </div>
                            </div>
                            <button className='saveButton' onClick={() => { updateTask(edit._id, edit1, dolater); window.location.reload() }}>Save</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
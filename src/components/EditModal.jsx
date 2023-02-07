import React from 'react'
import { useState } from 'react'
import '../assets/css/EditModal.css'

//api
import { updateTask } from './Api';

const EditModal = ({ show, handleClose, edit, setEdit }) => {
    // console.log("edit", edit)
    // const [edit1, setEdit1] = useState(edit.name);
    // const [dolater, setdoLater] = useState(edit.dolater);

    const handleChange = () => {
        setEdit((e) => ({ ...e, dolater: !e.dolater }))
    }

    return (
        <div className='outerDiv' show={show}>
            <div className='innerDiv'>
                <div className='edit-heading'>
                    <h1>Edit Task</h1>
                    <button onClick={handleClose} className='closeButton'>X</button>
                </div>
                <div className='inputClass'>
                    <label for='task' className='label'>Task Name:</label>
                    <input
                        type='text'
                        name='task'
                        className='editinput'
                        autoFocus
                        value={edit.name}
                        onChange={(e) => { setEdit((tsk) => ({ ...tsk, name: e.target.value })) }}
                        placeholder='Task'
                    />
                    <div className='divDoLater'>
                        <input
                            type='checkbox'
                            name='DoLater'
                            className='DoLater'
                            checked={edit.dolater}
                            onChange={() => { handleChange() }}
                        />
                        <label className='DoLaterLabel'>Do this task Later</label>

                    </div>
                </div>
                <button className='saveButton' onClick={() => { updateTask(edit._id, edit.name, edit.dolater); window.location.reload() }}>Save</button>

            </div>
        </div>
    )
}

export default EditModal
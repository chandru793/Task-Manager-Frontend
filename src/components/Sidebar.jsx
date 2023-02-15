import React from 'react'
import '../assets/css/Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='outer'>
        <h2>TASK MANAGER</h2>
      <div className='inner'>
        <Link Link to="/" className='link'><h3>Add Task</h3></Link>
        <span className='line'></span>
        <Link Link to="/alltask" className='link'><h3>All Tasks</h3></Link>
        <span className='line'></span>
        <Link Link to="/inprogress" className='link'><h3>In Progress</h3></Link>
        <span className='line'></span>
        <Link Link to="/dolater" className='link'><h3>Do Later</h3></Link>
        <span className='line'></span>
        <Link Link to="/completed" className='link'><h3>Completed</h3></Link>
      </div>
    </div>
  )
}

export default Sidebar
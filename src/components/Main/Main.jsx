import React from 'react'
import './Main.css'
export const Main = () => {
  return (
    <div className='main'>
        <div className='sideMenu'>

        </div>
        <div className='taskMenu'>
            <h2>All Tasks</h2>
            <input type="text" id='task' name='task' placeholder="Add a new task inside 'All' category!" />
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import TaskItem from './TaskItem.jsx'

function TaskProgress() {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Ma première tache",  done: false},
        {id: 2, name: "Ma deuxième tache",  done: false}
    ])
  return (
    <>
        <TaskItem title='Tache En cours' items={tasks}  />  
    </>
  )
}

export default TaskProgress
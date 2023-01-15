import React, { useState } from 'react'
import TaskItem from './TaskItem.jsx'

function TaskDone() {
    const [tasks, setTasks] = useState([
        {id: 1, name: "Ma première tache", done:true},
        {id: 2, name: "Ma deuxième tache", done: true},
    ])
  return (
    <>
        <TaskItem title='Tache Fini' items={tasks} />  
    </>
  )
}

export default TaskDone
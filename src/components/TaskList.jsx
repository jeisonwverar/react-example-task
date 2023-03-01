
import TaskCard from "./taskCard";
import {useContext} from "react";
import{TaskContext} from '../context/TaskContext'
import React from "react";
function TaskList() {

  const {tasks}=useContext(TaskContext)

  if(tasks.length===0){
    return <h1 className="text-white text-4xl font-bold text-center">No se encontraron tareas.</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-2">
     {
      tasks.map((task)=>(
       <TaskCard task={task} key={task.id}/>
      ))
     }
      
    </div>
  )
}

export default TaskList;
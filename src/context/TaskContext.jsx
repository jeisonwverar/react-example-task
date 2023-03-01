import {createContext, useState, useEffect} from 'react';
import {tasks as data} from '../assets/db/tasks';
export const TaskContext = createContext();

export  function TaskContextProvider(props) {
   //estado de tareas get 
  const [tasks,setTaks]= useState([]);

  useEffect(()=>setTaks(data),[]);
  function createTask(task){
    //crea una copia del estado tasks cpn spreade operator y me asigna u nueva tarea 
    setTaks([...tasks,{
        title:task.title,
        id:new Date().getTime(),
        description:task.description
    }])
      
  }

  function deleteTask(taskId){
   setTaks(tasks.filter(task=>task.id !== taskId)) 

  }
  return (
    <TaskContext.Provider value={{
        tasks,
        deleteTask,
        createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}


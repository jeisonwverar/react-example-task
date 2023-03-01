import {useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskForm({}) {

  const [title, setTitle] = useState("");
  const [description,setDescription]= useState("");
  const {createTask} = useContext(TaskContext)
  //funcion para el evento submit
  const hadleSubmit=(e)=>{
    e.preventDefault();
   
    //funcion que viene desde app en el cual ingresamos un objeto
    createTask({
      title,
      description,
    })

    setTitle('')
    setDescription('')

  }

  return (
        <div className='max-w-md mx-auto'>
        
        <form onSubmit={hadleSubmit} 
        className='bg-slate-800 p-10 mb-4'>
          <h1 className=' text-2xl font-bold text-white mb-3'>Crea Tu Tarea</h1>
            <input className='bg-slate-300 p-3 w-full
            mb-2' placeholder='Escribe tu tarea'
            onChange={(e)=>setTitle(e.target.value)} value={title} autoFocus/>
            <textarea className='bg-slate-300 p-3 w-full
            mb-2' name="" id="" cols="20" onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
            <button className='bg-indigo-500 px text-white p-2 hover:bg-indigo-700 ' >
                Guardar
            </button>
        </form>
    </div>
  )
}

export default TaskForm
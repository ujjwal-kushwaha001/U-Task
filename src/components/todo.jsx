
import React, { useRef, useState, useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../index.css'

const todo = () => {

  const [todos, setTodos] = useState([]);
  const [todo, settodo] = useState('')

  
  useEffect(() => {
    let todosString = localStorage.getItem("Todos-item")
    
    if(todosString){
      let todos = JSON.parse(localStorage.getItem("Todos-item"))
      console.log(todos);
      
      setTodos(todos)
    }
  }, [])


  
 const saveToLS = ()=>{
    localStorage.setItem("Todos-item",JSON.stringify(todos))
  }



  const handleDelete = (e,id)=>{
   
   let index = todos.findIndex((e)=>{
     return e.id === id
     })

    let newTodos = todos.filter(i=>{
      return i.id !== id;
    });
    setTodos(newTodos)
    saveToLS()
  }

  
   const handleEdit = (e,id)=>{
    
    let t = todos.filter(i=>i.id === id)
     settodo(t[0].todo)

    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos)
    saveToLS()
  }


  const addTodo = ()=>{
    setTodos(too=>[...too, {id:uuidv4(), todo, isCompleted: false}])
    saveToLS()
    settodo("")
  }

  const handleChange= (e)=>{ 
    settodo(e.target.value)
  }

  const handleCheckBox = (e)=>{
   let id = e.target.name
   let index = todos.findIndex((e)=>{
     return e.id === id
     })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }
  

  // useEffect(()=>{},[saveToLS()])

  return (
    <div className='todo-container bg-violet-200 mx-auto my-10 w-[70vw] min-h-[750px] rounded-lg px-3 py-5 max-[700px]:w-[90vw]'>
      <div className="header-title text-2xl font-medium text-center">U Task - Manage Your All Todos in One Place</div>
        <h1 className='text-[20px] font-bold mt-5 ml-3'>Add a Todo</h1> 
      <div className="title-addTodo flex justify-center items-center ml-2.5 max-[450px]:flex-col">
       <input onChange={handleChange} value={todo} className='todo-input w-[80%] h-[30px] rounded-full px-3 bg-white outline-0 mt-2 max-[450px]:w-[100%]' type="text"/>
       <div onClick={addTodo} className="save-todo flex items-center justify-center w-[13%] h-[32px] rounded-full mt-2 mx-2 px-3 text-white bg-purple-500 cursor-pointer text-center max-[450px]:w-[30vw]">Save</div>
      </div>
      {/* <div className="finished-checkbox flex items-center gap-1.5 pt-4.5 pl-3.5">
        <input type="checkbox"/>
        <p>show finished</p>
      </div> */}
      <hr className='mt-6 mx-auto w-[70%] bg-gray-100'/>
      <div className="your-todo">
        <h1 className='text-[20px] font-bold mt-5 ml-3'>Your Todos</h1>
{todos.length==0 && <div className='ml-4 mt-5 text-gray-800'>No Todos to Display</div>}

{todos.map((item)=>{
    
    console.log(item)
       return <div key={item.id} className="todo-text flex justify-between my-5">
          <div className="flex gap-3 text-left">
          <input onChange={handleCheckBox} name={item.id} type="checkbox" value={item.isCompleted} />
          <p className={item.isCompleted?"line-through":""}>{item.todo}</p>
          </div>
          <div className="btn-todo">
            <button onClick={(e)=>handleEdit(e, item.id)} className=' bg-purple-500 mx-2 px-1 rounded-md cursor-pointer'><i className="fa-solid fa-pen-to-square invert"></i></button>
            <button onClick={(e)=>{handleDelete(e, item.id,)}} className=' bg-purple-500 mx-2 px-1 rounded-md cursor-pointer'><i className="fa-solid fa-trash invert"></i></button>
          </div>
        </div>
})}

      </div>
    </div>
  )
}

export default todo

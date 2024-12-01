import React, { useRef, useState } from 'react'
import logo from '../todo-app-assets/assets/todo_icon.png';
import dlt from '../todo-app-assets/assets/delete.png';
import ToDoList from './ToDoList';
const ToDo = () => {
 const[todolist,setTodolist]=useState([]);
  const inputRef=useRef(null);


  const Add =()=>{
const inputtext=inputRef.current.value;


if(inputtext==="")
  return;

const newtodo={

id:Date.now(),
text:inputtext,
isComplete:false,
}

setTodolist((prev)=>[...prev,newtodo]);
inputRef.current.value="";

  }

  const deletetodo=(id)=>{

setTodolist(todolist.filter((todo)=>todo.id!==id));
  }

const toggle = (id) => {
  setTodolist((prev) =>
    prev.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    )
  );
};

  return (
    <div className='bg-white p-7 rounded-lg place-self-center w-11/12 max-w-md flex flex-col min-h-[550px]'>
    <div className='flex items-center mt-7 gap-2'>
        
        <img src={logo} className='w-8'/>
        <h1 className='font-semibold text-3xl'>TODO</h1>

    </div>
    <div className='my-7 flex items-center rounded-full bg-gray-200' >

        <input ref={inputRef} placeholder='Add a todo' className='bg-transparent border-0 outline-0 px-6 py-2 flex-1 placeholder:text-slate-600'/>
         <button    onClick={Add} className=' border-none rounded-full bg-orange-600 w-32 h-14 flex justify-center items-center text-white'>ADD +</button> 
        

    </div>
    <div>

    {todolist.map((item,index)=>{

      return < ToDoList  key={index} text={item.text}  deletetodo={deletetodo} id={item.id} toggle={toggle} isComplete={item.isComplete}/>
    })}
    
  </div>
    </div>

  )
}

export default ToDo;

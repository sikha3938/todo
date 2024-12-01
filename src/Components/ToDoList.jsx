import React from 'react'
import tick from'../todo-app-assets/assets/tick.png';
import not_tick from'../todo-app-assets/assets/not_tick.png';
import dlt from'../todo-app-assets/assets/delete.png';
const ToDoList = ({text,id ,deletetodo, toggle, isComplete }) => {
  return (
    <div className='flex items-center '>
    <div onClick={ ()=>
       toggle(id)} className={`flex gap-4 items-center flex-1  cursor-pointer  ${isComplete?"line-through":""}` }>
<img src={isComplete?tick:not_tick} className='w-5'/>
<p>{text}</p>


    </div>
    <div className='w-5 flex items-center'><img src={dlt}  onClick={()=>deletetodo(id)}  /></div>
    </div>
  )
}

export default ToDoList

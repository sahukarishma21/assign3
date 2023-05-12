import React, { useState } from 'react'
import './Todolist.css';
function Todolist() {
    const[task,setTask]=useState("");
    const[tasklist,setTasklist]=useState([]);
    const handlechanging= (e) => {
        setTask(e.target.value);
    };
    const AddTask=() => {
      if(task!==""){
        const taskDetails= {
            id:Math.floor(Math.random()*1000),
            value: task,
            isCompleted:false,
        }
        setTasklist([...tasklist,taskDetails])
      }

    }
    const deletetask= (e, id) =>{
        e.preventDefault();
        setTasklist(tasklist.filter((t) => t.id != id));
    };
    const taskcompleted=(e,id) =>{
          e.preventDefault();

        const element =tasklist.findIndex(ele=>ele.id==id);
        const newTasklist=[...tasklist]

        newTasklist[element] ={
            ...newTasklist[element],
              isCompleted:true,
    }
     setTasklist(newTasklist);
    }
  return (
  <div className='todo'>
    <input type='text'
     name='text' 
     id='text'
     onChange={e => handlechanging(e)}
      placeholder='Add task here ...'
      />
    <button className='add-btn'onClick={AddTask}>Add</button>
  <br/>
  {tasklist!== [] ?(
  <ul>
    {tasklist.map((t)=>(
       <li className={t.isCompleted ? "crossText":"listitem"}>
        {t.value}

        <button className='completed'onClick={e =>taskcompleted(e,t.id)}>Completed</button>
        
        <button className='delete'onClick={e =>deletetask(e,t.id)}>Delete</button>
        
       </li> 
       
        ))}
  </ul>
  
 ): null}
  </div>
  );
}

export default Todolist






//todo

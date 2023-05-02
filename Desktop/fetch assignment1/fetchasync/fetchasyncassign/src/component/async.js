import { useState } from 'react';
import './async.css';
export default function Asynsolution() {
    const[data,setData]=useState([])


   const getName=() =>{
    fetch('https://reqres.in/api/users/')
  .then((response) => response.json())
  .then((json) => {
  console.log(json);
  setData(json);
   });
   };
   

   return(
    <div className='App'>
        <h4 style={{color:'blue'}}>My API</h4> 
        
        <button onClick={getName}>fetch API</button>
    
       <pre>{JSON.stringify(data,null,2)}</pre> 
    </div>
   )
}
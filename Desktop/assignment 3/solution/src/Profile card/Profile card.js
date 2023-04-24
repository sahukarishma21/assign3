import React,{useState} from 'react'
import './Profile card.css'
function Card(){
    function Handclick(){
        alert("Sharon")
   
        
        
       }
   
   
    const [name,setName]= useState("Sharon Onyinye");
    const [job,setJob]= useState("UI/UX Designer");
    const [about,setAbout]= useState("Sharon is creating wonderful content for beginner, junior and aspiring UI and UX designers new to the field that include portfolio, career and interview preparation advice");
    const [first,setFirst]= useState("click me");
    const [second,setSecond]= useState("see more ");
    const [third,setThird]= useState("click here");
    return(
        <div className='card'>
            <div calssName='upper-container'>
                <div className='image-container'>

                
                 
                    
                  
                
                </div>
            </div>
            <div className="lower-container">
                < img src="https://designerup.co/blog/content/images/2021/10/8-1.png"alt='' height="200px" width="200px" borderRadius="400px"/>
                <h4>{ job }</h4>
                <h2>{ name }</h2>
                <p>{ about }</p>
                <button className='clickbtn' onClick={Handclick}>first</button>
                <button className='clickbtn' onClick={Handclick}>second</button>
                <button className='clickbtn' onClick={Handclick}>third</button>
               

                </div>
         
          

        </div>
    )
}
export default Card
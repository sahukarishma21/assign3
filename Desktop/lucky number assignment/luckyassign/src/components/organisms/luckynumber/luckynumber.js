import {useState } from "react";
import Button from '../../atoms/button/button'
import './luckynumber.css'
export default function Luckynumber(){
    const [number, setNumber] = useState()

    
    function handleNumber (event) {
        setNumber(event.target.value)
    }
     
    function Submit() {
        if(number<8){
            alert('you guessed a smaller number')
            return 
        }else if(number>8){
            alert('you guessed a bigger number')
            return 

        }else if(number==8){
            alert('congratulations you guessed the right number')
            return

        }else if(!number==0){
            alert('none')
            return
        }
    


    }


        return (
            <div className="luckynumber">
                <h4>Enter Lucky Number</h4>
                <input className="inputType" placeholder="Guess lucky number" onChange = {handleNumber}/>
                <Button cuttonBtnStyle = 'submitBtn' clickFunction = {Submit}/>
            </div>
        )
    }




    //luckynum
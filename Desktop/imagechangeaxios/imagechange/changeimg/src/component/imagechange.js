import { useState } from "react"
import axios from "axios"

export default function Imagechange() {
const [img, setImg] = useState('https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

async function handalClick(){
 const res= await axios.get('https://dog.ceo/api/breeds/image/random')
  setImg(res.data.message)
 }


    return (
        <div>

        <h1>Change Image</h1>
      
<button onClick={handalClick} >Click Me</button>

       <img src={img} width='200' height='200'/>
       
        </div>
    )
    }



    //changeimage
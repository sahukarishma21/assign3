import { useEffect, useState } from 'react';



export default function Fetchassyn() {
  const [image , setImage] = useState('https://images.pexels.com/photos/6072468/pexels-photo-6072468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  async function getDog () {

    try{
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImage(data.message)
    }
    catch(error){
      console.log('i am from catch' ,error)
    }


  }
  useEffect(() =>{
    getDog();
  });

  

  return (
    <div className="App">
      <img 
        src={image}
        height={'500px'}
        width={'400px'}
        alt='dog image'
      />

      <button 
     
      onClick = {getDog}
      >Get Dog</button>

    </div>
  );
}
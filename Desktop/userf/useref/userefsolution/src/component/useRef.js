import { useEffect, useRef, useState } from "react"
import './userRef.css'

export default function MyComponent() {

    const inputRef = useRef(null)


    useEffect(()=> {
    
    },[])
    
    function handleClick () {
        inputRef.current.click()
    }
    return (
        <>
          <div className="App">
          <button onClick={handleClick}>Upload Image</button>
          <input ref={inputRef} type="file" />
          </div>
        </>
      

  )
}

//useref
import { Fragment, useState } from 'react'
import './Form.css'
export default function Form () {
    const [name , setName] = useState('Karishma')
    function handleName(event) {
        setName(event.target.value)
    }
    function Submision () {
        setName(name==='Karishma'?'**':'Karishma')
    }
    return (
        <Fragment>
            <input
            className='inputTag'
            placeholder='name'
            onChange={handleName}

        />
        <button onClick={Submision}>
            Submit
        </button>
        <h1>My name is {name}</h1>
       </Fragment>
        )

    }
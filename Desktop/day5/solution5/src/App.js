import logo from './logo.svg';
import './App.css';
import{useState} from 'react'

function App() {
  const[count,setCount]=useState(0)
  function handleclick(){
    const newCount=count+1
    setCount(newCount)

  }
  function handlingclick(){
    const newOne=count-1
    setCount(newOne)
  }

  return (
    <div className="App">
      <h4>count is:</h4>
      <h4>{count}</h4>
      <h1>{count}</h1>
      <button onClick={handleclick}>Increase the count</button>
      <button onClick={handlingclick}>Decrease the count</button>
  
      
    </div>
  );
}

export default App;
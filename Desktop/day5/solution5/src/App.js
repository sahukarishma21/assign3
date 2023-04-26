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
    if (count > 0) {
    const newOne=count-1
    setCount(newOne)
  }
  }
  return (
    <div className="App">
      
      <h1 style={{color:'red'}}>Increase and Decrease Count</h1>
      <h1 style={{color:'purple'}}>Count: {count}</h1>
      <button onClick={handleclick}>Increase the count</button>
      <button onClick={handlingclick}>Decrease the count</button>
  
      
    </div>
  );
}

export default App;
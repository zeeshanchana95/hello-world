import React, {useState} from 'react'
import './App.css';

function countInitial(){
  console.log("run function")
  return 4
}

function App() {

  const [count, setCount] = useState(()=>countInitial()) //run one time
  
  function increment(){
    setCount(nextCount => nextCount + 1) //useful because it each time take updated value but no same value when this function runs first time
  }

  function decrement(){
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span> 
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;

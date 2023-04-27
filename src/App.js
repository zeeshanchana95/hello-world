import React, {useState} from 'react'
import './App.css';

function countInitial(){
  console.log("run function")
  return 4
}

function App() {

  const [count, setCount] = useState(4) //run one time
  const [theme, setTheme] = useState("red")
  

  function increment(){
    setCount(prevCount => prevCount + 1)
    setTheme("blue")
  }

  function decrement(){
    setCount(nextCount => nextCount + 1) //useful because it each time take updated value but no same value when this function runs first time
    setTheme("red")
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}{theme}</span> 
      <button onClick={increment}>+</button>
      
      
    </>
  );
}

export default App;

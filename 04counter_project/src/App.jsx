import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter =5
  const addValue = () =>{
    if(counter <20){
      setCounter(counter+1)
    }
  }

  const subValue=() =>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  let [counter,setCounter]= useState(15)

  return (
    <>
     <h1> chai or react </h1>
     <h2>counter value :{counter} </h2>

     <button onClick={addValue}>add value</button>
     <br />
     <button onClick={subValue}  >decrease value</button>
     <h2>{counter}</h2>
    </>
  )
}

export default App

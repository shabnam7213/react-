import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// why we need hooks = Hooks allow functional components to use state,
//  lifecycle features, and other React capabilities.

// Hooks allow us to use state and other React features inside functional components without writing class components. 
// They make code simpler,reusable, and easier to manage.
function App() {

// make a application which has a counter and two buttons one for adding value and another for removing value from counter


  // let counter=15
  const[counter,setCounter]=useState(15)

   const addValue=()=>{
    // if(counter<20){
    // setCounter(counter+1)

    // how to update state value multiple times in one function
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    }
    // console.log("clicked", counter)
  //  counter=counter+1
 
    
   

   const removeValue=()=>{
    // if(counter>0){
    // console.log("removed", counter)
    // counter=counter-1
    setCounter(counter-1)}

   

  
  return (
    <>
    <h1>
      shabnam and react
    </h1>
    <h2>
      counter value: {counter}
    </h2>
    <button onClick={addValue}>
      add value{counter}
    </button ><br/>
    <button onClick={removeValue}>
      remove value{counter}
    </button>
  
    </>
  )
 
}

export default App



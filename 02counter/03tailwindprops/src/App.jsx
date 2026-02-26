import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.'

function App() {
 
  const [count, setCount] = useState(0)
let myObj={
  username:"shabnam",
  age:43
}

let myArr=[1,2,3]
  return (
   <>
   <h1 className="text-3xl font-bold ">
    Hello world!
   </h1>

   <Card  userName="react aur code" someObj={myObj} myArr={myArr}/>
    <Card  userName="vitesh" />
    </>
  )
}

export default App

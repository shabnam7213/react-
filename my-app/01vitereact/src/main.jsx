import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Shabnam from './Shabnam'
import React from 'react'


function Myapp(){
  const username="shabnam"
  return(
    <div>
      <h1>Hello Shabnam Singh!{username}</h1>
    </div>
  )
}
const anotherElement =(
  <a href="https://www.google.com/" target="_blank">
    click me to visit google
  </a>
)
const anotherUser="shabnam singh"
const reactElement= React.createElement(
'a',
{href:'https://www.google.com/',target: '_blank'},
'click me to visit google',
anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
  {reactElement}
  </StrictMode>,
)

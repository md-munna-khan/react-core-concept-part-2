import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import TeamPlayer from './team'
import Users from './Users'
import Friends from './friends'
import Friend from './friend'

function App() {
  const [count, setCount] = useState(0)

  
function handleClick (){
alert("button clicked")
}

const handleClick2 = ()=>{
  alert("handle click-2")
}
const clickMe = ()=>{
  alert("thank you")
}

const addFive = (number)=>{
alert(number + 10)
}
  return (
    <>
   
      <h3>React core concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <TeamPlayer></TeamPlayer>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click here</button>
      <button onClick={clickMe}>clicked button</button>
     <button onClick={()=>{alert("fourth button clicked")}}>fourth click</button>
   <button onClick={ ()=> addFive(5)}>five</button>
    </>
  )
}

export default App

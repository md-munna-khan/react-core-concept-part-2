import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const  handleClick = ()=>{
const newCount = count + 1;
setCount(newCount)
    }

    const handleReduce = ()=>{
const newCount = count -1;
setCount(newCount)
    }

    return (
        <div style={{border:"2px solid red"}}>
            <h3> counter:{count}</h3>
            <button onClick={handleClick}>Counter</button>
            <button onClick={handleReduce}>reduce</button>
        </div>
    )
}
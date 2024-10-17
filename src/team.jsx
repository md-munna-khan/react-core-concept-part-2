import { useState } from "react"

export default function TeamPlayer (){
const [ team,setTeam] = useState(20)

const addPlayer =()=>{
const newTeam = team + 1;
setTeam(newTeam)
}

const removePlayer =()=>{
    setTeam(team - 1)
}
const teamStyle={
border:"2px solid blue",
margin: "20px",
padding: "20px",
borderRadius: "10px"
}
    return (
        <div style={teamStyle}> 
            <h3>Player:{team} </h3>
            <button onClick={addPlayer}>Add</button>
            <button onClick={removePlayer}>Remove</button>
        </div>
    )
}
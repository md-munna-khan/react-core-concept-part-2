import { useEffect, useState } from "react"

export default function Users(){

    const [user,setUser] = useState([]);

    useEffect (()=>{
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(res=>res.json())
.then(data=>setUser(data))

    },[])
    return (
        <div>
            <h3>users:{user.length}</h3>
        </div>
    )
}

/**
 * 1.state to hold data
 * 2. use effect with dependency array
 * 3.use fetch to load data
 * 4. set loaded data to state
 */
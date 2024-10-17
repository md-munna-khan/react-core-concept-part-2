export default function Friend ({college}){
  const {name, email} =college
    return(
        <div style={{border:"2px solid red"}}>
            <h3>name:{name}</h3>
            <h3>email:{email}</h3>
        </div>
    )
}
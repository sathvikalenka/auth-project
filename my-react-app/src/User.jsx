import { useEffect, useState } from "react";
function User(){
    const[data,setdata]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/user").then(res=>res.json()).then(data=>setdata(data));
    },[]);
    return(<div>
    <h1>user list</h1>
    {data.map((u)=>(
        <h1 key={u._id}>{u.username}</h1>
    ))}
    </div>)
}
export default User;
import React,{useState} from "react";
function Todo(){
const [item,setitem]=useState("");
const [list,setlist]=useState([])
const chnaged=(e)=>
{
setitem(e.target.value);
} 
const clicked=()=>{
setlist([...list,item])
}
const deleted=(index)=>{
const newlist=list.filter((_,i)=>i!==index);
setlist(newlist);
}
return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <h1>📝 To-Do List</h1>
        <input style={{padding:"8px", width:"200px"}} type="text" value={item} onChange={chnaged} />
        <button onClick={clicked}>ADD</button>
        {
            list.map((items,index)=>(
                <div style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
                width:"300px",
                margin:"10px auto",
                border:"1px solid #ccc",
                padding:"10px",
                borderRadius:"5px"
              }}>
                <h2 key={index}>{items}</h2>
               <button  style={{
                  background:"red",
                  color:"white",
                  border:"none",
                  padding:"5px 10px",
                  cursor:"pointer"
                }} onClick={()=>deleted(index)}>delete</button>
               </div>
            ))
        }
    </div>
)
}
export default Todo;
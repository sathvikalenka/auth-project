//usestate
/*import React,{useState} from "react";
function Prac(){
const[count,setCount]=useState(0);
return(
    <div>
    <h1>count</h1>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>click</button>
    </div>
);
}
export default Prac;*/
//prop
/*
import React,{useState} from "react";
function Prac(prop){
return(
    <div>
<h1>hello {prop.name} your age is{prop.age}</h1>
</div>
);
}
export default Prac;
*/
//map,style
/*
import React,{useState} from "react";
function Prac(){
    const style={
        color:"red",
           fontSize:"55px"
    }
    const items=["banana","apple","mango"];
    return(
<div>
    <ul style={style}>{items.map((items,index)=>(<li key={index}>{items}</li>))}
</ul>
</div>
    );
}
export default Prac;*/
//ifstatement
/*import React,{useState} from "react";
function Prac(){
const s=true;
if(s){
    return(
        <h1>true</h1>
    )
}
else{
    return(
        <h1>false</h1>
    )
}
}

    export default Prac;
    */
   /*
import React,{useState} from "react";
function Prac(){
const s=false;
return(
    <div>{s?(<h1>true</h1>):(<h1>false</h1>)}
    </div>)
}  
export default Prac;*/
/*
import React,{useState} from "react";
function Prac(){
    const greet=true;
    return(
<div>
    {greet&&<h1>hello</h1>}
</div>
    )
}
export default Prac;
*/
//navbar
/*
import React,{useState} from "react";
function Prac(){
    const style={
        nav:{
              backgroundColor:"black",
            color:"white",
            padding:"20px",
            display:"flex",
            flexDirection:"column", 
            alignItems:"center"
        }
    }
 return(   <nav style={style.nav}>
<h2>
    MY WEBSITE
</h2>
<div>
    <span style={{marginRight:"20px"}}>HOME</span>
    <span style={{marginRight:"20px"}}>
        ABOUT
    </span>
    <span>CONTACT</span>
</div>
    </nav>)
}
export default Prac;*/
/*
import React,{useState} from "react";
import mylove from "./images/mylove.jpg";
function Prac(){
return(
    <div>
        <img src={mylove} width="200"></img>
    </div>
)
}
export default Prac;*/
/*
import React, { useState } from "react";
function Prac(){
const desc="histogram is basically used to represent data provided in aform of some groups.It is accurate method for the graphicalrepresentation of numerical data distribution.It is a type of barplot where X-axis represents the"
 const[showfull,setshowfull]=useState(false);
 return(<div>
 <p>{showfull?(desc):(desc.substring(0,60)+"...")}</p>
 <button onClick={()=>setshowfull(!showfull)}>{showfull?"showless":"showmore"}</button>
</div>);
}
export default Prac;
*/
/*
import React from "react";
import { useState } from "react";
function Prac(){
    const[namee,setname]=useState("")
     function handlechange(event){
           setname(event.target.value)
        }
  return(  <div>
        
    <input type="text"onChange={handlechange} placeholder="enter name"></input>
    <h1>hello {namee}</h1>
    </div>);
}
export default Prac;*/
/*
import React from "react";
import { FaBeer } from "react-icons/fa";
function Prac(){
    return(
        <div>
            <h1>Lets drink <FaBeer /></h1>
        </div>
    );
}

export default Prac;*/
//events
/*
import React from "react";
import Pra from "./Pra.jsx";
function Prac(){
    const click=()=>{
        alert("button clicked")
    }
    const change=(e)=>
    {
     console.log(e.target.value)
    }
    
   return(
    <div>
        <button onClick={click}>click me</button>
       <button onDoubleClick={click}>click me</button>
    <input onChange={change}/>
    <Pra name="sathvika" age="20" />
    </div>
    );
}
export default Prac;
*/
// keys and lists
/*
import React from "react";
function Prac(){
    const student=[
       { id:"1", name:"sathvika"},
       { id:"2", name:"rup"},
       { id:"3", name:"thulasi"}
    ]
    const aplha=["a","b","c","d"];
    return(
        <div>
<div>{
    aplha.map((item,index)=>(
        <h1 key={index}>
            {item}</h1>
    ))}
    </div>
    <div>
    {
        student.map((students)=>(
            <h1 keys={students.id}>{students.name}</h1>
        ))
    }
</div>
 </div>
    );
   
}
export default Prac;

import React from "react";
function Prac(){
    const student=[
        {id:1,name:"sathvika",class:"cse-3" },
         {id:2,name:"rupa",class:"cse-3" },
          {id:3,name:"thulasi",class:"cse-3" },
           {id:4,name:"bm",class:"cse-3" }
    ];
    return(
        
            <div>
                {
                    student.map((stude)=>(
                        <h1 key={stude.id}>name:{stude.name}</h1>
                    )
                    )
                }
            </div>
        
    );

}
export default Prac;*/
//use state
/*
import React, {useState} from "react";
function Prac(){
    const[value,setvalue]=useState(0);
    const[text,settext]=useState("");
    const[list,setlist]=useState([1,2,3])
    const[obj,setobj]=useState({
        id:1,
        name:"sathvika",
        age:20
    })
    const clicked=()=>{
        setvalue(value+1)
    }
    const decclicked=()=>{
        setvalue(value-1)
    }
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={clicked}>increment</button>
            <button onClick={decclicked}>decrement</button>
            <input onChange={(e)=>{settext(e.target.value)}}/>
            <h1>{text}</h1>
            <input type="number" onChange={(e)=>{
             setlist([...list,e.target.value]);
            }}/>
            {
            list.map((item,index)=>(
                <h1 keys={index}>{item}</h1>
            )

            )
        }
        <input type="number" onChange={(e)=>{
             setobj({...obj,age:e.target.value});
            }}/>
         <h1>
              name: {obj.name}, age: {obj.age}
            </h1>

        </div>
    )
}
export default Prac;*/
/*
import React,{useState} from "react";
function Prac(){
    const[nameee,setname]=useState({
        name:"",
        age:""
    });
    const [list,setlist]=useState([]);
    const changed=(e)=>{
        setname({...nameee,[e.target.name]:e.target.value})
    }
    const clicked=()=>{
            setlist([...list, nameee]);
    }
    return(
        <div>
          name:  <input type="text" name="name"  value={nameee.name} onChange={changed}/>
          age:  <input type="number" name="age"  value={nameee.age} onChange={changed}/>
          <button onClick={clicked}>submit</button>
          {
            list.map((item,index)=>(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                    </div>)
            )
          }
        </div>
    )
}
export default Prac;*/
/*
import React,{useState} from "react";
function Prac(){
    const[email,setemail]=useState("");
    const changed=(e)=>
    {
setemail(e.target.value)
    }
    const clicked=()=>{
if(email.includes("@")){
    alert("valid email")
}
else{
    alert("invalid email")
    setemail("");
}}
    
    return(
        <div>
            <input type="text" onChange={changed}/>
            <button onClick={clicked}>submit</button>
        </div>
    )
}
export default Prac;*/
//implement fecth
/*
import React,{useState,useEffect} from "react";
function Prac(){
const [item,setitem]=useState([]);
useEffect(()=>{
fetch("http://localhost:5000/jobs").then(res=>res.json()).then(data=>setitem(data));
},[])
return(
    <div>
        {
            item.map((items)=>(
                <h1 key={items.id}>{items.company}</h1>
            ))
        }
    </div>
)
}
export default Prac;*/
//useeffect search
/*
import React,{useState,useEffect} from "react";
function Prac(){
const [item,setitem]=useState("");
const [count,setcount]=useState([])
useEffect(()=>{
fetch("http://localhost:5000/jobs").then((res)=>res.json()).then((data)=>{
       
    setcount(data)});
},[])
const filtered=count.filter((itemss)=>{
 return itemss.company.toLowerCase().includes(item.toLowerCase())
})
return(
    <div>
        <input type="text" onChange={(e)=>{setitem(e.target.value)}} />
        {
            filtered.map((items)=>(
                <h1 key={items.id}>{items.company}</h1>
            ))
        }
    </div>
)
}
export default Prac;*/
//useeffect timer using setinterval
/*
import React,{useState,useEffect} from "react";
function Prac(){
const [count,setcount]=useState(0);
const [run,setrun]=useState(false);
useEffect(()=>{
    let timer;
    if(run){
   timer= setInterval(()=>{
    setcount((prev)=>prev+1);
    },1000);
}
return()=>{
    clearInterval(timer);
};
},[run]);
return(<div style={{ textAlign: "center", marginTop: "50px" }}>
    
    <h1>⏱ Timer: {count} sec</h1>
    <button onClick={()=>{setrun(true)}}>start</button>
    <button onClick={()=>{setrun(false)}}>stop</button>
    <button onClick={()=>{ setcount(0);
        setrun(fasle);}}>reset</button>
</div>)
}
export default Prac;*/
//using axios
/*
import React,{useState,useEffect} from "react";
import axios from "axios";
function Prac(){
const [item,setitem]=useState([]);
useEffect(()=>{
axios.get("http://localhost:5000/jobs").then(res=>setitem(res.data));
},[])
return(
    <div>
        {
            item.map((items)=>(
                <h1 key={items.id}>{items.company}</h1>
            ))
        }
    </div>
)
}
export default Prac;*/
//use async and await in axios
/*
import React,{useState,useEffect} from "react";
import axios from "axios";
function Prac(){
const [item,setitem]=useState([]);
useEffect(()=>{
async function cal(){
const res= await axios.get("http://localhost:5000/jobs");
 setitem(res.data);}
cal();
},[])
return(
    <div>
        {
            item.map((items)=>(
                <h1 key={items.id}>{items.company}</h1>
            ))
        }
    </div>
)
}
export default Prac;*/
//use async and await in fetch 
/*
import React,{useState,useEffect} from "react";
function Prac(){
const [item,setitem]=useState([]);
useEffect(()=>{
    const t=async()=>{
     const res=await fetch("http://localhost:5000/jobs");
     const data=await res.json();
     setitem(data);
    }
t();
},[])
return(
    <div>
        {
            item.map((items)=>(
                <h1 key={items.id}>{items.company}</h1>
            ))
        }
    </div>
)
}
export default Prac;*/
//implement post 
/*
import React,{useState} from "react";
function Prac(){
    const[item,setitem]=useState({
        id:"",
    title: "",
    company: "",
    salary:"",
    location:"",
    });
    const [s,sets]=useState([]);
const changed=(e)=>{
setitem({...item,[e.target.name]:e.target.value});
};
const clicked=async ()=>{
    const res=await fetch("http://localhost:5000/jobs",{
        method:"POST",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(item)
    })
    ;
const data=await res.json();
sets([...s,data]);
setitem({
      title: "",
      company: "",
      salary: "",
      location: "",
    });
};

return(
    <div>
        id:
<input  name="id" value={item.id} onChange={changed}/>
title:
<input  name="title" value={item.title} onChange={changed}/>
comapany:
<input  name="company" value={item.company} onChange={changed}/>
salary:
<input  name="salary" value={item.salary} onChange={changed}/>
location:
<input  name="location" value={item.location} onChange={changed}/>
<button onClick={clicked}>add</button>
{
    s.map((items)=>(
        <h1 key={items.id}>{items.company}</h1>
    ))
}
    </div>
)}
export default Prac;*/
//useing error handling error loading

/*
import React,{useState,useEffect} from "react";
function Prac(){
const[s,sets]=useState([]);
const[load,setload]=useState(true);
const[error,seterror]=useState(null);
useEffect(()=>{
    const f=async ()=>{
        try{
            setload(true);
        const res=await fetch("http://localhost:5000/jobs");
        if(!res.ok){
            throw new Error("ERROR OCCURED");
        }
        const data=await res.json();
        sets(data)
    }
    catch(err){
        seterror(err.message)
    }
    finally{
        setload(false)
    }}
    f()
    },[]);
    return(
        <div>
{error&&<h1>{error}</h1>}
{load&&<h1>loading....</h1>}
{!load&&!error&&s.map((j)=>(
    <h1>{j.company}</h1>
))}
        </div>
    )
}
export default Prac;
*/
//connect backend with rout,js
/*
import React,{useState,useEffect} from "react";
function Prac(){
    const[users,setusers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:2000/user").then(res=>res.json()).then(data=>
            setusers(data));
    },[]);
    return(
        <div>
          {
            users.map((item)=>(
                <h1 key={item.id}>{item.namee}</h1>
            ))
          }

        </div>
    )
}
export default Prac;*/
//req.params--id rout.js,req.query,req.body,res.send,res.json,res.statusin book
/*
import React,{useState,useEffect} from "react";
function Prac(){
    const[users,setusers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/user/5").then(res=>res.json()).then(data=>
            setusers(data));
    },[]);
    return(
        <div>
          {
            users.map((item)=>(
                <h1 key={item.id}>{item.namee}</h1>
            ))
          }

        </div>
    )
}
export default Prac;
*/
/*
import React,{useState,useEffect} from "react";
function Prac(){
    const[users,setusers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8000/user",{method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({id:1,name:"sathvika"})}
        ).then(res=>res.json()).then(data=>
            setusers([data])
        );
    },[]);
    return(
        <div>
          {
            users.map((item)=>(
                <h1 key={item.id}>{item.name}</h1>
            ))
          }

        </div>
    )
}
export default Prac;*/
/*
import React, { useEffect, useState } from "react";
function Prac() {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState("");
    useEffect(() => {
        fetch("http://localhost:9000/user")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    const updateUser = (id) => {
        fetch(`http://localhost:9000/user/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: newName })
        })
        .then(res => res.json())
        .then(data => {
            return fetch("http://localhost:9000/user");
        })
        .then(res => res.json())
        .then(data => setUsers(data));
    };

    return (
        <div>
            <h2>Users List</h2>
            <input 
                type="text" 
                placeholder="Enter new name"
                onChange={(e) => setNewName(e.target.value)}
            />
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h3>{user.name}</h3>
                        <button onClick={() => updateUser(user.id)}>
                            Update
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default Prac;*/
//crud operation backend in rout.js
/*
import React,{useState,useEffect} from "react";
function Prac(){
    const[users,setusers]=useState([]);
    const[name,setname]=useState("")
    const getuser=()=>{
        fetch("http://localhost:7000/user").then(res=>res.json().then(data=>setusers(data)));
    }
    useEffect(()=>{
        getuser();
    },[]);
    
    const added=()=>{
        const newuser={
        id:Date.now(),
        name:name
    }
         fetch("http://localhost:7000/user",{
            method:"POST",
            headers:{
                 "Content-Type": "application/json"
            },
            body:JSON.stringify(newuser)
         }).then(res=>res.json().then(data=>{
            setname(""),
            getuser()}));
    };

    const upda=(id)=>{
fetch(`http://localhost:7000/user/${id}`,{
            method:"PUT",
            headers:{
                 "Content-Type": "application/json"
            },
            body:JSON.stringify({name:name})
         }).then(res=>res.json().then(data=>{
            setname(""),
            getuser()}))
    }
    const dele=(id)=>{
        fetch(`http://localhost:7000/user/${id}`,{
            method:"DELETE",
    
         }).then(res=>res.json().then(data=>{
            getuser()}))
    
    }
    return(
        <div>
            <input  value={name} onChange={(e)=>setname(e.target.value)}/>
            <button onClick={added}>add</button>
            {
                users.map((item)=>(
                    <div key={item.id}>
                    <h1 >{item.name}</h1>
                   <button onClick={()=>{upda(item.id)}}>update</button>
                    <button onClick={()=>{dele(item.id)}}>delete</button>
                    </div>
                ))
            }

        </div>
    )
}
export default Prac;
*/
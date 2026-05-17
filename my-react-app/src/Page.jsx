import React,{useState} from "react";
function Page(){
    const[page,setpage]=useState(1);
    const data=Array.from({length:50},(_,i)=>i+1);
    const limit=3
    const start=(page-1)*limit;
    const current=data.slice(start,start+limit);
    const totalPages = Math.ceil(data.length / limit);


    return(
        <div>
            {
                current.map((item)=>(
                    <p key={item}>{item}</p>
                ))
            }
            <button onClick={()=>setpage(page-1)}  disabled={page === 1}>prev</button>
            <button onClick={()=>setpage(page+1)} disabled={page === totalPages}>next</button>
            </div>
    )
}
export default Page;
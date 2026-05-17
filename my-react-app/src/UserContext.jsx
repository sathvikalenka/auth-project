import { createContext } from "react";
import { useState } from "react";
export const UserContext=createContext();
export const UserProvider=({children})=>{
    const name="sathvika";
    const[count,setcount]=useState(0);
   const increment=()=>setcount(count+1);
    return(
    <UserContext.Provider /*value={{name}}*/value={{count,increment}}>
        {children};
    </UserContext.Provider>)
}
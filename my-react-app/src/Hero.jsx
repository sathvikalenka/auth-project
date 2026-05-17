import React from "react";
import { useState } from "react";
import "./hero.css";
import Joblist from "./Joblist";
import { useNavigate } from "react-router-dom";
function Hero(){
    const navigate=useNavigate();
    return(
   
    <section className="hero">
         
        <div className="heroContent">
            <h1>WELCOME ARS APP</h1>
            <p>“The beautiful thing about learning is that no one can take it away from you.”</p>
            <button onClick={()=>navigate("/jobs")}>search jobs</button>
        </div>
    </section>
)
}
export default Hero;
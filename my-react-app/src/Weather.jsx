//weather app

import React,{useState,useEffect} from "react";
import "./weather.css"
function Weather(){
const [item,setitem]=useState("");
const [count,setcount]=useState([])
const[error,seterror]=useState(null)
const[loading,setloading]=useState(true);
useEffect(()=>{

const f=async ()=>{
    try{
        setloading(true);
const res=await fetch("http://localhost:5002/weather");
if(!res.ok){
    throw new Error("error occured");
}
const data=await res.json();
setcount(data);
    }
    catch(err){
       seterror(err.message);
    }
    finally{
        setloading(false);
    }
}
f();
},[])
const filtered=count.filter((itemss)=>(
 itemss.city.toLowerCase().includes(item.toLowerCase())
))
return (
  <div className="bg">
    <div className="container">

      <input
        className="search"
        type="text"
        placeholder="🔍 Search city..."
        value={item}
        onChange={(e) => setitem(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}

      {!loading && !error && filtered.map((w) => (

        <div className="grid" key={w.id}>

          {/* LEFT CARD */}
          <div className="card main">
            <h2>{w.city}</h2>
            <h1>{w.temperature}°C</h1>
            <p>{w.description}</p>

            <div className="extra">
              <p>📅 {w.date}</p>
              <p>⏰ {w.time}</p>
            </div>
          </div>

          {/* METRICS */}
          <div className="card small">💧 {w.humidity}%</div>
          <div className="card small">🌬 {w.wind_speed} km/h</div>
          <div className="card small">ضغط {w.pressure}</div>
          <div className="card small">👀 {w.visibility} km</div>

          {/* AQI */}
          <div className="card wide">
            <h3>Air Quality Index</h3>
            <p>AQI: {w.aqi || 50}</p>
          </div>

          {/* SUN */}
          <div className="card wide">
            <h3>Sunrise & Sunset</h3>
            <p>🌅 {w.sunrise}</p>
            <p>🌇 {w.sunset}</p>
          </div>

          {/* FORECAST */}
          <div className="forecast">
            <h3>Today</h3>
            <div className="forecast-row">
              {[1,2,3,4,5].map((i)=>(
                <div className="forecast-card" key={i}>
                  <p>9:00 AM</p>
                  <p>🌤</p>
                  <p>{w.temperature}°C</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      ))}
    </div>
  </div>
);
}
export default Weather;
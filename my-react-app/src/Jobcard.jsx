import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Jobcard({job,deleteJob}){
    return(
        
        <div style={
            {    background:"white",
                color:"black",
                border:"1px solid #f5ededff",
                padding:"15px",
                margin:"10px",
                borderRadius:"6px"
            }
        }>
            <div className="jobCard">
<h3>{job.title}</h3>
<p>
    <strong>company:</strong>{job.company}
</p>
<p>
    <strong>location:</strong>{job.location}
</p>
<p>
    <strong>salary:</strong>{job.salary}
</p>
<Link to="/apply">
<button >Apply now</button>
</Link>
 <button onClick={() => deleteJob(job.id)}>
        Delete
      </button>
        </div>
        </div>
    );
}
export default Jobcard;
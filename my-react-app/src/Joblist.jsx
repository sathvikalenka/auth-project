import React from "react";
import { toast } from "react-toastify";
import Jobcard from "./Jobcard"
import "./joblist.css"
import { useState,useEffect } from "react";
function Joblist(){
 const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const deleteJob = async (id) => {
    try {
      await fetch(`http://localhost:5000/jobs/${id}`, {
        method: "DELETE",
      });

      // update UI
      setJobs((prev) => prev.filter((job) => job.id !== id));
      toast.success("Job deleted successfully ✅");
    } catch (error) {
     toast.error("Error deleting job ❌");
    }
  };

  return (
    <div className="jobContainer">
      {jobs.map((job) => (
        <Jobcard key={job.id} job={job} deleteJob={deleteJob} />
      ))}
    </div>
  );
}

export default Joblist;

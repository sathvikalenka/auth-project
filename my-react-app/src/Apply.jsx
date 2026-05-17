import React from "react";

function Apply() {
  return (
    <div style={{padding:"30px"}}>
      <h2>Job Application Form</h2>

      <form>
        <input type="text" placeholder="Enter your name" required />
        <br /><br />

        <input type="tel" placeholder="Phone number" required />
        <br /><br />

        <input type="email" placeholder="Email" required />
        <br /><br />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Apply;

import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
export const addJobAction = async ({ request }) => {

  const formData = await request.formData();

  const newJob = {
    title: formData.get("title"),
    company: formData.get("company"),
    location: formData.get("location"),
    salary: formData.get("salary")
  };

  await fetch("http://localhost:5000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newJob)
  });
toast.success("Job added successfully ✅");

  return redirect("/jobs");
};

function AddJob() {
  return (
    <div>
      <h2>Add Job</h2>

      <Form method="post">

        <div>
          <label>Title:</label><br/>
          <input type="text" name="title" required />
        </div>

        <br/>

        <div>
          <label>Company:</label><br/>
          <input type="text" name="company" required />
        </div>

        <br/>

        <div>
          <label>Location:</label><br/>
          <input type="text" name="location" required />
        </div>

        <br/>

        <div>
          <label>Salary:</label><br/>
          <input type="number" name="salary" required />
        </div>

        <br/>

        <button type="submit">Add Job</button>

      </Form>
    </div>
  );
}

export default AddJob;
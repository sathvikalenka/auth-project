/*const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});*/
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/mydb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
const jobSchema = new mongoose.Schema({
  id: String,
  title: String,
  company: String,
  salary: Number,
  location: String
});

const Job = mongoose.model("users", jobSchema);

app.get("/jobs", async (req, res) => {
  const data = await Job.find();
  res.json(data);
});

app.listen(2000, () => {
  console.log("Server running on port 2000");
});

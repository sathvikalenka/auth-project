const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/mydb");
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
const User = mongoose.model("students", userSchema);
// CREATE
app.post("/users", async (req, res) => {
  const user = await User.create({
  "name": "rupa",
  "age": 22
});
  res.json(user);
});
// READ
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
// UPDATE
app.put("/users/:id", async (req, res) => {
  await User.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send("Updated");
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.deleteOne({ _id: req.params.id });
  res.send("Deleted");
});

app.listen(3000, () => console.log("Server running"));
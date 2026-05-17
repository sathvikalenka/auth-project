const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/User");
const auth = require("./middleware/auth");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/mydb");
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = new User({ email, password: hash });
  await user.save();

  res.send("User registered");
});
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.send("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.send("Wrong password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
});
app.get("/dashboard", auth, (req, res) => {
  res.send("Welcome to dashboard " + req.user.id);
});
app.listen(5000, () => console.log("Server running"));
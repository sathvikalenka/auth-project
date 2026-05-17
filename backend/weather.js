const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  description: String,
  humidity: Number,
  wind_speed: Number,
  pressure: Number,
  visibility: Number,
  aqi: Number,
  sunrise: String,
  sunset: String,
  date: String,
  time: String
});
const Weather = mongoose.model("Weather", weatherSchema, "weather");
app.get("/weather", async (req, res) => {
  try {
    const data = await Weather.find();

    const formatted = data.map((item) => ({
      id: item._id,
      ...item._doc
    }));

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5002, () => {
  console.log("Server running on port 5002");
});
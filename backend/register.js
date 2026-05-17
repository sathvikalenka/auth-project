const express=require("express");
const cors=require("cors");
const app= express();
const mongoose=require("mongoose");
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/mydb")
const schema=new mongoose.Schema({
    username:String,
    password:String
});
const model=mongoose.model("Users",schema);
app.post("/register",async (req,res)=>{
    const s=new model(req.body);
    await s.save();
})
app.post("/login",async (req,res)=>{
    const s= await model.findOne(req.body);
    if(s){
        res.json("login sucessfulyy");
    }
    else{
        res.json("not loggined");
    }
})
app.get("/user",async(req,res)=>{
    const s=await model.find();
    res.json(s);
})
app.listen(5000)
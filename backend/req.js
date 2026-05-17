const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.get("/user/:id",(req,res)=>{
    const id=req.params.id
    res.json([{
       id:id,namee:"sathvika"
    }
    ])
});
app.listen(4000);

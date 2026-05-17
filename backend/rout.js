/*const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express());
app.get("/user",(req,res)=>{
    res.json([{id:1,namee:"sathvika"},
        {id:2,namee:"rupa"}
    ])
});
app.listen(2000);*/
//post it used it doens,t store the data in express like json fake stres
/*
const express=require("express");

const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
app.post("/user",(req,res)=>{
   console.log(req.body);//req.body is ued to store the dtaa what frontend send
   res.json(req.body);//it return send data to frnotend
    });
    app.listen(8000);*/
    /*
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let users = [
    { id: 1, name: "Sathvika" },
    { id: 2, name: "Ravi" }
];
app.get("/user", (req, res) => {
    res.json(users);
});
app.put("/user/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    user.name = req.body.name;
    res.json({
        user: user
    });
});

app.listen(9000);*/
//crud operations in prac.jsx
/*
const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json());
let user=[
    {
        id:1,name:"sathvika"
    },
    {
        id:2,name:"rupa"
    },
    {
        id:3, name:"chnadu"
    }
]
app.get("/user",(req,res)=>{
    res.json(user);
})
app.post("/user",(req,res)=>{
    const s=req.body;
    user.push(s);
    res.json(
        user
    )
})
app.put("/user/:id",(req,res)=>{
    const n=parseInt(req.params.id)
    const s=user.find(t=>t.id==n)
    if(!s){
        return res.json({message:"User not found"});
    }

    s.name=req.body.name
    res.json(
       user
    )
})
app.delete("/user/:id",(req,res)=>{
    const n=parseInt(req.params.id)
    
    user=user.filter(i=>i.id!==n);
res.json(
   user
)

})
app.listen(7000)*/
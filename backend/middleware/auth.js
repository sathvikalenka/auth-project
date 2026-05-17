const jwt=require("jsonwebtoken");
module.exports=(req,res,next)=>{
    const header=req.headers.authorization;
    if(!header){
        res.json("no token");
    }
    const token=header.split(" ")[1];
    try{
        const verified=jwt.verify(token,process.env.JWT_SECRET);
        req.user=verified;
        next();
    }
    catch{
        res.json("error occured");
    }
}
import express from "express";

const app=express();

//middleware(function yang menangani request sebelum dia masuk ke route)
app.use((req,res,next)=>{
    if(req.url=="/aliya"){
        console.log("aliya");
    }
    console.log(req.url);
    next();
});

//route
app.get("/",(req,res)=>{
    res.send("aliya");
});

app.listen(3000,()=>{
    console.log("server sedang berjalan");
});


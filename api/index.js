import express from "express";
import { client } from "./db.js";

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
app.get("/api/salam",(req,res)=>{
    res.send("aliya");
});
app.get("/api/mahasiswa",async(req,res)=>{
    // res.send(await (await client.query("SELECT * FROM mahasiwa")).rows);
    const results=await client.query("SELECT * FROM mahasiswa");
    res.send(results.rows);
});

app.listen(3000,()=>{
    console.log("server sedang berjalan");
});


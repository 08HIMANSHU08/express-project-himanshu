
const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("In a Middleware");
    next();
});

app.use((req,res,next)=>{
    console.log("In another Middleware");
    res.send("<h1>hello to Express </h1>")
});

app.listen(3000);
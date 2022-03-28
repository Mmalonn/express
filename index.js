"use strict"

const express = require('express');
const app = express()
const port = 3000


//middleware
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.send('visitaste la pagina de inicio');
})

app.get('/marcos',(req,res)=>{
    res.send('visitaste a marcos');
})

app.listen(port,()=>{
    console.log("done");
})


"use strict"

const http = require("http");
const port = 5000;

const server = http.createServer((req,res)=>{
    res.end("respuesta");
})

server.listen(port,() =>{
    console.log("funcionando 😊")
})
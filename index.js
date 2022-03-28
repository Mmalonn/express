"use strict"

const fs = require('fs');
const express = require('express');
const app = express()
const port = 3000


//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post('/formulario',(req,res)=>{
    console.log(req.body);
    const {nombre,apellido}=req.body;
    if(!nombre||!apellido)
    return res.redirect("/error.html");
    fs.writeFile("archivos/datosusuario.txt",`{"nombre" = "${nombre}", "apellido" = "${apellido}"}`,(err)=>{
        if (err) return res.send("error al enviar");
        res.send("se creo el dato");

    })
})
app.post('/formulario2',(req,res)=>{
    console.log(req.body);
    const {nombre2,apellido2}=req.body;
    if(!nombre2||!apellido2)
    return res.redirect("/error.html");
    fs.writeFile("archivos/datosUsuarioDescargable.txt",`{"nombre" = "${nombre2}", "apellido" = "${apellido2}"}`,(err)=>{
        if(err)return res.send("fallo al crear");
        res.download(__dirname + "/archivos/datosUsuarioDescargable.txt");
        
    })
})
app.get('/',(req,res)=>{
    res.send('visitaste la pagina de inicio');
})

app.get('/marcos',(req,res)=>{
    res.send('visitaste a marcos');
})

app.listen(port,()=>{
    console.log("done");
})


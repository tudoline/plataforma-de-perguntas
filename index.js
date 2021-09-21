const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// => configuração da view engine onde ficara pastas externas <= // 
app.set("view engine","ejs");
app.use(express.static("publick"));

// => configurando body-parser <= //
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// => inicializando configuração <= //
app.get("/",(req,res) =>{
    res.render("index")
});
app.get("/perguntas",(req,res)=>{
    res.render("perguntas")
})
app.get("/sobre",(req,res)=>{
    res.render("sobre")
})
app.post("/salvar",(req,res)=>{
    const titulo = req.body.titulo;
    const description = req.body.pergunta;
    res.send("formulario recebido: " + titulo + description );
});

// => iniciando servidor <= //

// app.listen(8080,()=>{console.log("Rodando")});
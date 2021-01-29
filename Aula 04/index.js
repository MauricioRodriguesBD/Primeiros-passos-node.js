const  express = require("express");

const app = express();

app.get("/", function(req,res){
    res.send("Gerenciador financeiro");
})

app.get("/contato", function(req,res){
    res.send("Gerenciador de contato")
})

app.get("/sobre", function(req,res){
    res.send ("Gerenciador de sobre")
})
//localhost:8080
app.listen(8080);
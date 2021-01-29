
const  express = require("express");

const app = express();

app.get("/", function(req,res){
    res.sendFile(__dirname + "/src/index.html");

})

app.get("/contato", function(req,res){
    res.send("Gerenciador de contato")
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/src/sobre-empresa.html");
})
//localhost:8080
app.listen(8080);
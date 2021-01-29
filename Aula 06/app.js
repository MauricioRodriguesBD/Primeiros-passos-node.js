
const  express = require("express");

const app = express();

//Conexão com BD MYSQL
const mysql = require ('mysql');

   const connection = mysql.createConnection({
        host: 'localhost',
        user: 'mauricio',
        password : '123321475',
        database: "mauricio"

    });

    connection.connect(function(err){
        if(err){
            console.error ('error connecting : ' + err.stack);
            return;
        }
        console.log('connected as id ' + connection.threadId);
    });

    connection.query('SELECT * FROM user', function(err, rows,fields){
        if(!err){
            console.log('resultado:', rows);
        }
        else{
            console.log('erro ao realizar a consulta');
        }
    })
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
//Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mauricio',
    password: '123321475',
    database: 'mauricio'
});

connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
});

connection.query("INSERT INTO user(nome, email) VALUES ('Mauricio@email.com', 'mauricio')",function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!');
    }else{
        console.log('Erro ao cadastrar o usuario!');
    }
});
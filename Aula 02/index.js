var http = require ('http');

http.createServer(function(req,res){
    res.end("gerenciador");
}).listen(8080);


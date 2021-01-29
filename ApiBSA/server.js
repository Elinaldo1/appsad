var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var app = express();

// directorio base
app.use(bodyParser.json());

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("API rodando na porta ", port);
 });

var dbConfig = {
    user:  "mobile",
    password: "mobile",
    server: "192.168.4.4/SQLExpress",
    database: "canalog"
};

//Função para conectar banco de dados e executar query
var  executeQuery = function(res, query){	
	sql.connect(dbConfig, function (err) {
		if (err) {   
			console.log("Erro ao conectar a database :- " + err);
			res.send(err);
		}
		else {
			// request object
			var request = new sql.Request();
			// query para a database
			request.query(query, function (err, res) {
				if (err) {
					console.log("Erro ao injetar query :- " + err);
					res.send(err);
				}
				else {
					res.send(res);
				}
			});
		}
	});	
}

app.get("/api/canaoperador", function(req , res){
	var query = "select * from [canaoperador]";
	executeQuery (res, query);
});

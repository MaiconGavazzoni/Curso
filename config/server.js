//modulo server para separar da aplicação

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');



var app = express();
app.set('view engine', 'ejs');// bilioteca para renderizar as view 'EJS'
app.set('views', './app/views'); //caminho das views visto da raiz do projeto

app.use(bodyParser.urlencoded({extended:true}));

consign()
	.include('app/routes')// inclui a pasta das rotas para o Consign
	.then('config/dbConnection.js') // inclui nosso modulo de Conexão no Consign
	.then('app/models')
	.into(app);

module.exports = app;
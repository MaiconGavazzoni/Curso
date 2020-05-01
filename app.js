var app = require('./config/server');

//a rota exemplo ('./app/routes/noticias') o caminho está no mesmo nivel de arquivo

//var rotaNoticias = require('./app/routes/noticias')(app);

//var rotaHome = require('./app/routes/home')(app);

// rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(3000, function(){
	console.log('Server ON');
});
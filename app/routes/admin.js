
module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia")//caminho da pasta direto da pasta View aonde está o HTML.ejs
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		//salvarNoticias

		var connection = application.config.dbConnection();
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticia, connection, function(erro, result){
		  res.send(redirect);
		  //res.redirect('/noticias');

		});
	});
}


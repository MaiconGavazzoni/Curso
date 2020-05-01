module.exports = function(application){
	
	

	application.get('/noticia', function(req, res){

		var connection = application.config.dbConnection();// executa a função da conexão do modulo dbConnection 
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.getNoticia(connection, function(erro, result){
		//res.send(result);
		res.render("noticias/noticia", {noticia : result});//aponta para pasta da view que recebe o resultado JSON
		});
	});

};
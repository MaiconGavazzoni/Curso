//var dbConnection = require('../../config/dbConnection');//..volta a pasta para encontrar o caminho


module.exports = function(application){
	
	

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();// executa a função da conexão do modulo dbConnection 
		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.getNoticias(connection, function(erro, result){
		//res.send(result);
		res.render("noticias/noticias", {noticias : result});//aponta para view que recebe o resultado JSON
		
		});
	});

}
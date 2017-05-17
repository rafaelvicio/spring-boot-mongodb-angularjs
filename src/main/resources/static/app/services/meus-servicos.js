angular.module('meusServicos', ['ngResource'])
	.factory('recursoMedico', function($resource) {

		return $resource('/api/medicos/:medicoId', null, {
			'update' : {
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDemedicos", function(recursoMedico, $q) {
		var service = {};
		service.cadastrar = function(medico) {
			return $q(function(resolve, reject) {

				if(medico._id) {
					recursoMedico.update({medicoId: medico._id}, medico, function() {
						resolve({
							mensagem: 'Medico ' + medico.primeiroNome + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o medico ' + medico.primeiroNome
						});
					});

				} else {
					recursoMedico.save(medico, function() {
						resolve({
							mensagem: 'Medico ' + medico.primeiroNome + ' incluído com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir o medico ' + medico.primeiroNome
						});
					});
				}
			});
		};
		return service;
    });

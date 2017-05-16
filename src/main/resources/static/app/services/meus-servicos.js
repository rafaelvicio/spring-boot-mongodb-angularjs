angular.module('meusServicos', ['ngResource'])
	.factory('recursoMedico', function($resource) {

		return $resource('/api/medicos/:medicoId', null, {
			'update' : {
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeMedicos", function(recursoMedico, $q, $rootScope) {

		var evento = 'medicoCadastrada';

		var service = {};

		service.cadastrar = function(medico) {
			return $q(function(resolve, reject) {

				if(medico._id) {
					recursoMedico.update({medicoId: medico._id}, medico, function() {

						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Medico ' + medico._id + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o medico ' + medico._id
						});
					});

				} else {
					recursoMedico.save(medico, function() {
						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Medico ' + medico._id + ' incluído com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir o medico ' + medico._id
						});
					});
				}
			});
		};
		return service;
    });

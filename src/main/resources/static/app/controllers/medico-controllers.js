angular.module('app')
	.controller('MedicoController', ['recursoMedico', '$routeParams', 'cadastroDeMedicos', function(recursoMedico, $routeParams, cadastroDeMedicos) {

		var vm = this;

		vm.medico = {};
		vm.mensagem = '';

		if($routeParams.medicoId) {
			recursoMedico.get({medicoId: $routeParams.medicoId}, function(medico) {
				vm.medico = medico;
			}, function(erro) {
				console.log(erro);
				vm.mensagem = 'Não foi possível obter o medico'
			});
		}

		vm.submeter = function() {

			if (vm.formulario.$valid) {
				cadastroDeMedicos.cadastrar(vm.medico)
				.then(function(dados) {
					vm.mensagem = dados.mensagem;
					if (dados.inclusao) vm.medico = {};
				})
				.catch(function(erro) {
					vm.mensagem = erro.mensagem;
				});
			}
		};
	}]);

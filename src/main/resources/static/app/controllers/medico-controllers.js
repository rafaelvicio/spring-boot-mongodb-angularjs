angular.module('app')
	.controller('MedicoController', function($scope, recursoMedico, $routeParams, cadastroDeMedicos) {

		$scope.medico = {};
		$scope.mensagem = '';

		if($routeParams.medicoId) {
			recursoMedico.get({medicoId: $routeParams.medicoId}, function(medico) {
				$scope.medico = medico;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o medico';
			});
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {
				cadastroDeMedicos.cadastrar($scope.medico)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.medico = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});

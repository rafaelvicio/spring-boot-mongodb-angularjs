angular.module('app').controller('MedicosController', function($scope, recursoMedico) {

	$scope.medicos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoMedico.query(function(medicos) {
		$scope.medicos = medicos;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(medico) {

		recursoMedico.delete({medicoId: medico._id}, function() {
			var indiceDoMedico = $scope.medicos.indexOf(medico);
			$scope.medicos.splice(indiceDoMedico, 1);
			$scope.mensagem = 'Medico ' + medico.primeiroNome + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o medico ' + medico.primeiroNome;
		});
	};

});

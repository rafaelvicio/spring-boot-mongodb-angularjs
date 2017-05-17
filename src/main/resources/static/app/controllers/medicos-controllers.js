angular.module('app').controller('MedicosController', function(recursoMedico) {

	var vm = this;

	vm.medicos = [];
	vm.filtro = '';
	vm.mensagem = '';

	recursoMedico.query(function(medicos) {
		vm.medicos = medicos;
	}, function(erro) {
		console.log(erro);
	});

	vm.remover = function(medico) {

		recursoMedico.delete({medicoId: medico._id}, function() {
			var indiceDoMedico = vm.medicos.indexOf(medico);
			vm.medicos.splice(indiceDoMedico, 1);
			vm.mensagem = 'Medico ' + medico._id + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			vm.mensagem = 'Não foi possível apagar o medico ' + medico._id;
		});
	};

});

angular.module('app')
.controller('MController', ['$scope', 'MedicosService', function TodoController($scope, MedicosService) {

	$scope.formData = {};

    // when landing on the page, get all todos and show them
    MedicosService.get()
    .success(function(data) {
        $scope.medicos = data;
    });

    // when submitting the add form, send the text to the spring API
    $scope.createMedico = function() {
        if(!$scope.todoForm.$valid) {
            return;
        }
        MedicosService.create($scope.formData)
        .success(function(data) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.medicos.push(data);
        });
    };

    // delete a todo after checking it
    $scope.deleteMedicos = function(id) {
        MedicosService.delete(id)
        .success(function(data) {
        	angular.forEach($scope.medicos, function(medico, index){
                if(medico.id == id) {
                	$scope.medicos.splice(index, 1);
                }
        	});
        });
    };

    // when submitting the add form, send the text to the node API
    $scope.saveMedico = function(medico) {
        MedicosService.update(medico)
        .success(function(data) {
            $scope.editedMedico = {};
        });
    };

    $scope.editedMedico = {};

    $scope.editedMedico = function(medico) {
        $scope.editedMedico = medico;
    };

    $scope.revertMedico = function() {
        $scope.revertMedico = {};
    };

}]).directive('medicoFocus', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.todoFocus, function(newVal) {
                if(newVal) {
                    $timeout(function(){
                        element[0].focus();
                    }, 0, false)
                }
            });
        }
    }
}]);

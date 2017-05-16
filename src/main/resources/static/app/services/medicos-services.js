angular.module('App')
.factory('MedicosService', ['$http', function($http) {
	return {
		get: function() {
			return $http.get('/api/medicos');
		},

		create: function(medico) {
			return $http.post('/api/medicos', medico);
		},

		delete: function(id) {
			return $http.delete('/api/medicos/' + id);
		},

		update: function(medico) {
			return $http.put('/api/medicos/' + medicos._id, medicos);
		}
	}
}]);

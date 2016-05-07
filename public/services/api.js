angular.module('myApp')
 .factory('APIService', function($http, $q) {
    return {
        getFileList: function() {
            var deferred = $q.defer();

            $http.get('/list_files')
                .success(function(data) {
                    deferred.resolve(data)
                });
            return deferred.promise;
        },

        deleteFile: function(file) {
            var deferred = $q.defer();

            $http.delete('/delete_file/' + file)
                .success(function() {
                    deferred.resolve();
                })
                .error(function(err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }
    }
 })
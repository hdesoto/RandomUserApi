
myApp.service('randomService', function($http) {
    var self = this;

    self.generateUser = function(a, callback, onError){
        var url = 'https://randomuser.me/api/';
        $http.get(url)
            .then(function(response){
                self.userGenerated = response.data;
                callback(self.userGenerated);
            }, function(response) {
                console.log('Error de comunicación');
            });
    };
});
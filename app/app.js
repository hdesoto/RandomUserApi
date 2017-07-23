var myApp = angular.module('randomGenerator', []);


myApp.controller('randomController', function(randomService) {
    var self = this;

    self.showUser = function() {
        console.log('showUser function called');
        randomService.generateUser('a', function(randomUser) {
            console.log(randomUser);
            self.newUser = randomUser.results[0];
            self.pic = self.newUser.picture.large;
            self.name = self.newUser.name.first;
            self.lastname = self.newUser.name.last;
            self.adress = self.newUser.location.street;
            self.city = self.newUser.location.city;
            self.state = self.newUser.location.state;
            self.postcode = self.newUser.location.postcode;
            self.country = self.newUser.nat;
            self.username = self.newUser.login.username;
            self.password = self.newUser.login.password;
            self.cellphone = self.newUser.cell;

        }, function(errorReceived) {
            console.log(errorReceived);
        });
    };
});
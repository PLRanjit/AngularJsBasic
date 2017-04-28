var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'AppController'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'contactController'
    })
    .when('/contact-success', {
      templateUrl: 'views/contact-success.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'AppController'
    }).otherwise({
      redirectTo: '/home'
    });


}]);

myApp.run(function() {



});

myApp.directive('randomChk', [function() {

  return {
    restrict: 'E',
    scope: {
      chk: '=',
      title: '='
    },
    templateUrl: 'views/random.html', //'<img ng-src="{{chk[random].thum}}">',//'{{title}}',
    transclude: true,
    replace: true,
    controller: function($scope) {
      $scope.random = Math.floor(Math.random() * 4);
    }

  };

}]);

myApp.controller('AppController', ['$scope', '$http', function($scope, $http) {

  $scope.message = 'hello hii';
  $scope.abc = ['dfhwejk', 'dheh', 'hdwjed', 'jdiwjdi'];

  $scope.removeMe = function(ninja) {
    var removeMe = $scope.chk.indexOf(ninja);
    $scope.chk.splice(removeMe, 1);
  };

  $scope.addNew = function() {
    $scope.chk.push({
      name: $scope.NChk.name,
      age: parseInt($scope.NChk.age),
      charge: $scope.NChk.charge,
      color: $scope.NChk.color
    });

    $scope.NChk.name = "";
    $scope.NChk.age = "";
    $scope.NChk.charge = "";
    $scope.NChk.color = "";
  };


  $scope.removeAll = function() {
    $scope.chk = [];
  };

  $http.get('data/chkList.json').then(function(data) {
    $scope.chk = data.data;
  });


  /**
    $scope.chk = [

      {
        name: 'dandur',
        age: 56,
        charge:'F',
        color:'orange',
        thum: "content/img/c.jpg"
      },

      {
        name: 'pinto',
        age: 37,
        charge:'E',
        color:'blue',
        thum: "content/img/b.png"
      },
      {
        name: 'jagu',
        age:23,
        charge:'C',
        color:'green',
        thum: "content/img/c.png"
      },
      {
        name: 'gagan',
        age:28,
        charge:'A',
        color:'pink',
        thum: "content/img/d.png"
      }

    ];

    console.log(angular.toJson($scope.chk));**/

}]);


myApp.controller('contactController', ['$scope', '$location', function($scope, $location) {

  $scope.sendMessage = function() {
      $location.path('/contact-success');
    };

}]);

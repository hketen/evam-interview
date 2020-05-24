'use strict';

// Declare app level module which depends on views, and core components
angular.module('evam', [
  'ngRoute',
  'evam.dashboard',
  'evam.formBuilder',
  'evam.forms'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);

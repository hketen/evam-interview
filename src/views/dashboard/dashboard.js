'use strict';

angular.module('evam.dashboard', [
    'ngRoute',
    'evam.store',
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/dashboard', {
            templateUrl: 'views/dashboard/dashboard.html',
            controller: 'DashboardCtrl'
        });
    }])

    .controller('DashboardCtrl', function ($scope, store) {

        $scope.forms = store.forms();

    });

'use strict';

angular.module('evam.forms', [
    'ngRoute',
    'evam.form',
    'evam.store',
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/forms/:formName', {
            templateUrl: 'views/forms/forms.html',
            controller: 'FormsCtrl'
        });
    }])

    .controller('FormsCtrl', function ($scope, $routeParams, store) {

        $scope.form = store.findForm($routeParams['formName']);

        $scope.values = {};

        $scope.validate = function () {

        };

        $scope.reset = function () {
            $scope.values = {};
        };
    });

'use strict';

function formModal(event) {
    $('#formModal').modal(event || 'hide');
}

function formModalShow() {
    formModal('show');
}

function formModalHide() {
    formModal('hide');
}

function formModalUpdate() {
    formModal('handleUpdate');
}

const initialForm = {
    name: "",
    description: "",
    fields: [
        {required: false, name: "", dataType: "STRING"},
    ]
};

angular.module('evam.formBuilder', [
    'ngRoute',
    'evam.store'
])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/form-builder', {
            templateUrl: 'views/form-builder/form-builder.html',
            controller: 'FormBuilderCtrl'
        });
    }])

    .controller('FormBuilderCtrl', function ($scope, $timeout, store) {
        // store.addFormOrSet({ "name": "example form", "description": "Uye bilgi formu",createdAt: "2017-01-08", fields: [ { "required": true, "name": "Ad", dataType: "STRING" }, { "required": true, "name": "Soyad", dataType: "STRING" },{ "required": false, "name": "Yaş", dataType: "NUMBER" } ] })
        // store.addFormOrSet({ "name": "Test form", "description": "Uye bilgi formu",createdAt: "2017-01-08", fields: [ { "required": true, "name": "Ad", dataType: "STRING" }, { "required": true, "name": "Soyad", dataType: "STRING" },{ "required": false, "name": "Yaş", dataType: "NUMBER" } ] })
        // store.addFormOrSet({ "name": "search form", "description": "Uye bilgi formu",createdAt: "2017-01-08", fields: [ { "required": true, "name": "Ad", dataType: "STRING" }, { "required": true, "name": "Soyad", dataType: "STRING" },{ "required": false, "name": "Yaş", dataType: "NUMBER" } ] })
        // store.addFormOrSet({ "name": "contact form", "description": "Uye bilgi formu",createdAt: "2017-01-08", fields: [ { "required": true, "name": "Ad", dataType: "STRING" }, { "required": true, "name": "Soyad", dataType: "STRING" },{ "required": false, "name": "Yaş", dataType: "NUMBER" } ] })

        $scope.forms = store.forms();

        $scope.dataTypeOptions = [
            {label: "Text", value: "STRING"},
            {label: "Numeric", value: "NUMBER"},
        ]

        $scope.newForm = {...initialForm};

        $scope.addForm = function () {

            $scope.loading = false;

            formModalShow();
        };

        $scope.addField = function () {

            $scope.newForm.fields.push({
                required: false,
                name: "",
                dataType: "STRING"
            });
            formModalUpdate();
        };
        $scope.removeField = function (index, deleteCount = 1) {

            $scope.newForm.fields.splice(index, deleteCount);
            formModalUpdate();
        };

        $scope.save = function () {
            $scope.loading = true;

            const form = angular.extend({}, $scope.newForm);

            $timeout(() => {

                store.addFormOrSet(form);
                $scope.forms = store.forms();

                formModalHide();
                $scope.newForm = {...initialForm};
                $scope.loading = false;
            }, 800);
        };

    });

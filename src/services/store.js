function tryParse(str) {
    try {

        return JSON.parse(str);
    }
    catch (e) {
        return undefined;
    }
}

const FORMS_KEY = "forms";

const module = angular.module('evam.store', []);

module.service('store', function () {

    const $scope = {};

    $scope.get = function (key) {
        return tryParse(localStorage.getItem(key));
    };

    $scope.set = function (key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    };

    /**
     * forms object type [{
     *      "name": "Test form",
     *      "description": "Uye bilgi formu",
     *      createdAt: "2017-01-08",
     *      fields: [
     *          { "required": true, "name": "Ad", dataType: "STRING" },
     *          { "required": true, "name": "Soyad", dataType: "STRING" },
     *          { "required": false, "name": "Yaş", dataType: "NUMBER" }
     *      ]
     *  }]
     */
    $scope.forms = function () {

        return $scope.get(FORMS_KEY) || [];
    };

    $scope.findForm = function (formName) {

        const forms = $scope.forms();

        return forms.find((f) => f.name === formName);
    };

    /**
     * form object type {
     *      "name": "Test form",
     *      "description": "Uye bilgi formu",
     *      createdAt: "2017-01-08",
     *      fields: [
     *          { "required": true, "name": "Ad", dataType: "STRING" },
     *          { "required": true, "name": "Soyad", dataType: "STRING" },
     *          { "required": false, "name": "Yaş", dataType: "NUMBER" }
     *      ]
     *  }
     * @param form
     */
    $scope.addFormOrSet = function (form) {

        form.createdAt = moment().format("YYYY-MM-DD");

        const forms = $scope.get(FORMS_KEY) || [];

        const index = forms.findIndex((f) => f.name === form.name);

        if (index !== -1) {

            forms[index] = form;
        }
        else {

            forms.push(form);
        }

        $scope.set(FORMS_KEY, forms);
    };

    /**
     *
     * @param formName string
     */
    $scope.removeForm = function (formName) {

        const forms = $scope.get(FORMS_KEY) || [];

        const index = forms.findIndex((f) => f.name === formName);

        if (index === -1) {

            forms.splice(index, 1);

            $scope.set(FORMS_KEY, forms);
        }
    };

    return $scope;
});

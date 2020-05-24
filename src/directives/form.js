angular.module('evam.form', [])
    .directive('evamField', function () {
        return {
            restrict: 'E',
            scope: {
                field: '<',
                index: '<',
                values: '=',
            },
            template: `
            <div class="form-group">
                <label for="formName{{$index}}">
                    {{field.name}}{{field.required ? ' *' : ''}}
                </label>
                <input
                    id="formName{{$index}}"
                    name="{{field.name}}"
                    type="{{dataType}}"
                    class="form-control"
                    placeholder="{{field.name}}"
                    ng-required="!!field.required"
                    ng-model="values[field.name]"
                />
                <small
                    class="form-text text-danger"
                    ng-if="$parent.validationForm[field.name].$touched && $parent.validationForm[field.name].$invalid"
                 >
                 This field is required!
                </small>
            </div>
            `,
            link: function ($scope, element, attrs) {

                switch ($scope.field.dataType) {
                    case "NUMBER":
                        $scope.dataType = 'number';
                        break;
                    case "STRING":
                    default:
                        $scope.dataType = 'text';
                }
            }
        };
    });

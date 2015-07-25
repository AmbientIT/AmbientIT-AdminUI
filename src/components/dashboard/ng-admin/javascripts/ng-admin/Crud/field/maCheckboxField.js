/*global define*/

define(function (require) {
    'use strict';

    /**
     * Generic edition field
     *
     * @example <ma-checkbox-field type="text" field="field" value="value"></ma-checkbox-field>
     */
    function maCheckboxField() {
        return {
            scope: {
                'field': '&',
                'value': '='
            },
            restrict: 'E',
            link: function (scope, element) {
                var field = scope.field();
                scope.name = field.name();
                scope.label = field.label();
                scope.v = field.validation();
                scope.value = !!scope.value;
                var input = element.children()[0];
                var attributes = field.attributes();
                for (var name in attributes) {
                    input[name] = attributes[name];
                }
            },
            template:
              `<md-switch  ng-model="value"  id="{{ name }}" name="{{ name }}" aria-label="{{name}}" class="md-primary admin-switch">
                <span ng-class="{ 'barred-text': !value }">
                  {{label}}
                </span>
              </md-switch>`
        };
    }

    maCheckboxField.$inject = [];

    return maCheckboxField;
});

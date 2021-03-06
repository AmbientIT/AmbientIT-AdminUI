/*global define*/

define(function (require) {
    'use strict';

    /**
     * Edition field for a multiline string - a textarea.
     *
     * @example <ma-text-field field="field" value="value"></ma-text-field>
     */
    function maTextField() {
        return {
            scope: {
                'field': '&',
                'value': '='
            },
            restrict: 'E',
            link: function(scope, element) {
                var field = scope.field();
                scope.name = field.name();
                scope.v = field.validation();
                scope.label = field.label();
                var input = element.children()[0];
                var attributes = field.attributes();
                for (var name in attributes) {
                    input[name] = attributes[name];
                }
            },
            template: `<md-input-container>
                           <label>{{label}}</label>
                           <textarea ng-model="value" id="{{ name }}" name="{{ name }}" ng-required="v.required" ng-minlength="v.minlength" ng-maxlength="v.maxlength" md-minlength="v.minlength" md-maxlength="v.maxlength"></textarea>
                       </md-input-container>`

        };
    }

    maTextField.$inject = [];

    return maTextField;
});

/*global define*/

define(function (require) {
    'use strict';

    var _ = require('lodash');

    function maField(FieldViewConfiguration) {
        var writeWidgetTypes = _(FieldViewConfiguration)
            .map(function(fieldView, field) {
                return '<span ng-switch-when="' + field + '">' + fieldView.getWriteWidget() +'</span>';
            }).join('');
        var template =
'<div id="row-{{ field.name() }}" class="has-feedback" >' +

'<md-tooltip>' +
'{{ field.label() }}' +
'</md-tooltip>' +
    '<div ng-if="field.editable()" ng-switch="field.type()">' +
        writeWidgetTypes +
        '<span ng-show="fieldHasValidation(field)" class="glyphicon form-control-feedback" ng-class="fieldIsValid(field) ? \'glyphicon-ok\' : \'glyphicon-remove\'"></span>' +
    '</div>' +
    '<div ng-if="!field.editable()" >' +
        '<p class="form-control-static">' +
            '<ma-column field="::field" entry="::entry" entity="::entity" datastore="::datastore"></ma-column>' +
        '</p>' +
    '</div>' +
'</div>';
        return {
            restrict: 'E',
            scope: {
                field: '&',
                entry: '=',
                entity: '&',
                form: '&',
                'datastore': '&'
            },
            link: function(scope) {
                scope.field = scope.field();
                scope.type = scope.field.type();
                scope.entity = scope.entity();
                scope.form = scope.form();
                scope.datastore = scope.datastore();

                scope.getClassesForField = function(field, entry) {
                    return 'ng-admin-field-' + field.name().replace('.', '_') + ' ' + (field.getCssClasses(entry) || 'col-sm-10 col-md-8 col-lg-7');
                };

                scope.getInputForField = function(field) {
                    return scope.form[field.name()];
                };

                /**
                 * Should validation status be displayed for a given field?
                 *
                 * - No for non-editable fields, or template fields which not have a corresponding input
                 * - No for non-altered input
                 * - Yes otherwise
                 */
                scope.fieldHasValidation = function(field) {
                    var input = this.getInputForField(field);
                    return input && input.$dirty;
                };

                scope.fieldIsValid = function(field) {
                    var input = this.getInputForField(field);
                    return input && input.$valid;
                };

                scope.getFieldValidationClass = function(field) {
                    if (this.fieldHasValidation(field)) {
                        return this.fieldIsValid(field) ? 'has-success' : 'has-error';
                    }
                };

            },
            template: template
        };
    }

    maField.$inject = ['FieldViewConfiguration'];

    return maField;
});

/*global define*/

define(function () {
    'use strict';

    function maEditButtonDirective($state) {
        return {
            restrict: 'E',
            scope: {
                entity: '&',
                entry: '&',
                size: '@',
                label: '@',
            },
            link: function (scope) {
                scope.label = scope.label || 'Edit';
                scope.gotoEdit = function () {
                    $state.go($state.get('edit'),
                    angular.extend({
                        entity: scope.entity().name(),
                        id: scope.entry().identifierValue
                    }, $state.params));
                };
            },
            template: `<md-button ng-click="gotoEdit()" class="md-icon-button" ng-class="size ? \'btn-\' + size : \'\'"><md-icon md-font-icon="ion-edit"></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maEditButtonDirective.$inject = ['$state'];

    return maEditButtonDirective;
});

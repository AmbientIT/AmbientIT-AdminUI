/*global define*/

define(function () {
    'use strict';

    function maDeleteButtonDirective($state) {
        return {
            restrict: 'E',
            scope: {
                entity: '&',
                entry: '&',
                size: '@',
                label: '@',
            },
            link: function (scope) {
                scope.label = scope.label || 'Delete';

                scope.gotoDelete = function () {
                    $state.go($state.get('delete'), angular.extend({
                        entity: scope.entity().name(),
                        id: scope.entry().identifierValue
                    }, $state.params));
                };
            },
            template: `<md-button class="md-icon-button md-warn" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoDelete()"><md-icon md-font-icon="ion-trash-a"></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maDeleteButtonDirective.$inject = ['$state'];

    return maDeleteButtonDirective;
});

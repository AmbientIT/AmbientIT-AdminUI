/*global define*/

define(function () {
    'use strict';

    function maShowButtonDirective($state) {
        return {
            restrict: 'E',
            scope: {
                entity: '&',
                entry: '&',
                size: '@',
                label: '@',
            },
            link: function (scope) {
                scope.label = scope.label || 'Show';

                scope.gotoShow = function () {
                    $state.go($state.get('show'),
                    angular.extend({
                        entity: scope.entity().name(),
                        id: scope.entry().identifierValue
                    }, $state.params));
                };
            },
            template: `<md-button class="md-icon-button" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoShow()"><md-icon md-font-icon="ion-eye"></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maShowButtonDirective.$inject = ['$state'];

    return maShowButtonDirective;
});

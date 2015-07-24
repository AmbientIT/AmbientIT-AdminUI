/*global define*/

define(function () {
    'use strict';

    function maCreateButtonDirective($state) {
        return {
            restrict: 'E',
            scope: {
                entity: '&',
                size: '@',
                label: '@',
            },
            link: function (scope) {
                scope.label = scope.label || 'Create';

                scope.gotoCreate = function () {
                    $state.go($state.get('create'), angular.extend({entity: scope.entity().name()}, $state.params));
                };
            },
            template: `<md-button class="md-icon-button" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoCreate()"><md-icon md-font-icon="ion-plus-round"></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maCreateButtonDirective.$inject = ['$state'];

    return maCreateButtonDirective;
});

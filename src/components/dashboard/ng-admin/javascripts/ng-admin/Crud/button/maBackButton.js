/*global define*/

define(function () {
    'use strict';

    function maBackButtonDirective($window) {
        return {
            restrict: 'E',
            scope: {
                size: '@',
                label: '@',
            },
            link: function ($scope) {
                $scope.label = $scope.label || 'Back';

                $scope.back = function () {
                    $window.history.back();
                };
            },
            template: `<md-button class="md-icon-button" ng-class="size ? \'btn-\' + size : \'\'" ng-click="back()"><md-icon  md-font-icon="ion-chevron-left" ></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maBackButtonDirective.$inject = ['$window'];

    return maBackButtonDirective;
});

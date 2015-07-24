/*global define*/

define(function () {
    'use strict';

    function maBatchDeleteButtonDirective($state) {
        return {
            restrict: 'E',
            scope: {
                entity: '&',
                selection: '&',
                label: '@',
            },
            link: function ($scope) {
                $scope.label = $scope.label || 'Delete';

                $scope.gotoBatchDelete = function () {
                    var entity = $scope.entity();
                    var ids = $scope.selection().map(function(entry) {
                        return entry.identifierValue;
                    });

                    $state.go('batchDelete', angular.extend({
                        ids: ids,
                        entity: $scope.entity().name()
                    }, $state.params));
                };
            },
            template: `<md-button class="md-icon-button" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoBatchDelete()"><md-icon md-font-icon="ion-trash-a"></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maBatchDeleteButtonDirective.$inject = ['$state'];

    return maBatchDeleteButtonDirective;
});

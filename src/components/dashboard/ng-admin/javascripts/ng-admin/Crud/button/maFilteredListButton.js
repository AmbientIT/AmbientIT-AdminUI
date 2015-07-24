/*global define*/

define(function () {
    'use strict';

    /**
     * Link to filtered list
     *
     * Usage:
     *
     *     <!-- In a scope where the current entry is a post, link tio the related comments -->
     *     <ma-filtered-list-button
     *       entity-name="comments"
     *       filter="{ post_id: entry.values.id }"
     *       text="See related comments"
     *       size="xs">
     *     </ma-filtered-list-button>')
     *
     * Usage as a template field:
     *
     * nga.field('', 'template')
     *   .label('')
     *   .template('<ma-filtered-list-button entity-name="comments" filter="{ post_id: entry.values.id }"></ma-filtered-list-button>')
     */
    function maFilteredListButtonDirective($state) {
        return {
            restrict: 'E',
            scope: {
                entityName: '@',
                filter: '&',
                label: '@',
                size: '@'
            },
            link: function (scope) {
                scope.label = scope.label || ('See all related ' + scope.entityName);
                scope.gotoList = function () {
                    $state.go($state.get('list'), { 'entity': scope.entityName, 'search': scope.filter()});
                };
            },
            template: `<md-button class="md-icon-button" ng-class="size ? \'btn-\' + size : \'\'" ng-click="gotoList()"><md-icon md-font-icon="ion-grid"></md-icon>&nbsp;{{ ::label }}</md-button>`
        };
    }

    maFilteredListButtonDirective.$inject = ['$state'];

    return maFilteredListButtonDirective;
});

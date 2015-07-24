/*global define*/

define(function () {
    'use strict';

    function DatagridItemSelectorDirective() {
        return {
            restrict: 'E',
            scope: {
                entry: '=',
                selection: '=',
                toggleSelect: '&'
            },
            template: '<md-checkbox aria-label="toggle" ng-click="toggle(entry)" ng-checked="isInSelection()"></md-checkbox>',
            link: function (scope) {
                scope.toggle = entry => scope.toggleSelect({entry: entry});
                let e = scope.entry;
                scope.isInSelection = () => scope.selection.filter(s => s._entityName == e._entityName && s._identifierValue == e._identifierValue).length > 0;
            }
        };
    }

    DatagridItemSelectorDirective.$inject = [];

    return DatagridItemSelectorDirective;
});

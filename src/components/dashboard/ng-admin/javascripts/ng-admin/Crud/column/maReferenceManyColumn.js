/*global define*/

define(function (require) {
    'use strict';

    function maReferenceManyColumn() {
        return {
            restrict: 'E',
            scope: {
                values: '&'
            },
            template:
'<md-chips ng-repeat="ref in values() track by $index">' +
    '<md-chip>{{ ref }}</md-chip>' +
'</md-chips>'
        };
    }

    maReferenceManyColumn.$inject = [];

    return maReferenceManyColumn;
});

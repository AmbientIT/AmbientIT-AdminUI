/*global define*/

define(function (require) {
    'use strict';

    function maBooleanColumn() {
        return {
            restrict: 'E',
            scope: {
                value: '&',
            },
            link: function(scope) {
                scope.isOk = !!scope.value();
            },
            template: '<span  ng-class="{\'ion-checkmark-round\': isOk, \'ion-close-round\': !isOk}"></span>'
        };
    }

    maBooleanColumn.$inject = [];

    return maBooleanColumn;
});

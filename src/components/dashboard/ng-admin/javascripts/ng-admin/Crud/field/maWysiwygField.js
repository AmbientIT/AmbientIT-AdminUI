/*global define*/

define(function (require) {
    'use strict';

    /**
     * Edition field for a multiline HTML string - a rich text editor.
     *
     * @example <ma-wysiwyg-field field="field" value="value"></ma-wysiwyg-field>
     */
    function maWysiwygField() {
        return {
            scope: {
                'field': '&',
                'value': '='
            },
            restrict: 'E',
            link: function(scope, element) {
                var field = scope.field();
                scope.name = field.name();
                scope.label = field.label();
            },
            template: `<div layout="column">
                           <h3 layout="row" layout-align="center">{{ label }}</h3>
                           <div text-angular ta-unsafe-sanitizer="{{ !field.sanitize() }}" ng-model="value" id="{{ name }}" name="{{ name }}" ta-text-editor-class="border-around" ta-html-editor-class="border-around">
                           </div>
                       </div>`

        };
    }

    maWysiwygField.$inject = [];

    return maWysiwygField;
});

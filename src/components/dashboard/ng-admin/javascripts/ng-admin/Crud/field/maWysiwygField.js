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
                scope.froalaOptions = {
                  inlineMode: false,
                  imageResize: true,
                  placeholder: "Edit Me"
                }
            },
            template: `<md-content layout="column" style="min-height:500px;">
                           <h3 layout="row" layout-align="center">{{ label }}</h3>
                           <textarea froala="froalaOptions" ng-model="value" id="{{ name }}" name="{{ name }}"></textarea>
                           </md-content>
                       </md-content>`

        };
    }

    maWysiwygField.$inject = [];

    return maWysiwygField;
});

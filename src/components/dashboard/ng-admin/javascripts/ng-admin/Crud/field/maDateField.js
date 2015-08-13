import greyLeft from './date/grey_arrow_left.svg';
import greyRight from './date/grey_arrow_right.svg';
import whiteLeft from './date/white_arrow_left.svg';
import whiteRight from './date/white_arrow_right.svg';

/**
 * Edition field for a date - a text input with a datepicker.
 *
 * @example <ma-date-field field="field" value="value"></ma-date-field>
 */
function maDateField() {
    return {
        scope: {
            'field': '&',
            'value': '='
        },
        restrict: 'E',
        link: function(scope, element) {
            var field = scope.field();

          console.log(field);
          scope.label = field._label;
          scope.name = field.name();
          scope.rawValue = scope.value;
          scope.$watch('rawValue', function(rawValue) {

              scope.value = field.parse()(rawValue);
          });
          scope.format = field.format();
          if (!scope.format) {
              scope.format = field.type() === 'date' ? 'DD-MM-YYYY' : 'DD-MM-YYYY HH:mm:ss';
          }

          scope.v = field.validation();
          scope.isOpen = false;
          var input = element.find('input').eq(0);
          var attributes = field.attributes();
          for (var name in attributes) {
              input.attr(name, attributes[name]);
          }

          scope.header = {
            monday: 'Lun',
            tuesday: 'Mar',
            wednesday: 'Mer',
            thursday: 'Jeu',
            friday: 'Ven',
            saturday: 'Sam',
            sunday: 'Dim'
          };

          scope.arrows = {
            year: {
              left: greyLeft,
              right: greyRight
            },
            month: {
              left: whiteLeft,
              right: whiteRight
            }
          }

        },
        template: `
        <mb-datepicker element-id='{{ name }}'
                  id="{{ name }}"
                   input-class="testClass"
                   input-name="{{ name }}"
                   arrows="arrows"
                   calendar-header="header"
                   placeholder="{{ label }}"
                   date="value"
                   date-format="{{ format }}"
                   ng-required="v.required"></mb-datepicker>

        `
    };
}

maDateField.$inject = [];

export default maDateField;

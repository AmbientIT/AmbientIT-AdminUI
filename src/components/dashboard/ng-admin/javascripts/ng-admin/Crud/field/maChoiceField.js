function updateChoices(scope, choices) {
    scope.choices = choices;
    scope.$root.$$phase || scope.$digest();
}

function maChoiceField($compile) {
    return {
        scope: {
            'field': '&',
            'value': '=',
            'entry':  '=?',
            'datastore': '&?',
            'refresh': '&'
        },
        restrict: 'E',
        compile: function() {
            return {
                pre: function(scope, element) {
                    var field = scope.field();
                    scope.name = field.name();
                    scope.label = field.label();
                    scope.v = field.validation();

                    var refreshAttributes = '';
                    if (field.type().indexOf('reference') === 0 && field.remoteComplete()) {
                        scope.refreshDelay = field.remoteCompleteOptions().refreshDelay;
                        refreshAttributes = 'refresh-delay="refreshDelay" refresh="refresh({ $search: $select.search })"';
                    }

                    var choices = field.choices ? field.choices() : [];


                    var template = `<md-select placeholder="{{ name }}" ng-model="$parent.value" ng-required="v.required" >
                                      <md-option ng-repeat="choice in choices" value="{{ choice.value }}">{{ choice.label }}</md-option>
                                    </md-select>`;

                    scope.choices = typeof(choices) === 'function' ? choices(scope.entry) : choices;
                    console.log(scope.name);

                  scope.$watch('choices',function(data){
                    console.log('choices change ', data)
                  });

                  element.html(template);

                    var select = element.children()[0];
                    var attributes = field.attributes();
                    for (var name in attributes) {
                        select.setAttribute(name, attributes[name]);
                    }

                    $compile(element.contents())(scope);
                },
                post: function(scope) {
                    scope.$on('choices:update', function(e, data) {
                        updateChoices(scope, data.choices);
                    });
                }
            };
        }
    };
}

maChoiceField.$inject = ['$compile'];

module.exports = maChoiceField;


function maViewBatchActionsDirective($injector) {
    var $compile = $injector.get('$compile');

    return {
        restrict: 'E',
        scope: {
            'entity': '=',
            'selection': '=',
            'buttons': '&'
        },
        link: function(scope) {
            scope.isopen = false;

            scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                scope.isopen = !scope.isopen;
            };

            scope.buttons = scope.buttons();
            if (typeof scope.buttons === 'string') {
                scope.customTemplate = scope.buttons;
                scope.buttons = null;
            }
        },
        // the ng-class hidden is necessary to hide the inner blank space used for spacing buttons when the selection is not empty
        template: `<md-menu>
                      <md-button aria-label="view batch actions" class="md-icon-button" ng-click="$mdOpenMenu()">
                        <md-icon md-menu-origin md-font-icon="ion-ionic"></md-icon>
                      </md-button>
                      <md-menu-content width="4">
                        <md-menu-item ng-repeat="button in buttons" ng-switch="button">
                          <a ng-switch-when="delete">
                            <ma-batch-delete-button selection="selection" entity="entity"/>
                          </a>
                          <a ng-switch-default>
                            <span compile="button"></span>
                          </a>
                        </md-menu-item>
                        <md-menu-divider></md-menu-divider>
                      </md-menu-content>
                    </md-menu>`
    };
}

maViewBatchActionsDirective.$inject = ['$injector'];

module.exports = maViewBatchActionsDirective;

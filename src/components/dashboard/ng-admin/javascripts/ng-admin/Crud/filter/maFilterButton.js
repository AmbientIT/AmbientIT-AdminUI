function maFilterButtonDirective() {
    'use strict';

    return {
        restrict: 'E',
        scope: {
            filters: '&',
            enabledFilters: '=',
            enableFilter: '&'
        },
        link: function(scope) {
            scope.notYetEnabledFilters = () => scope.filters().filter(filter =>
                scope.enabledFilters.indexOf(filter) === -1
            );
            scope.hasFilters = () => scope.notYetEnabledFilters().length > 0;
        },
        template:
`
<md-menu ng-if="hasFilters()">
  <md-button aria-label="view filters" class="md-icon-button" ng-click="$mdOpenMenu()">
    <md-icon md-menu-origin md-font-icon="ion-search"></md-icon>
  </md-button>
  <md-menu-content width="4">
    <md-menu-item ng-repeat="filter in notYetEnabledFilters()" ng-switch="button">
      <md-button ng-click="enableFilter()(filter)">
        {{ filter.label() }}
      </md-button>
    </md-menu-item>
    <md-menu-divider></md-menu-divider>
  </md-menu-content>
</md-menu>

<!--<span class="btn-group" dropdown is-open="isopen" ng-if="hasFilters()">-->
    <!--<button type="button" class="btn btn-default dropdown-toggle" dropdown-toggle >-->
        <!--<span class="glyphicon glyphicon-filter" aria-hidden="true"></span>&nbsp;Add filter <span class="caret"></span>-->
    <!--</button>-->
    <!--<ul class="dropdown-menu" role="menu">-->
        <!--<li ng-repeat="filter in notYetEnabledFilters()" ng-switch="button">-->
            <!--<a ng-click="enableFilter()(filter)">{{ filter.label() }}</a>-->
        <!--</li>-->
    <!--</ul>-->
<!--</span>-->
`
    };
}

maFilterButtonDirective.$inject = [];

module.exports = maFilterButtonDirective;

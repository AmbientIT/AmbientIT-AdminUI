function maDashboardPanel($state) {
    return {
        restrict: 'E',
        scope: {
            collection: '&',
            entries: '&'
        },
        link: function(scope) {
            scope.gotoList = function () {
                $state.go($state.get(list), { entity: scope.collection().entity.name() });
            };
        },
        template: `
        <md-toolbar>
          <div class="md-toolbar-tools">
              <md-button ng-click="gotoList()">
                {{ collection().title() || collection().entity.label() }}
              </md-button>
          </div>
        </md-toolbar>
        <ma-datagrid name="{{ collection().name() }}"
            entries="entries()"
            fields="::collection().fields()"
            entity="::collection().entity"
            list-actions="::collection().listActions()">
        </ma-datagrid>`
    };
}

maDashboardPanel.$inject = ['$state'];

module.exports = maDashboardPanel;


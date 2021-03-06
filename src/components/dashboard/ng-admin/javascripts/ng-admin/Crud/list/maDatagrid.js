/*global define*/

define(function (require) {
    'use strict';

    var maDatagridController = require('./maDatagridController');

    function maDatagridDirective() {
        return {
            restrict: 'E',
            scope: {
                name: '@',
                entries: '=',
                selection: '=',
                fields: '&',
                listActions: '&',
                entity: '&'
            },
            controllerAs: 'datagrid',
            controller: maDatagridController,
            template:
`<div class="table-responsive-vertical shadow-z-1">

	<table id="table" class="table">
		<thead>
		<tr>
			<th ng-if="selection">
				<ma-datagrid-multi-selector toggle-select-all="toggleSelectAll()" selection="selection"
											entries="entries"/>
			</th>
			<th ng-repeat="field in fields() track by $index" ng-class="'ng-admin-column-' + field.name()">
				<a ng-click="datagrid.sort(field)">
					<span class="glyphicon {{ datagrid.sortDir === 'DESC' ? 'ion-chevron-down': 'ion-chevron-up' }}"
						  ng-if="datagrid.isSorting(field)"></span>

					{{ field.label() }}
				</a>
			</th>
			<th ng-if="datagrid.shouldDisplayActions" class="ng-admin-column-actions">
				Actions
			</th>
		</tr>
		</thead>

		<tbody>
		<tr ng-repeat="entry in entries track by entry.identifierValue">
			<td ng-if="selection">
				<ma-datagrid-item-selector toggle-select="toggleSelect(entry)" selection="selection" entry="entry"/>
			</td>
			<td data-title="{{::field.label()}}"  ng-repeat="field in fields() track by $index"
				ng-class="field.getCssClasses(entry)">
				<ma-column  field="::field" entry="::entry" entity="::entity"></ma-column>
			</td>
			<td data-tile="Actions" ng-if="datagrid.shouldDisplayActions" class="ng-admin-column-actions">
				<ma-list-actions entry="::entry" entity="::entity" buttons="listActions()"></ma-list-actions>
			</td>
		</tr>
		</tbody>
	</table>
</div>
`
        };
    }

    maDatagridDirective.$inject = [];

    return maDatagridDirective;
});

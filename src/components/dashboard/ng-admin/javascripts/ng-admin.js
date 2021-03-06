require('../sass/ng-admin.scss');

//require('es6-promise').polyfill(); // for IE

require('./ng-admin/Main/MainModule');
require('./ng-admin/Crud/CrudModule');

var Factory = require('admin-config/lib/Factory');

var factory = angular.module('AdminDescriptionModule', []);
factory.constant('AdminDescription', new Factory());

var ngadmin = angular.module('ng-admin', ['ui.select', 'main', 'crud', 'AdminDescriptionModule', 'froala']);
ngadmin.config(function(NgAdminConfigurationProvider, AdminDescription) {
    NgAdminConfigurationProvider.setAdminDescription(AdminDescription);
});

ngadmin.config(function(uiSelectConfig) {
    uiSelectConfig.theme = 'bootstrap';
});

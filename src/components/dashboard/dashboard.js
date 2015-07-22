import './dashboard.scss';

//import angular from 'angular';

import './ng-admin/javascripts/ng-admin';

import components from './components/components';
import filters from './filters/filters';
import custom from './custom/custom';

import restangularConfig from './restangular';
import ngAdminConfig from './ngAdminConfig';

export default angular.module('ai.dashboard',[
  'ng-admin',
  components.name,
  filters.name,
  custom.name
])
  .config(restangularConfig)
  .config(ngAdminConfig);

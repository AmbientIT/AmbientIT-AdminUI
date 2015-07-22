import './dashboard.scss';
import './lib/ng-admin.min.css';

//import angular from 'angular';

//todo uncomment this and remove the cdn in index.html
//

import components from './components/components';
import filters from './filters/filters';
import custom from './custom/custom';

import restangularConfig from './restangular';
import ngAdminConfig from './ngAdmin';

export default angular.module('ai.dashboard',[
  'ng-admin',
  components.name,
  filters.name,
  custom.name
])
  .config(restangularConfig)
  .config(ngAdminConfig);

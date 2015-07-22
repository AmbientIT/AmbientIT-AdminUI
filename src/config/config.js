import angular from 'angular';

import prodConfig from './env/production';
import devConfig from './env/development';
import testConfig from './env/test';

var config;

switch(process.env.NODE_ENV){
  case 'production':
    config =  prodConfig;
    break;
  case 'development':
    config = devConfig;
    break;
  case 'test':
    config = testConfig;
    break;
  default:
    config = devConfig;
    break;
}

export default angular.module('ai.config',[])
  .constant('config', config);

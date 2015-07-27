import prodConfig from './env/build';
import devConfig from './env/development';
import testConfig from './env/test';

var config;

switch(global.env){
  case 'build':
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

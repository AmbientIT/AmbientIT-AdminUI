import './login.scss';

//import angular from 'angular';
import 'satellizer';

import routing from './routing';
import authConfig from './auth';

import LoginController from './LoginController';
import LoggedUser from './LoggedUser';
import loginButton from './loginButton/loginButton';

export default angular.module('ai.login',[
  'satellizer'
])
  .config(routing)
  .config(authConfig)
  .directive('loginButton', loginButton)
  .service('loggedUser', LoggedUser)
  .controller('LoginController', LoginController);

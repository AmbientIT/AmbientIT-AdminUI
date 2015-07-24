import HomeController from './HomeController';
import routing from './routing.js';

export default angular.module('ai.home',[

])
  .config(routing)
  .controller('HomeController', HomeController);

//import angular from 'angular';
import routing from './routing';

import ImageManipController from './ImageManipController';

export default angular.module('ai.image',[])
  .controller('ImageManipController', ImageManipController)
  .config(routing);

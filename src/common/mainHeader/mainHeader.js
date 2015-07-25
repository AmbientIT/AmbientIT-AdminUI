import './mainHeader.scss';

import MainHeaderController from './MainHeaderController';
import template from './main-header.tpl.html';

export default
/* @ngInject */
()=>{
  return {
    template: template,
    controller: MainHeaderController,
    controllerAs: 'header'
  }
}

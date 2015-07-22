import './mainHeader.scss';

import MainHeaderController from './MainHeaderController';
import template from './main-header.tpl.html';

export default ()=>{
  return {
    template: template,
    controller: MainHeaderController,
    controllerAs: 'header'
  }
}

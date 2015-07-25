import './main-aside.scss';
import asideTemplate from './main-aside.tpl.html';
import MainAsideController from './MainAsideController';

export default
/* @ngInject */
()=>{
  return {
    template: asideTemplate,
    controller: MainAsideController,
    controllerAs: 'aside'
  }
}

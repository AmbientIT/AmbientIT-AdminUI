import './navAside.scss';
import template from './navAside.tpl.html';
import NavAsideController from './NavAsideController'

export default
/* @ngInject */
()=>{
  return {
    template: template,
    controller: NavAsideController,
    controllerAs: 'nav',
    transclude: true
  }
}

import './loginButton.scss';
import template from './login-button.tpl.html';
import LoginButtonController from './LoginButtonController';

export default
/* @ngInject */
()=>{
  return {
    template: template,
    scope:{},
    bindToController:{
      icon: '@'
    },
    controller: LoginButtonController,
    controllerAs: 'button',
    link: (scope,element,attrs)=>{

    }
  }
}

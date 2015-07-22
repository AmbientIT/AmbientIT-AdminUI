import './loginButton.scss';
import template from './login-button.tpl.html';
import LoginButtonController from './LoginButtonController';

export default ()=>{
  return {
    template: template,
    scope:{},
    bindToController:{
      google: '&',
      icon: '@'
    },
    controller: LoginButtonController,
    controllerAs: 'button',
    link: (scope,element,attrs)=>{

    }
  }
}

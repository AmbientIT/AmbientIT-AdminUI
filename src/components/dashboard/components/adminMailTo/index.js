import template from './admin-mailto.tpl.html';

export default
/* @ngInject */
()=>{
  return {
    scope:{
      email: '@'
    },
    template: template
  }
}

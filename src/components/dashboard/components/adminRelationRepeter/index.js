import template from './admin-relation-repeter.tpl.html';

export default
/* @ngInject */
()=>{
  return {
    scope: {
      data: '=',
      entityName: '@'
    },
    template: template
  }
}

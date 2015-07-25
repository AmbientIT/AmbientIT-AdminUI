import template from './admin-relation-select.tpl.html';

export default
/* @ngInject */
()=>{
  return {
    scope: {},
    bindToController:{
      relationName: '@',
      attrName: '@',
      data: '=',
      multiple: '@',
      label: '@'
    },
    controller: 'AdminRelationSelectController as ctrl',
    template: template
  }
}

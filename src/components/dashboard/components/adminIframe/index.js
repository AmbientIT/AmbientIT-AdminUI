import template from './admin-iframe.tpl.html';

export default
/* @ngInject */
()=>{
  return {
    scope:{},
    bindToController: {
      url: '@',
      width: '@',
      height: '@'
    },
    template: template,
    controller: 'AdminIframeController as iframe'
  }
}

import template from './admin-picture.tpl.html';

export default ()=>{
  return {
    scope:{},
    bindToController:{
      url: '@',
      height: '@'
    },
    template: template,
    controller: function($sce){
      this.secureUrl = $sce.trustAsUrl(this.url);
    },
    controllerAs: 'ctrl'
  }
}

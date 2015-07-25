import template from './admin-slider.tpl.html';

export default
/* @ngInject */
()=>{
  return {
    template: template,
    scope:{},
    bindToController: {
      data: '=',
      attrName: '@',
      min: '@',
      max: '@',
      step: '@',
      label: '@'
    },
    controller: function(){
      var self = this;
      if(!self.data[self.attrName]){
        self.data[self.attrName] = self.min;
      }
      console.log(self.data[self.attrName])
    },
    controllerAs: 'slider'
  }
}

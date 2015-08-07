import template from './admin-picture.tpl.html';
import AdminPictureControiller from './AdminPictureController';

export default
/* @ngInject */
()=>{
  return {
    scope:{},
    bindToController:{
      url: '@',
      height: '@'
    },
    template: template,
    controller: AdminPictureControiller,
    controllerAs: 'ctrl'
  }
}

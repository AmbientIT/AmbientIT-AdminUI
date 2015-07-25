import template from './home.tpl.html';

export default
/* @ngInject */
($stateProvider)=>{
  $stateProvider('home',{
    url:'',
    controller: 'HomeController as ctrl',
    template: template
  })
}

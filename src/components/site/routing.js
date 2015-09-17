import template from './site.tpl.html';

export default
/* @ngInject */
($stateProvider)=>{
  $stateProvider.state('site',{
    url:'/site',
    parent: 'main',
    controller: 'SiteController as ctrl',
    template: template,
    resolve: {
      pages : /* @ngInject */ (PageService)=>{
        return PageService.findAll();
      }
    }
  })
}

import template from './page-editor.tpl.html';

export default
/* @ngInject */
($stateProvider)=>{
  $stateProvider.state('site.editor', {
    url: '/page/:title',
    controller: 'PageEditorController as ctrl',
    template : template,
    resolve: {
      page : /* @ngInject */ (PageService, $stateParams)=>{
        return PageService.findByTitle($stateParams.title);
      }
    }
  })
}

import template from './resize.tpl.html';

export default
/* @ngInject */
($stateProvider)=>{
  $stateProvider
    .state('resize', {
      url: '/resize/:slug',
      controller: 'ResizeController as ctrl',
      resolve: {
        media : ($http, $stateParams, config,$sce)=>{
          return $http.get(config.api.baseUrl+'media/'+$stateParams.slug)
            .success(function(data){
              data.url = $sce.trustAsUrl(data.url);
              return data;
            })
        }
      },
      template: template
    });
}

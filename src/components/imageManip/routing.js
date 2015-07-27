import template from './image-manip.tpl.html';

export default
/* @ngInject */
($stateProvider)=>{
  $stateProvider
    .state('resize', {
      parent:'main',
      url: '/imagemanipulation/:slug',
      controller: 'ImageManipController as ctrl',
      resolve: {
        media : ($http, $stateParams, config,$sce)=>{
          return $http.get(config.api.baseUrl+'media/'+$stateParams.slug)
            .then(function(data){
              console.log(data);
              data.url = $sce.trustAsUrl(data.url);
              return data;
            })
        }
      },
      template: template
    });
}

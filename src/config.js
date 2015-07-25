export default
/* @ngInject */
($locationProvider, $compileProvider)=> {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase:true
  });

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|localhost):|data:image\//);

}

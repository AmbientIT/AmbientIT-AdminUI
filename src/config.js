export default
/* @ngInject */
($locationProvider, $compileProvider, $sceProvider)=> {
  $locationProvider
    .html5Mode({
      enabled: false,
      requireBase:true
    })
    .hashPrefix('');

  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|blob|localhost):|data:image\//);

  $sceProvider.enabled(false);
}

export default
/* @ngInject */
($authProvider, config)=>{
  $authProvider.google(config.auth.google);

  angular.extend($authProvider, config.auth);
}

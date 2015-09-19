export default
/* @ngInject */
($rootScope, $auth, $state, loggedUser, $mdSidenav, $http)=>{
  $rootScope.isLoading = false;

  if(!$auth.isAuthenticated()){
    $state.go('login');
  }else{
    loggedUser.init()
    .then(function(){
        //$state.go('dashboard');
      })
  }

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error)=>{
    throw error;
    //console.log(event,toState,toParams,fromParams,fromState);
    //$mdSidenav('main').close();
    //$mdSidenav('left').close();
  })

}

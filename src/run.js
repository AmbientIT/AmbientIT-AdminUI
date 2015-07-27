export default
/* @ngInject */
($rootScope, $auth, $state, loggedUser, $mdSidenav)=>{
  $rootScope.isLoading = false;

  if(!$auth.isAuthenticated()){
    $state.go('login');
  }else{
    loggedUser.init()
    .then(function(){
        $state.go('dashboard');
      })
  }

  $rootScope.$on('$viewContentLoaded', (event, toState, toParams, fromState, fromParams)=>{
    //console.log(event,toState,toParams,fromParams,fromState);
    //$mdSidenav('main').close();
    //$mdSidenav('left').close();
  })

}

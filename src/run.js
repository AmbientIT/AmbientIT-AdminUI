export default ($rootScope, $auth, $state, loggedUser, $mdSidenav)=>{
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
      $mdSidenav('main').close();
      $mdSidenav('dashboard').close();
  })

}

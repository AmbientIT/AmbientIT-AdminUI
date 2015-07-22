export default ($rootScope, $auth, $state, loggedUser)=>{
  $rootScope.isLoading = false;
  console.log($auth);
  if(!$auth.isAuthenticated()){
    $state.go('login');
  }else{
    loggedUser.init();
  }

}

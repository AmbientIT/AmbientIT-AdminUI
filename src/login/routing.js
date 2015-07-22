import template from './login.tpl.html';

export default ($stateProvider)=>{
  $stateProvider
    .state('login', {
      url: '/login',
      onEnter: ($auth, $location)=>{
        if($auth.isAuthenticated()){
          $location.path('/dashboard');
        }
      },
      controller: 'LoginController as ctrl',
      template: template
    });
}

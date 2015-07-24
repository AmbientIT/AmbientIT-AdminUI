export default ($stateProvider)=>{
  $stateProvider('home',{
    url:'',
    onEnter: ($state)=>{
      $state.go('dashboard');
    }
  })
}

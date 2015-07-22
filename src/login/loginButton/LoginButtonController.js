export default class LoginButtonController{
  constructor($location, $auth, $timeout, $mdDialog, loggedUser){
    this.isVisible = true;
    this.isLeaving = false;
    this.$location = $location;
    this.$auth = $auth;
    this.timeout = $timeout;
    this.loggedUser = loggedUser;
  }
  google(){
    var self = this;
    this.isLeaving = true;
    this.timeout(function(){
      self.isVisible = false;
      self.$auth.authenticate('google')
        .then(()=>{
          self.loggedUser.init();
        })
        .catch((err)=>{
          //todo material dialog
          //alert('you\'re not welcome here stranger');
        })
    },1000)
  }
}

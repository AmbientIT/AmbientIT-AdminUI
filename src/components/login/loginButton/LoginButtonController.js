export default class LoginButtonController{
  constructor( $auth, $timeout, $mdDialog, loggedUser){
    this.isVisible = true;
    this.isLeaving = false;
    this.dialog = $mdDialog;
    this.auth = $auth;
    this.timeout = $timeout;
    this.loggedUser = loggedUser;
  }
  google(ev){
    console.log("dsfsfsdfs")
    var self = this;
    this.isLeaving = true;
    this.timeout(function(){
      self.isVisible = false;
      self.auth.authenticate('google')
        .then(()=>{
          self.loggedUser.init();
        })
        .catch((err)=>{
          self.isVisible = true;
          self.dialog.show(
              self.dialog.alert()
              .parent(angular.element(document.body))
              .title(err.statusText)
              .content('something wrong happen')
              .ariaLabel(err.statusText)
              .ok('Ok')
              .targetEvent(ev)
          );
        })
    },1000)
  }
}

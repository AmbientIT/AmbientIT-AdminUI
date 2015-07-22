export default class{
  constructor($mdSidenav,$auth, loggedUser){
    this.mdSidenav = $mdSidenav
    this.logout = $auth.logout;
    this.loggedUser = loggedUser;
  }
  close(){
    this.mdSidenav('left').toggle();
  }
}

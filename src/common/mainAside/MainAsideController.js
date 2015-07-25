import bg from '../../../img/material1.jpg';

export default class MainAsideController{
  /* @ngInject */
  constructor($mdSidenav,$auth, loggedUser){
    this.mdSidenav = $mdSidenav
    this.logout = $auth.logout;
    this.loggedUser = loggedUser;
    this.bg = bg;
  }
  close(){
    this.mdSidenav('left').toggle();
  }
}

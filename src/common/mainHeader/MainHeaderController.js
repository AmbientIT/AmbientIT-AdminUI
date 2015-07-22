export default class MainHeaderController{
  constructor($mdSidenav, $auth){
    this.sidenav = $mdSidenav;
    this.isAuthenticated = $auth.isAuthenticated;
  }
  toggleSidenav(){
    this.sidenav('main').toggle();
  }
  toggleDashboardMenu(){
    this.sidenav('dashboard').toggle();
  }
}

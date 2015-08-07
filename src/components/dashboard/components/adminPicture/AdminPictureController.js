export default class{
  /*@ngInject*/
  constructor($sce){
    this.secureUrl = $sce.trustAsUrl(this.url);
  }
}

export default class AdminIframeController{
  /* @ngInject */
  constructor($sce){
    console.log(this)
    this.trustedUrl = $sce.trustAsResourceUrl(this.url);
    if(!this.url){
      throw new Error('iframe without url');
    }
    if(!this.width){
      throw new Error('iframe without width');
    }
    if(!this.height){
      throw new Error('iframe without height');
    }
  }
}

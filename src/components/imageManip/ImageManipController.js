export default class ImageManipController{
  /* @ngInject */
  constructor($http, media){
    this.$http = $http;
    this.media = media.data;
    console.log('controller',media)
  }
  displayChange(){

  }
  submitChange(){

  }
}

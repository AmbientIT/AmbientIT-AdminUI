export default
/* @ngInject */
(RestangularProvider)=>{
  RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params) {
    //if (operation == "getList") {
    //
    //}
    //return {params: params};
  });
}

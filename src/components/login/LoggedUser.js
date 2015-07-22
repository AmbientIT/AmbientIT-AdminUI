export default class LoggedUser{
  constructor($http,config, $auth){
    this.auth = $auth;
    this.http = $http;
    this.apiUrl = config.api.baseUrl;
  }
  init(){
    var self = this;
    return this.http
      .get(this.apiUrl+'me')
      .then(function(result){
        console.log(result);
        Object.keys(result.data).forEach(function(key) {
          self[key] = result.data[key];
        });
        return self;
      })
      .catch(function(){
        self.auth.logout();
      })
  }
}

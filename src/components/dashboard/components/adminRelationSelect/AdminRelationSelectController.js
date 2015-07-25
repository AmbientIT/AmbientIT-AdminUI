export default class AdminRelationSelectController{
  /* @ngInject */
  constructor(config, $http){
    var self = this;
    if (!self.data[self.attrName]){
      self.multiple ? self.data[self.attrName] = [] : self.data[self.attrName] = {};
    }else{
      if(self.multiple){
        self.data[self.attrName] = self.data[self.attrName].map(function(data){
          return data.slug;
        })
      }
    }
    self.all = [];

    $http.get(config.api.baseUrl+self.relationName)
      .success(function(data){
        self.all = data || [];
      })
  }
}

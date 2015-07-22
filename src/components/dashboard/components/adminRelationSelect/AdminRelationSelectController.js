export default class AdminRelationSelectController{
  constructor($http){
    var self = this;
    if(!this.data){
      this.data[this.attrName] = [];
    }
    self.fruitNames = ['Apple', 'Banana', 'Orange'];

    self.entities = [];
    $http.get('/api/'+this.relationName)
      .success(function(data){
        console.log(data)
        self.entities = data;
      })
      .error(function(err){
        console.log(err);
      });
    this.filterSelected = false;
  }
}

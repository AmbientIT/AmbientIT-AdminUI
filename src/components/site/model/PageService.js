export default
class PageService{
  /* @ngInject */
  constructor($http, config){
    this.http = $http;
    this.url = config.api.baseUrl+'page';
    this.cache = [];
    this.selected = null;
  }

  create(page){
    var self = this;
    return this.http.post(self.url, page)
      .then((result)=>{
        this.cache.push(result.data)
        return result.data;
      })
  }

  findAll(){
    var self = this;
    return this.http.get(self.url)
      .then((result)=>{
        self.cache = result.data;
        return self.cache;
      })
  }

  findByTitle(title){
    var self = this;
    return this.http.get(self.url+'/'+title)
      .then((result)=>{
        self.selected = result.data;
        return self.cache;
      })
  }

  updatePage(){
    var self = this;
    return this.http.put(self.url+'/'+self.selected.id, self.selected)
      .then((result)=>{
        return result.data
      })
  }

  createComponent(component){
    var self = this;
    component.page = self.selected.id;
    console.log(component);
    return this.http.post(self.url+'component', component)
      .then((result)=>{
        self.selected.components.push(result.data);
        return result.data;
      })
  }

  updateComponent(component, index){
    var self = this;
    return this.http.put(self.url+'component/'+component.id, component)
      .then((result)=>{
        self.selected.components[index] = result.data;
        return result.data;
      })
  }

  removeComponent(component, index){
    var self = this;
    return this.http.delete(self.url+'component/'+component.id)
      .then(()=>{
        self.selected.components.splice(index,1);
      })
  }
}

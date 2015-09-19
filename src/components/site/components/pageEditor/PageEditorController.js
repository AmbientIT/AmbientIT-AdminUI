export default

class PageEditorController{
  /* @ngInject */
  constructor(PageService){
    this.PageService = PageService;
    this.page = PageService.selected;
    this.froalaOptions = {
      inlineMode: true,
      imageResize: true,
      placeholder: "Contenu du component"
    };
    this.visibleComponentForm = false;
  }

  updatePage(){
    this.PageService
      .updatePage()
      .then(()=>{
        console.log('page updated');
      })
  }

  addComponents(component){
    this.PageService.selected.components.push(component);
  }

  toggleComponentForm(){
    this.visibleComponentForm = !this.visibleComponentForm;
  }

  createComponent(component){
    var self = this;
    this.PageService
      .createComponent(component)
      .then(()=>{
        self.newComponent = {};
        self.toggleComponentForm();
      })
  }

  updateComponent(component){
    var self = this;
    this.PageService
      .updateComponent(component)
      .then(()=>{
        console.log('update success');
      })
  }

  removeComponent(component, index){
    var self = this;
    this.PageService
      .removeComponent(component, index)
      .then(()=>{
        console.log('remove success');
      })
  }
}

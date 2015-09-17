export default

class PageEditorController{
  /* @ngInject */
  constructor(PageService){
    this.PageService = PageService;
    this.page = PageService.selected;
    this.froalaOptions = {
      inlineMode: false,
      imageResize: true,
      placeholder: "Contenu du component"
    };
    this.visibleComponentForm = false;
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
      .then(function(){
        self.newComponent = {};
        self.toggleComponentForm();
      })
  }
}

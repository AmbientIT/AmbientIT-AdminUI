export default
class SiteController{
  /* @ngInject */
  constructor(PageService, $state){
    this.PageService = PageService;
    this.state = $state;
    this.pages = PageService.cache;
  }

  addPage(){
    this.PageService.create({
      title: 'nouvellePage'
    });
  }

  selectPage(page){
    this.PageService.selected = page;
    this.state.go('site.editor', { title: page.title });
  }
}

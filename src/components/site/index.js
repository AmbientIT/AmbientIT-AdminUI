import pageEditor from './components/pageEditor';

import SiteController from './SiteController';
import routing from './routing';
import PageService from './model/PageService'


export default angular.module('ai.site',[
  pageEditor.name
])
  .config(routing)
  .service('PageService', PageService)
  .controller('SiteController', SiteController);

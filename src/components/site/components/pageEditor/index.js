import 'bootstrap/dist/css/bootstrap-theme.css';
import './site.css';

import PageEditorController from './PageEditorController';
import routing from './routing';


export default angular.module('ai.site.editor', [

])
  .config(routing)
  .controller('PageEditorController',PageEditorController);

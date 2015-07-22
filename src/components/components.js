import mainAside from './mainAside/mainAside';
import mainHeader from './mainHeader/mainHeader'

export default angular
  .module('ai.components',[])
  .directive('mainHeader',mainHeader)
  .directive('mainAside',mainAside);

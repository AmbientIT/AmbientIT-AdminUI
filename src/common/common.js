import mainAside from './mainAside/mainAside';
import mainHeader from './mainHeader/mainHeader'
import materialTable from './materialTable/materialTable.js'

export default angular
  .module('ai.common',[])
  .directive('mainHeader',mainHeader)
  .directive('mainAside',mainAside);

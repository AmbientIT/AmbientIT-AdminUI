import mainAside from './mainAside/mainAside';
import mainHeader from './mainHeader/mainHeader';

import './materialTable/materialTable.scss';

export default angular
  .module('ai.common',[])
  .directive('mainHeader',mainHeader)
  .directive('mainAside',mainAside);

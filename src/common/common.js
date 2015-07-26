import mainAside from './mainAside/mainAside';
import mainHeader from './mainHeader/mainHeader';
import navAside from './navAside/navAside';

import './materialTable/materialTable.scss';

export default angular
  .module('ai.common',[])
  .directive('navAside', navAside)
  .directive('mainHeader',mainHeader)
  .directive('mainAside',mainAside);

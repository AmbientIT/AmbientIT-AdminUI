import mailTo from './adminMailTo/adminMailTo';
import picture from './adminPicture/adminPicture';
import repeter from './adminRelationRepeter/AdminRelationRepeter';
import select from './adminRelationSelect/AdminRelationSelect';
import resize from './resizeButton/resizeButton';
import slider from './adminSlider/adminSlider';
import iframe from './adminIframe/adminIframe.js';

import SelectController from './adminRelationSelect/AdminRelationSelectController';
import IframeController from './adminIframe/AdminIframeController';

export default angular.module('ai.dashboard.components',[
  'ui.select'
])
  .controller('AdminRelationSelectController',SelectController)
  .controller('AdminIframeController', IframeController)
  .directive('adminSlider',slider)
  .directive('adminMailto', mailTo)
  .directive('adminPicture', picture)
  .directive('adminRelationRepeter', repeter)
  .directive('adminRelationSelect', select)
  .directive('adminIframe', iframe)
  .directive('resizeButton', resize);

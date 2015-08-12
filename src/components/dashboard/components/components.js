import mailTo from './adminMailTo';
import picture from './adminPicture';
import repeter from './adminRelationRepeter';
import select from './adminRelationSelect';
import resize from './resizeButton';
import slider from './adminSlider';
import iframe from './adminIframe';
import datePicker from './datePicker'

import SelectController from './adminRelationSelect/AdminRelationSelectController';
import IframeController from './adminIframe/AdminIframeController';

export default angular.module('ai.dashboard.components',[])
  .controller('AdminRelationSelectController',SelectController)
  .controller('AdminIframeController', IframeController)
  .directive('adminSlider',slider)
  .directive('adminMailto', mailTo)
  .directive('adminPicture', picture)
  .directive('adminRelationRepeter', repeter)
  .directive('adminRelationSelect', select)
  .directive('adminIframe', iframe)
  .directive('resizeButton', resize);

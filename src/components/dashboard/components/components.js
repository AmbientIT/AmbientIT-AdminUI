import mailTo from './adminMailTo/adminMailTo';
import picture from './adminPicture/adminPicture';
import repeter from './adminRelationRepeter/AdminRelationRepeter';
import select from './adminRelationSelect/AdminRelationSelect';
import resize from './resizeButton/resizeButton';
import slider from './adminSlider/adminSlider';
import selectController from './adminRelationSelect/AdminRelationSelectController';

export default angular.module('ai.dashboard.components',[
  'ui.select'
])
  .controller('AdminRelationSelectController',selectController)
  .directive('adminSlider',slider)
  .directive('adminMailto', mailTo)
  .directive('adminPicture', picture)
  .directive('adminRelationRepeter', repeter)
  .directive('adminRelationSelect', select)
  .directive('resizeButton', resize);

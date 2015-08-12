/**
 * ambient-it admin ui
 * written in angular 1.x with ECMA6 syntax
 * use jspm babel and system.js
 * @author AmbientIT <charles.jacquin@ambient-it.net>
 */
import './style/main.scss';

import './vendors';

import themeConfig from './style/theming';
import config from './config';
import run from './run';

import configModule from './config/config';
import login from './components/login/login';
import dashboard from './components/dashboard/dashboard';
import imageManip from './components/imageManip/imageManip';
import common from './common/common';


angular.module('ai.admin', [
  'satellizer',
  'ui.router',
  'ngMaterial',
  'ngSanitize',
  'materialDatePicker',
  common.name,
  configModule.name,
  login.name,
  dashboard.name,
  imageManip.name
])
  .config(config)
  .config(themeConfig)
  .run(run);

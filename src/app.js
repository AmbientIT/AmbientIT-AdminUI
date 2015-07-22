/**
 * ambient-it admin ui
 * written in angular 1.x with ECMA6 syntax
 * use jspm babel and system.js
 * @author AmbientIT <charles.jacquin@ambient-it.net>
 */

import './style/loader.scss';
import 'animate.css/animate.css';

import 'ui-select/dist/select.min.css';
import 'angular-material/angular-material.css';

//import angular from 'angular';
import ngMaterial from 'angular-material';

import 'angular-ui-router';
import 'satellizer';
import 'ui-select';

import themeConfig from './style/theming';
import config from './config';
import run from './run';

import configModule from './_config/config';
import login from './login/login';
import dashboard from './dashboard/dashboard';
import resize from './resize/resize';
import components from './components/components';


angular.module('ai.admin', [
  'satellizer',
  'ui.select',
  'ui.router',
  ngMaterial,
  components.name,
  configModule.name,
  login.name,
  dashboard.name,
  resize.name
])
  .config(config)
  .config(themeConfig)
  .run(run);

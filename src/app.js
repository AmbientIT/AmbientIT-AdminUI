/**
 * ambient-it admin ui
 * written in angular 1.x with ECMA6 syntax
 * use jspm babel and system.js
 * @author AmbientIT <charles.jacquin@ambient-it.net>
 */

import 'rangy/lib/rangy-core';
import 'rangy/lib/rangy-selectionsaverestore';

import './style/loader.scss';
import 'animate.css/animate.css';

import 'ui-select/dist/select.min.css';
import 'angular-material/angular-material.css';

import angular from 'angular';
import ngMaterial from 'angular-material';
import ngSanitize from 'angular-sanitize';

import 'angular-ui-router';
import 'satellizer';
import 'ui-select';

import themeConfig from './style/theming';
import config from './config';
import run from './run';

import configModule from './config/config';
import login from './components/login/login';
import dashboard from './components/dashboard/dashboard';
import resize from './components/resize/resize';
import common from './common/common';


angular.module('ai.admin', [
  'satellizer',
  'ui.select',
  'ui.router',
  ngMaterial,
  ngSanitize,
  common.name,
  configModule.name,
  login.name,
  dashboard.name,
  resize.name
])
  .config(config)
  .config(themeConfig)
  .run(run);

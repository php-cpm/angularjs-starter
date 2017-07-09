/**
 * bp admin entry
 * @author name emailAddress
 */

'use strict';

import 'jquery';
import 'bootstrap';
import 'bootstrap-switch';
import 'bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css';
import angular from 'angular';
import Common from './common/common';
import Components from './components/components';

import filter from './components/filter';
import AppComponent from './app.component';
import router from './router/router';
import 'angular-ui-bootstrap';
import 'angular-bootstrap-switch';
import {Button} from 'fancyui';
import uiRouter from 'angular-ui-router';
import pagination from 'angular-ui-bootstrap/src/pagination';
import 'angular-busy/dist/angular-busy';
import 'angular-busy/angular-busy.css';

import 'bootstrap/less/bootstrap.less';
import './skin/theme.less';
import './skin/style.min.css';


angular.module('app', [
    'frapontillo.bootstrap-switch',
    filter.name,
    router.name,
    Common.name,
    Components.name,
    Button.name,
    uiRouter,
    pagination,
    'cgBusy',
    'ui.bootstrap',
  ])
  .constant('$menuConstant', {
    DEBUG: process.env.DEBUG
  })
  .constant('modalInstance',{instance:null})
  .component('app', AppComponent);

console.log('process.env.DEBUG', process.env.DEBUG);

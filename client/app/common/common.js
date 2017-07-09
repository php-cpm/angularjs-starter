/**
 * @author name emailAddress
 */

'use strict';

import angular from 'angular';
import panel from './panel/panel';
import commonfooter from './commonfooter/commonfooter';
import commonheader from './commonheader/commonheader';

let commonModule = angular.module('app.common', [

  panel.name,
  commonfooter.name,
  commonheader.name,
]);

export default commonModule;

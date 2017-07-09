/**
 * app component
 * @author name emailAddress
 */

'use strict';

import template from './app.html';
import controller from './app.controller';

let appComponent = {
  template,
  controller,
  controllerAs: 'vm',
  restrict: 'E'
};

export default appComponent;

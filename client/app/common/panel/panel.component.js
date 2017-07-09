import template from './panel.html';
import controller from './panel.controller';
import './panel.less';

export default {
  restrict: 'E',
  transclude: true,
  bindings: {
    'title': '@',
  },
  template,
  controller,
  controllerAs: 'vm'
};

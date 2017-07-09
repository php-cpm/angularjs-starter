/**
 * components
 * @author name emailAddress
 */
import 'prismjs/themes/prism.css';
import Service from '../service/service';
import {Button} from 'fancyui';
import uiRouter from 'angular-ui-router';

export default angular.module('app.components', [
  Service.name,
  Button.name,
  uiRouter

]);
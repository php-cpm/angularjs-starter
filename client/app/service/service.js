import Api from './base.api.js';
import startService from './startService.js'

console.log("process.env.NODE_ENV", process.env.NODE_ENV);
let base = '';

if (process.env.NODE_ENV == 'prod') {
  base = ''
} else
{
  base = ''
}

export default angular.module('app.services', [])
  .service({
    Api,
    startService
  })
  .constant('APIBASE', base)
;


import angular from 'angular';
import moment from 'moment';
import prettyBytes from 'pretty-kibibytes';

let filterModule = angular.module('filterModule', [])
  .filter('prettybytes', () => {
    return (num) => {
      if (!num || angular.isString(num)) {
        return num;
      }
      return prettyBytes(num);
    }
  })
  .filter('timeToStamp', () => {
    return (param) => {
      return moment(param, 'YYYY-MM-DD HH:mm:ss').unix() * 1000;
    }
  })

export default filterModule;
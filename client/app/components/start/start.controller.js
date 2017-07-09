/**
 * (description)
 * 
 * @author yourname
 */

export default class StartController {
  constructor($timeout, $interval, startService, $state, $scope, $rootScope, $element) {
    'ngInject';
    this.name = 'start';
    
    Object.assign(this, {
      $timeout, $interval, startService, $state, $scope, $rootScope, $element
    })
    
    $scope.$on('$destroy',() =>{
      this.$interval.cancel('');
    });
  }

}
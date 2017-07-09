'use strict';

export default class commonHeaderController {
  constructor($scope, $document, $location, $window, $state) {
    "ngInject";
    this.$scope = $scope;
    this.$document = $document;
    this.$location = $location;
    this.$window = $window;
    this.$state = $state;
    
    this.menu = [
      {href: 'start', title: '首页'},
    ];
    
    this.user = {
      name: 'admin',
      pic: 'http://timg.ffan.com/convert/resize/url_T1DJdTBgZQ1RCvBVdK/tfs/db6a488cd2303be6bfbf185920b42d6b.png',
    }
  }
  
  getUrl() {
    return this.$location.path().substring(1);
  }
  
  toggleMenu() {
    this.$document.find('body').toggleClass('menu-close');
  }
  
  goPolymer() {
    this.$state.go('start');
  }
}

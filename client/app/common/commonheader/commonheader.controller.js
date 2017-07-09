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
      {href: 'polymer', title: '聚合信息页'},
      {href: 'reallog', title: '原始信息查询'},
      {href: 'agentCard', title: 'Agent管理'},
      {href: 'project', title: '应用名IP查询'},
    ];
    
    this.user = {
      name: '微风',
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

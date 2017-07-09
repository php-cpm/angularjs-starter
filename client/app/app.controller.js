class AppController {
  constructor($rootScope) {
    'ngInject';
    this.menu = [
      {state: 'agentCard', title: '微风Agent管理'},
    ]
    $rootScope.$on('$stateChangeStart',
      (event, toState, toParams, fromState, fromParams, options) => {
        if (toState.name == 'log' && !this.blackBackground) {
          this.blackBackground = true;
          return;
        }
        this.blackBackground = false;
      });
    $rootScope.$on('fullScreen',
      (event) => {
        this.fullScreen = !this.fullScreen;
      });
  }
  
}

export default AppController;


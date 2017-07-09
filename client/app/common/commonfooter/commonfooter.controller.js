/**
 * (description)
 * 
 * @author yourname
 */
'use strict';

import tickModalTpl from '../../components/tickModal/tickModal.html';
export default class CommonfooterController {
  constructor($scope, $location, $uibModal, $state) {
    'ngInject';
    this.name = 'commonfooter';
    this.uibModal = $uibModal;
    this.$state = $state;

  }
  openModal(){
    let modal = this.uibModal.open({
      animation: true,
      template: tickModalTpl,
      backdrop: 'static',
      controller:'TickModalController',
      controllerAs: 'vm',
      size: 'md',
      resolve: {
        modalBack: () =>{
          return true;
        }
      }
    });
    //modal.result.then(
    //
    //);
  }

  goAbout(){
    this.$state.go('about');
  }

  goLog(){
    this.$state.go('update');
  }
}
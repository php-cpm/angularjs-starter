/**
 * (description)
 * 
 * @author yourname
 */
'use strict';

export default class CommonfooterController {
  constructor($scope, $location, $uibModal, $state) {
    'ngInject';
    this.name = 'commonfooter';
    this.uibModal = $uibModal;
    this.$state = $state;

  }
}
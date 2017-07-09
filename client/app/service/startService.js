/**
 * Created by zhaoran on 2017/3/22.
 */

export default class startSvc {
  constructor(Api, $http, $q, $httpParamSerializerJQLike){
    'ngInject';
    this.Api = Api;
    this.$http = $http;
    this.$q = $q;
    this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;
  }
  getData(){
    return this.Api.get('platform/index');
  }
}
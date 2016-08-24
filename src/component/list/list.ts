import * as angular from 'angular';
import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import listComponent from "./list.component";

const list = angular
  .module('list',['ui.router'])
  .component('list',listComponent)
  .config( ( $stateProvider: ng.ui.IStateProvider,
             $urlRouterProvider: ng.ui.IUrlRouterProvider )=>{
    $stateProvider
      .state('list',{
        url : '/',
        template:'<list></list>'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default list;
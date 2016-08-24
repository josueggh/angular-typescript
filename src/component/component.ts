import * as angular from 'angular';
import List from './list/list';

const components = angular
  .module('app.components',[
    List
  ])
  .name;

export default components;
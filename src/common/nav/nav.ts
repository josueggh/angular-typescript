import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import navComponent from "./nav.component";

const nav = angular
  .module('nav',['ui.router'])
  .component('nav',navComponent)
  .name;

export default nav;
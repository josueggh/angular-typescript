import * as angular from 'angular';
import 'angular-ui-router';
import * as uiRouter from "angular-ui-router";

import AppComponent from './app.component';
import Common from "./common/common"
import Components from "./component/component";

const app = angular
  .module("myapp",[
    Common,
    Components,
    "ui.router"
  ])
  .component("app",AppComponent)
  .name;

export default app;
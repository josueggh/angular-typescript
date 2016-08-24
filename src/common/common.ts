import * as angular from 'angular';
import Nav from './nav/nav';
import Header from './header/header';
import Footer from './footer/footer';

const common = angular
  .module('app.common',[
    Header,
    Nav,
    Footer
  ])
  .name;

export default common;
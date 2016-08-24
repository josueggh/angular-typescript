import footerComponent from "./footer.component";

const footer = angular
  .module('footer',[])
  .component('footer',footerComponent)
  .name;

export default footer;
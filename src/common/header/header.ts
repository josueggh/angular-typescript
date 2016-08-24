import headerComponent from "./header.component";

const header = angular
  .module('header',[])
  .component('header',headerComponent)
  .name;

export default header;
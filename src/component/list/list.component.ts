import controller from './list.controller';
const listComponent = {
  template : `<ul>
      <li ng-repeat="lang in $ctrl.languages track by $index">
        {{::lang.name}}
      </li>
    </ul>`,
  controller
};

export default listComponent;
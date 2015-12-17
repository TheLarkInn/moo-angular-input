import template from './mooInput.html';
import controller from './mooInput.controller';

let mooInputComponent = function () {
  return {
    restrict: 'E',
    scope: {
      inputModel: '=ngModel',
      tailAddOn: '@?',
      tailAddOnClass: '@?',
      tailAddOnIcon: '@?',
      headAddOn: '@?',
      headAddOnClass: '@?',
      headAddOnIcon: '@?',
      label: '@?',
      labelClass: '@?',
      detail: '@?',
      type: '@?'
    },
    template,
    controller,
    controllerAs: 'mooInputCtrl',
    bindToController: true,
    compile: function compileFn(tElement, tAttrs) {
      return {
        pre: function preLinkFn(scope, element, attrs) {

        }, 
        post: function postLinkFn(scope, element, attrs) {

        }
      }
    }
  };
};

export default mooInputComponent;

export default class MooInputController {

  static $inject = ['$attrs'];

  constructor($attrs) {
    this.name = 'mooInput';

    this.isLargeInput = function isLargeInputFn() {
      return $attrs.hasOwnProperty('large') || $attrs.hasOwnProperty('lg');
    }
    
    this.isSmallInput = function isSmallInputFn() {
      return $attrs.hasOwnProperty('small') || $attrs.hasOwnProperty('sm');
    }
    
    this.isExtraSmallInput = function isExtraSmallInputFn() {
      return $attrs.hasOwnProperty('extraSmall') || $attrs.hasOwnProperty('xs');
    }
    
    this.getInputType = function getInputTypeFn() {
      return this.type && this.type !== '' ? this.type : 'text';
    };

    this.shouldShowHeadAddOn = function shouldShowHeadAddOnFn() {
      return this.headAddOn && this.headAddOn !== '' || this.headAddOnIcon && this.headAddOnIcon !== '';
    };

    this.shouldShowTailAddOn  = function shouldShowTailAddOnFn() {
      return this.tailAddOn && this.tailAddOn !== '' || this.tailAddOnIcon && this.tailAddOnIcon !== '';
    };

    this.shouldShowLabel  = function shouldShowLabelFn() {
      return this.label && this.label !== '';
    };

    this.shouldShowDetail  = function shouldShowDetailFn() {
      return this.detail && this.detail !== '';
    };

    this.inputNgClassObject = {
      'Field--lg': this.isLargeInput(),
      'Field--sm': this.isSmallInput(),
      'Field--xs': this.isExtraSmallInput()
    }


  }
}

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mooInput = __webpack_require__(1);
	
	var _mooInput2 = _interopRequireDefault(_mooInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var moduleName = 'mooAngular.input';
	var mod = angular.module(moduleName, []);
	
	(0, _mooInput2.default)(mod);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooInput = __webpack_require__(2);
	
	var _mooInput2 = _interopRequireDefault(_mooInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (app) {
	  app.directive('mooInput', _mooInput2.default);
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _mooInput = __webpack_require__(3);
	
	var _mooInput2 = _interopRequireDefault(_mooInput);
	
	var _mooInput3 = __webpack_require__(4);
	
	var _mooInput4 = _interopRequireDefault(_mooInput3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var mooInputComponent = function mooInputComponent() {
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
	    template: _mooInput2.default,
	    controller: _mooInput4.default,
	    controllerAs: 'mooInputCtrl',
	    bindToController: true,
	    compile: function compileFn(tElement, tAttrs) {
	      return {
	        pre: function preLinkFn(scope, element, attrs) {},
	        post: function postLinkFn(scope, element, attrs) {}
	      };
	    }
	  };
	};
	
	exports.default = mooInputComponent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"mooInput Field u-pV0 u-cf\" ng-class=\"mooInputCtrl.inputNgClassObject\">\n  <label ng-if=\"mooInputCtrl.shouldShowLabel()\" for=\"field1\" ng-class=\"mooInputCtrl.labelClass\" class=\"Field-label\">{{mooInputCtrl.label}}</label>\n  <div class=\"Field-addonBox\">\n    <span ng-if=\"mooInputCtrl.shouldShowHeadAddOn()\" ng-class=\"mooInputCtrl.headAddOnClass + ' ' + mooInputCtrl.headAddOnIcon\" class=\"Field-addon head\">\n      {{mooInputCtrl.headAddOn}}\n    </span>\n    <input ng-model=\"mooInputCtrl.inputModel\" type=\"mooInputCtrl.getInputType()\" class=\"Input\" />\n    <span ng-if=\"mooInputCtrl.shouldShowTailAddOn()\" ng-class=\"mooInputCtrl.tailAddOnClass + ' ' + mooInputCtrl.tailAddOnIcon\" class=\"Field-addon tail u-bgWhite\">\n      {{mooInputCtrl.tailAddOn}}\n    </span>\n  </div>\n  <span ng-if=\"mooInputCtrl.shouldShowDetail()\" class=\"Field-detail\">{{mooInputCtrl.detail}}</span>\n</div>";

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MooInputController = function MooInputController($attrs) {
	  _classCallCheck(this, MooInputController);
	
	  this.name = 'mooInput';
	
	  this.isLargeInput = function isLargeInputFn() {
	    return $attrs.hasOwnProperty('large') || $attrs.hasOwnProperty('lg');
	  };
	
	  this.isSmallInput = function isSmallInputFn() {
	    return $attrs.hasOwnProperty('small') || $attrs.hasOwnProperty('sm');
	  };
	
	  this.isExtraSmallInput = function isExtraSmallInputFn() {
	    return $attrs.hasOwnProperty('extraSmall') || $attrs.hasOwnProperty('xs');
	  };
	
	  this.getInputType = function getInputTypeFn() {
	    return this.type && this.type !== '' ? this.type : 'text';
	  };
	
	  this.shouldShowHeadAddOn = function shouldShowHeadAddOnFn() {
	    return this.headAddOn && this.headAddOn !== '' || this.headAddOnIcon && this.headAddOnIcon !== '';
	  };
	
	  this.shouldShowTailAddOn = function shouldShowTailAddOnFn() {
	    return this.tailAddOn && this.tailAddOn !== '' || this.tailAddOnIcon && this.tailAddOnIcon !== '';
	  };
	
	  this.shouldShowLabel = function shouldShowLabelFn() {
	    return this.label && this.label !== '';
	  };
	
	  this.shouldShowDetail = function shouldShowDetailFn() {
	    return this.detail && this.detail !== '';
	  };
	
	  this.inputNgClassObject = {
	    'Field--lg': this.isLargeInput(),
	    'Field--sm': this.isSmallInput(),
	    'Field--xs': this.isExtraSmallInput()
	  };
	};
	
	MooInputController.$inject = ['$attrs'];
	exports.default = MooInputController;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
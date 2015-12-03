'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:ValidationsCtrl
 * @description
 * # ValidationsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('ValidationsCtrl', function ($scope) {
	var mynumberInput = new tds_lib.NumberInput(document.getElementById("numberInput"));
	mynumberInput.setMaxValue(1000);
	mynumberInput.setMinValue(-50);
	mynumberInput.setInputValue("-40,2");
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Validations', '/validations', 'tds-lib-icon-validations');
  }
]);
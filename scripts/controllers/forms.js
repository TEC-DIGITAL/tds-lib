'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('FormsCtrl', function ($scope) {
	// TODO  	
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Forms', '/forms', 'tds-lib-icon-formelements');
  }
]);
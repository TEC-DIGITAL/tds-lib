'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:SpinnerCtrl
 * @description
 * # SpinnerCtrl
 * Controller of the guidedToursApp &tcrvnc@$4p1ri
 */
angular.module('guidedToursApp')
  .controller('SpinnerCtrl', function ($scope) {
  	$scope.$on('$viewContentLoaded', function() {
  		var mySpinner1 = new tds_lib.Spinner(document.getElementsByClassName('tds-lib_form_spinner')[0]);
  		mySpinner1.setMaxValue(1000);
  		mySpinner1.setMinValue(-50);
  		mySpinner1.setSpinnerValue(7);
      hljs.parseHtmlTags();
      hljs.initHighlighting();
  	});
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Spinner', '/spinner', 'tds-lib-icon-spinner');
  }
]);
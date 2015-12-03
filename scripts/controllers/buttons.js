'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:ButtonsCtrl
 * @description
 * # ButtonsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('ButtonsCtrl', function ($scope, translationService, $sce) {
    translationService.getTranslation($scope,'en-US');
    $scope.$on('$viewContentLoaded', function() {
    	/*jshint camelcase: false */
    	if (typeof $scope._l.buttons_html_text === 'string') {
	    	$scope._l.buttons_html_text = $sce.trustAsHtml($scope._l.buttons_html_text);
    	}
    	/*jshint camelcase: true */
    });
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Buttons', '/buttons', 'tds-lib-icon-buttons');
  }
]);
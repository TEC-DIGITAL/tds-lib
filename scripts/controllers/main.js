'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.actualTab = 'start';
    $scope.setTab = function(tabName) {
    	$scope.actualTab = tabName;
    };
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Get Started', '/', 'tds-lib-icon-home');
  }
]);

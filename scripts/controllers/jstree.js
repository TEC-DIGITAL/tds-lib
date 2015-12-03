'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:JstreeCtrl
 * @description
 * # JstreeCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('JstreeCtrl', function ($scope, translationService) {
  	translationService.getTranslation($scope,'en-US');
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('JS Tree', '/jstree', 'tds-lib-icon-jsTree');
  }
]);
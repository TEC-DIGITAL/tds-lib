'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:CommonlibsCtrl
 * @description
 * # CommonlibsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('CommonlibsCtrl', function ($scope, translationService) {
    translationService.getTranslation($scope,'en-US');
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Common Libraries', '/commonlibs', 'tds-lib-icon-commonlibraries');
  }
]);
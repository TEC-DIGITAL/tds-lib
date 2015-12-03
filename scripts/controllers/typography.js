'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:TypographyCtrl
 * @description
 * # TypographyCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('TypographyCtrl', function ($scope) {
    // TODO
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Typography', '/typography', 'tds-lib-icon-typography');
  }
]);
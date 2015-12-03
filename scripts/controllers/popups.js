'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:PopupsCtrl
 * @description
 * # PopupsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('PopupsCtrl', function ($scope) {
    // TODO
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Pop Ups', '/popups', 'tds-lib-icon-popups');
  }
]);


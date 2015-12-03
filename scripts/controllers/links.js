'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:LinksCtrl
 * @description
 * # LinksCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('LinksCtrl', function ($scope, translationService) {
  	translationService.getTranslation($scope,'en-US');
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Links', '/links', 'tds-lib-icon-linkselements');
  }
]);
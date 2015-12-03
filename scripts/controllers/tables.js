'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:TablesCtrl
 * @description
 * # TablesCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('TablesCtrl', function ($scope) {
    $('#dataTableExample').dataTable();
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Tables', '/tables', 'tds-lib-icon-tables');
  }
]);
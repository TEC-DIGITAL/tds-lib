'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:DatepickerCtrl
 * @description
 * # DatepickerCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('DatepickerCtrl', function ($scope) {
  	$scope.$on('$viewContentLoaded', function() {
  		/* jshint ignore:start */
		$.datepicker.regional['es'] =
			{    
				monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
				'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
				dayNamesMin: ['D','L','K','M','J','V','S'],
				dateFormat: 'dd/mm/yy', firstDay: 0
			};

			$.datepicker.setDefaults($.datepicker.regional['es']);

			$( "#date" ).datepicker({
				showOtherMonths: true,
				selectOtherMonths: true}
			);
		/* jshint ignore:end */
	});
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
  	MenuService.addMenuItem('Datepicker', '/datepicker', 'tds-lib-icon-datepicker');
  }
]);
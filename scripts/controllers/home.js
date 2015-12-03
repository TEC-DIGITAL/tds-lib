'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('HomeCtrl', function ($scope,translationService,$location, MenuService) {
    translationService.getTranslation($scope,'en-US');
	$scope.$on('$viewContentLoaded', function() {
		$('#mainmenu').tooltip();
		$scope.actualView = $location.path();
		$scope.menuList = MenuService.getMenu();
	});
	$scope.isActive = function(url) {
		return $scope.actualView === url;
	};
	$scope.updateView = function(url) {
		if(typeof url !== 'undefined') {
			$scope.actualView = url;
		}
		$location.path($scope.actualView); 
	};
  });
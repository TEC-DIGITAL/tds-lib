'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:TimepickerCtrl
 * @description
 * # TimepickerCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('TimepickerCtrl', function ($scope) {
  	$scope.usuario = {
  		nombre: 'Víctor',
  		permisos: [
  			'admin','teacher'
  		]
  	};
  	$scope.eventos = [
  		{id: 2, nombre: 'Evento uno'},
  		{id: 4, nombre: 'Evento dos'},
  		{id: 1, nombre: 'Evento tres'},
  		{id: 3, nombre: 'Evento cuatro'},
  		{id: 5, nombre: 'Evento cinco'}
  	];
    $scope.hacerAlgo = function () {
		$scope.eventos = [
  		{id: 2, nombre: 'Evento uno'},
  		{id: 2, nombre: 'Evento dos'},
  		{id: 2, nombre: 'Evento unsdfdsf'},
  		{id: 4, nombre: 'Evento dos'},
  		{id: 1, nombre: 'Evento tres'},
  		{id: 3, nombre: 'Evento cuatro'},
  		{id: 5, nombre: 'Evento cinco'}
		];
    };
    $scope.hacerOtraCosa = function () {
    	$scope.eventos[0].nombre = 'este es otro nombre';
    };
  });

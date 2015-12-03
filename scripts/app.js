'use strict';

/**
 * @ngdoc overview
 * @name guidedToursApp
 * @description
 * # guidedToursApp
 *
 * Main module of the application.
 */
angular
  .module('guidedToursApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/buttons', {
        templateUrl: 'views/buttons.html',
        controller: 'ButtonsCtrl'
      })
      .when('/commonlibs', {
        templateUrl: 'views/commonlibs.html',
        controller: 'CommonlibsCtrl'
      })
      .when('/datepicker', {
        templateUrl: 'views/datepicker.html',
        controller: 'DatepickerCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/icons', {
        templateUrl: 'views/icons.html',
        controller: 'IconsCtrl'
      })
      .when('/jstree', {
        templateUrl: 'views/jstree.html',
        controller: 'JstreeCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      })
      .when('/popups', {
        templateUrl: 'views/popups.html',
        controller: 'PopupsCtrl'
      })
      .when('/spinner', {
        templateUrl: 'views/spinner.html',
        controller: 'SpinnerCtrl'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html',
        controller: 'TabsCtrl'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl'
      })
      .when('/validations', {
        templateUrl: 'views/validations.html',
        controller: 'ValidationsCtrl'
      })
      .when('/timepicker', {
        templateUrl: 'views/timepicker.html',
        controller: 'TimepickerCtrl'
      })
      .when('/timepicker', {
        templateUrl: 'views/timepicker.html',
        controller: 'TimepickerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

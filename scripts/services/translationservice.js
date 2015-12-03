'use strict';

/**
 * @ngdoc service
 * @name guidedToursApp.translationService
 * @description
 * # translationService
 * Service in the guidedToursApp.
 */
angular.module('guidedToursApp')
  .service('translationService', function ($resource) {
	this.getTranslation = function($scope, language) {
      var languageFilePath = 'lang/catlog_' + language + '.json';
      $resource(languageFilePath).get(function (data) {
        $scope._l = data;
      });
    };
  });

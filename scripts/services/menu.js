'use strict';

/**
 * @ngdoc service
 * @name Menu service
 * @description Return the main menu navigation
 * # menu
 * Service in the tds-lib app
 */
angular.module('guidedToursApp')
  .service('MenuService', function ($location) {
  	this.items = [];
	this.addMenuItem = function(titleP, urlP, iconP) {
      this.items.push({title: titleP, url: urlP, icon: iconP});
    };
    this.getMenu = function() {
      return this.items;
    };
  });

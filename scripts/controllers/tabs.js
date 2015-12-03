'use strict';

/**
 * @ngdoc function
 * @name guidedToursApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('TabsCtrl', function ($scope) {
    $scope.$on('$viewContentLoaded', function() {
      var myInputExample1 = new  tds_lib.Tab( document.getElementById('example'),{ openAttr: true } );
      var myInputExample1 = new  tds_lib.Tab( document.getElementById('example2'),{ openAttr: false } );
      hljs.parseHtmlTags();
      hljs.initHighlighting();
    });
    // Change Event
    document.querySelector("#myTab").addEventListener("change", function(e){
      console.log("The tab `open` state is "+e.detail.open);
    });
    // Events inside tab woundt be loose
    var counter = 0;
    document.querySelector("#add").addEventListener("click",function(){
      // Create tab with JavaScript
      var node = document.createElement("tds-lib-tab");
      node.setAttribute("tabname","Añadido por JS - " + counter);
      document.querySelector("#contenido").appendChild(node);
      // Show only if the element is ready
      node.className = "wait-till-loaded";
      // Add content to tab with JavaScript
      var textnode = document.createTextNode("Counter: "+counter);
      node.appendChild(textnode);
      counter ++;
    });
    // Set Content HTML
    document.querySelector("#set").addEventListener("click",function(){
      document.querySelector("#myTab").setContent("<p>Hello World!</p>");
    });
    // Set Content Object
    document.querySelector("#setO").addEventListener("click",function(){
      document.querySelector("#myTab").setContent(document.querySelector("#tempCont"));
      document.querySelector("#tempCont").style.display = "block";
    });
    // Disable tab
    document.querySelector("#dis").addEventListener("click",function(){
      document.querySelector("#myTab").toggleState();
    });
    // Open
    document.querySelector("#open").addEventListener("click",function(){
      document.querySelector("#myTab").openTab();
    });
    // Close
    document.querySelector("#close").addEventListener("click",function(){
      document.querySelector("#myTab").closeTab();
    });
    $(function () {
      $(".section-title").each(function(){
        $(this).click(function(){
          if ($(this).parent().hasClass("hidden-section")) {
            $(this).parent().removeClass("hidden-section");
          } else {
            $(this).parent().addClass("hidden-section");
          }
        });
      });
      $('[data-toggle="tooltip"]').tooltip()
    });
  });
angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
    MenuService.addMenuItem('Tabs', '/tabs', 'tds-lib-icon-tabs');
  }
]);
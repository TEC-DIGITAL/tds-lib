'use strict';

angular.module('guidedToursApp').run(['MenuService',
  function (MenuService) {
    // Add the element icon to the menu
  	MenuService.addMenuItem('Icons', '/icons', 'tds-lib-icon-icons');
  }
]);

/**
 * @ngdoc function
 * @name guidedToursApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the guidedToursApp
 */
angular.module('guidedToursApp')
  .controller('IconsCtrl', function ($scope, MenuService, translationService) {
  	translationService.getTranslation($scope,'en-US');
	$scope.iconsList = [
		'tds-lib-icon-add',
		'tds-lib-icon-alert',
		'tds-lib-icon-assesments_module',
		'tds-lib-icon-backward',
		'tds-lib-icon-balance',
		'tds-lib-icon-boxes',
		'tds-lib-icon-calendar',
		'tds-lib-icon-cellphone',
		'tds-lib-icon-chat',
		'tds-lib-icon-check_boxes',
		'tds-lib-icon-checkbox_check_selected',
		'tds-lib-icon-checkbox_selected',
		'tds-lib-icon-checkbox',
		'tds-lib-icon-circles',
		'tds-lib-icon-close_window',
		'tds-lib-icon-closed',
		'tds-lib-icon-collapse',
		'tds-lib-icon-comments',
		'tds-lib-icon-commercial',
		'tds-lib-icon-communities',
		'tds-lib-icon-configuration',
		'tds-lib-icon-copy',
		'tds-lib-icon-corrected',
		'tds-lib-icon-course_schedule',
		'tds-lib-icon-cut',
		'tds-lib-icon-delete',
		'tds-lib-icon-delivered_late',
		'tds-lib-icon-delivered_on_time',
		'tds-lib-icon-deliveries',
		'tds-lib-icon-di_context',
		'tds-lib-icon-display',
		'tds-lib-icon-download_folder',
		'tds-lib-icon-download',
		'tds-lib-icon-duplicate_rubric',
		'tds-lib-icon-e-mail',
		'tds-lib-icon-edit',
		'tds-lib-icon-evaluated',
		'tds-lib-icon-evaluation_items',
		'tds-lib-icon-excel',
		'tds-lib-icon-excused_absence',
		'tds-lib-icon-expand_left',
		'tds-lib-icon-expand_right',
		'tds-lib-icon-expand',
		'tds-lib-icon-export_repository',
		'tds-lib-icon-export',
		'tds-lib-icon-facebook',
		'tds-lib-icon-favorite_selected',
		'tds-lib-icon-favorite_unselected',
		'tds-lib-icon-filters',
		'tds-lib-icon-folder',
		'tds-lib-icon-forward',
		'tds-lib-icon-free_answer_question',
		'tds-lib-icon-google_plus',
		'tds-lib-icon-graphic',
		'tds-lib-icon-group_into_category',
		'tds-lib-icon-help',
		'tds-lib-icon-history_changes',
		'tds-lib-icon-home',
		'tds-lib-icon-image',
		'tds-lib-icon-import_repository',
		'tds-lib-icon-import',
		'tds-lib-icon-information',
		'tds-lib-icon-learning_styles',
		'tds-lib-icon-left',
		'tds-lib-icon-load',
		'tds-lib-icon-matrix',
		'tds-lib-icon-menu1',
		'tds-lib-icon-menu2',
		'tds-lib-icon-new',
		'tds-lib-icon-news',
		'tds-lib-icon-no',
		'tds-lib-icon-not_shared',
		'tds-lib-icon-not_visible',
		'tds-lib-icon-notifications',
		'tds-lib-icon-notification',
		'tds-lib-icon-open',
		'tds-lib-icon-opened',
		'tds-lib-icon-package',
		'tds-lib-icon-paste',
		'tds-lib-icon-permissions',
		'tds-lib-icon-present',
		'tds-lib-icon-preview',
		'tds-lib-icon-print',
		'tds-lib-icon-private',
		'tds-lib-icon-profile',
		'tds-lib-icon-public',
		'tds-lib-icon-quotes',
		'tds-lib-icon-radio_button_selected',
		'tds-lib-icon-rating',
		'tds-lib-icon-recognition',
		'tds-lib-icon-redo',
		'tds-lib-icon-reference_material',
		'tds-lib-icon-refresh',
		'tds-lib-icon-rename',
		'tds-lib-icon-review',
		'tds-lib-icon-right',
		'tds-lib-icon-save',
		'tds-lib-icon-search',
		'tds-lib-icon-selectable',
		'tds-lib-icon-selected_boxes',
		'tds-lib-icon-selected_for_preregistration',
		'tds-lib-icon-send_answer',
		'tds-lib-icon-send_records',
		'tds-lib-icon-share',
		'tds-lib-icon-shared',
		'tds-lib-icon-shuffle',
		'tds-lib-icon-sound',
		'tds-lib-icon-specific_help',
		'tds-lib-icon-telephone',
		'tds-lib-icon-twitter',
		'tds-lib-icon-underived',
		'tds-lib-icon-undo',
		'tds-lib-icon-ungroup_category',
		'tds-lib-icon-unjustified_absence',
		'tds-lib-icon-upload_corrected',
		'tds-lib-icon-upload',
		'tds-lib-icon-user',
		'tds-lib-icon-visible',
		'tds-lib-icon-yes',
		'tds-lib-icon-zero_rate',
		'tds-lib-icon-zoomin',
		'tds-lib-icon-zoomout',
		'tds-lib-icon-fb',
		'tds-lib-icon-google',
		'tds-lib-icon-investigacion',
		'tds-lib-icon-mail',
		'tds-lib-icon-noticias',
		'tds-lib-icon-PO',
		'tds-lib-icon-telefono',
		'tds-lib-icon-twitter2',
		'tds-lib-icon-YT',
		'tds-lib-icon-arrow_thin',
		'tds-lib-icon-breadcrumb_icon',
		'tds-lib-icon-archivoadjunto',
		'tds-lib-icon-estadoanterior',
		'tds-lib-icon-estadosiguiente',
		'tds-lib-icon-movedown',
		'tds-lib-icon-moveup',
		'tds-lib-icon-notes'
	];
  });

(function() {
  angular.module('easy.form.default').config(function($easyInputProvider) {
    $easyInputProvider.registerWrapper('vertical_form', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical_form.html'
    });
    $easyInputProvider.registerWrapper('vertical_file_input', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical_file_input.html'
    });
    $easyInputProvider.registerWrapper('vertical_boolean', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical_boolean.html'
    });
    $easyInputProvider.registerWrapper('vertical_radio_and_checkboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical_radio_and_checkboxes.html'
    });
    $easyInputProvider.registerWrapper('horizontal_form', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal_form.html'
    });
    $easyInputProvider.registerWrapper('horizontal_file_input', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal_file_input.html'
    });
    $easyInputProvider.registerWrapper('horizontal_boolean', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal_boolean.html'
    });
    $easyInputProvider.registerWrapper('horizontal_radio_and_checkboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal_radio_and_checkboxes.html'
    });
    $easyInputProvider.registerWrapper('inline_form', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal_radio_and_checkboxes.html'
    });
    $easyInputProvider.registerWrapper('blank', {
      templateUrl: 'easy-form/templates/input-wrappers/blank.html'
    });
    return $easyInputProvider.setDefaultWrapper('horizontal_form');
  });

}).call(this);

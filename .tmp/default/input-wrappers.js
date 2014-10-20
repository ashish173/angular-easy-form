(function() {
  angular.module('easy.form.default').config(function($easyInputProvider) {
    $easyInputProvider.registerWrapper('vertical-form', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-form.html'
    });
    $easyInputProvider.registerWrapper('vertical-file-input', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-file-input.html'
    });
    $easyInputProvider.registerWrapper('vertical-boolean', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-boolean.html'
    });
    $easyInputProvider.registerWrapper('vertical-radio-and-checkboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('horizontal-form', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-form.html',
      labelClass: ['col-xs-3'],
      controlClass: ['col-xs-9']
    });
    $easyInputProvider.registerWrapper('horizontal-file-input', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-file-input.html'
    });
    $easyInputProvider.registerWrapper('horizontal-boolean', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-boolean.html'
    });
    $easyInputProvider.registerWrapper('horizontal-radio-and-checkboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('inline-form', {
      templateUrl: 'easy-form/templates/input-wrappers/inline-form.html'
    });
    $easyInputProvider.registerWrapper('none', {
      templateUrl: 'easy-form/templates/input-wrappers/none.html'
    });
    return $easyInputProvider.setDefaultWrapper('vertical-form');
  });

}).call(this);

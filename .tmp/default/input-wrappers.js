(function() {
  angular.module('easy.form.default').config(function($easyInputProvider) {
    $easyInputProvider.registerWrapper('verticalForm', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-form.html'
    });
    $easyInputProvider.registerWrapper('verticalFileInput', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-file-input.html'
    });
    $easyInputProvider.registerWrapper('verticalBoolean', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-boolean.html'
    });
    $easyInputProvider.registerWrapper('verticalRadioAndCheckboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('horizontalForm', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-form.html'
    });
    $easyInputProvider.registerWrapper('horizontalFileInput', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontalFileInput.html'
    });
    $easyInputProvider.registerWrapper('horizontalBoolean', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontalBoolean.html'
    });
    $easyInputProvider.registerWrapper('horizontalRadioAndCheckboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('inlineForm', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontalRadioAndCheckboxes.html'
    });
    $easyInputProvider.registerWrapper('none', {
      templateUrl: 'easy-form/templates/input-wrappers/none.html'
    });
    return $easyInputProvider.setDefaultWrapper('verticalForm');
  });

}).call(this);

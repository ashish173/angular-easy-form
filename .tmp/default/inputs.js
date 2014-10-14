(function() {
  angular.module('easy.form.default').config(function($easyInputProvider) {
    $easyInputProvider.registerInput('checkbox', {
      templateUrl: 'easy-form/templates/inputs/checkbox.html'
    });
    $easyInputProvider.registerInput('checklist', {
      templateUrl: 'easy-form/templates/inputs/checklist.html'
    });
    $easyInputProvider.registerInput('radiolist', {
      templateUrl: 'easy-form/templates/inputs/radiolist.html'
    });
    $easyInputProvider.registerInput('select', {
      templateUrl: 'easy-form/templates/inputs/select.html'
    });
    $easyInputProvider.registerInput('select2', {
      templateUrl: 'easy-form/templates/inputs/select2.html'
    });
    $easyInputProvider.registerInput('date', {
      templateUrl: 'easy-form/templates/inputs/date.html'
    });
    $easyInputProvider.registerInput('date_picker', {
      templateUrl: 'template/easy-form/templates/inputs/date_picker.html'
    });
    $easyInputProvider.registerInput('date_select', {
      templateUrl: 'easy-form/templates/inputs/date_select.html'
    });
    $easyInputProvider.registerInput('month_picker', {
      templateUrl: 'easy-form/templates/inputs/month_picker.html'
    });
    $easyInputProvider.registerInput('month_select', {
      templateUrl: 'easy-form/templates/inputs/month_select.html'
    });
    $easyInputProvider.registerInput('year_picker', {
      templateUrl: 'easy-form/templates/inputs/year_picker.html'
    });
    $easyInputProvider.registerInput('year_select', {
      templateUrl: 'easy-form/templates/inputs/year_select.html'
    });
    $easyInputProvider.registerInput('text', {
      templateUrl: 'easy-form/templates/inputs/text.html'
    });
    $easyInputProvider.registerInput('textarea', {
      templateUrl: 'easy-form/templates/inputs/textarea.html'
    });
    return $easyInputProvider.setDefaultInput('text');
  });

}).call(this);

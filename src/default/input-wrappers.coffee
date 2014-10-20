angular.module 'easy.form.default'

.config ($easyInputProvider) ->
  # ----------------------------------------
  # vertical_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical-form',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-form.html'

  # ----------------------------------------
  # vertical_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical-file-input',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-file-input.html'

  # ----------------------------------------
  # vertical_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical-boolean',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-boolean.html'

  # ----------------------------------------
  # vertical_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical-radio-and-checkboxes',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-radio-and-checkboxes.html'

  # ----------------------------------------
  # horizontal_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal-form',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal-form.html'
    labelClass: ['col-xs-3']
    controlClass: ['col-xs-9']

  # ----------------------------------------
  # horizontal_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal-file-input',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal-file-input.html'

  # ----------------------------------------
  # horizontal_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal-boolean',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal-boolean.html'

  # ----------------------------------------
  # horizontal_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal-radio-and-checkboxes',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal-radio-and-checkboxes.html'

  # ----------------------------------------
  # inline_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'inline-form',
    templateUrl: 'easy-form/templates/input-wrappers/inline-form.html'

  # ----------------------------------------
  # blank
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'none',
    templateUrl: 'easy-form/templates/input-wrappers/none.html'

  # ----------------------------------------
  # set default wrapper
  # ----------------------------------------
  $easyInputProvider.setDefaultWrapper 'vertical-form'

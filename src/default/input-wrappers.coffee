angular.module 'easy.form.default'

.config ($easyInputProvider) ->
  # ----------------------------------------
  # vertical_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'verticalForm',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-form.html'

  # ----------------------------------------
  # vertical_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'verticalFileInput',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-file-input.html'

  # ----------------------------------------
  # vertical_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'verticalBoolean',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-boolean.html'

  # ----------------------------------------
  # vertical_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'verticalRadioAndCheckboxes',
    templateUrl: 'easy-form/templates/input-wrappers/vertical-radio-and-checkboxes.html'

  # ----------------------------------------
  # horizontal_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontalForm',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal-form.html'

  # ----------------------------------------
  # horizontal_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontalFileInput',
    templateUrl: 'easy-form/templates/input-wrappers/horizontalFileInput.html'

  # ----------------------------------------
  # horizontal_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontalBoolean',
    templateUrl: 'easy-form/templates/input-wrappers/horizontalBoolean.html'

  # ----------------------------------------
  # horizontal_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontalRadioAndCheckboxes',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal-radio-and-checkboxes.html'

  # ----------------------------------------
  # inline_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'inlineForm',
    templateUrl: 'easy-form/templates/input-wrappers/horizontalRadioAndCheckboxes.html'

  # ----------------------------------------
  # blank
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'none',
    templateUrl: 'easy-form/templates/input-wrappers/none.html'

  # ----------------------------------------
  # set default wrapper
  # ----------------------------------------
  $easyInputProvider.setDefaultWrapper 'verticalForm'

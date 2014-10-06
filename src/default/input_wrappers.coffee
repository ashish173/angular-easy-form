angular.module 'easy.form.default'

.config ($easyInputProvider) ->
  # ----------------------------------------
  # vertical_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_form',
    templateUrl: 'easy-form/templates/input-wrappers/vertical_form.html'

  # ----------------------------------------
  # vertical_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_file_input',
    templateUrl: 'easy-form/templates/input-wrappers/vertical_file_input.html'

  # ----------------------------------------
  # vertical_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_boolean',
    templateUrl: 'easy-form/templates/input-wrappers/vertical_boolean.html'

  # ----------------------------------------
  # vertical_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_radio_and_checkboxes',
    templateUrl: 'easy-form/templates/input-wrappers/vertical_radio_and_checkboxes.html'

  # ----------------------------------------
  # horizontal_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_form',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal_form.html'

  # ----------------------------------------
  # horizontal_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_file_input',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal_file_input.html'

  # ----------------------------------------
  # horizontal_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_boolean',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal_boolean.html'

  # ----------------------------------------
  # horizontal_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_radio_and_checkboxes',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal_radio_and_checkboxes.html'

  # ----------------------------------------
  # inline_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'inline_form',
    templateUrl: 'easy-form/templates/input-wrappers/horizontal_radio_and_checkboxes.html'

  # ----------------------------------------
  # blank
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'blank',
    templateUrl: 'easy-form/templates/input-wrappers/blank.html'

  # ----------------------------------------
  # set default wrapper
  # ----------------------------------------
  $easyInputProvider.setDefaultWrapper 'horizontal_form'

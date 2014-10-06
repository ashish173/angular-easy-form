angular.module 'easy.form.default'

.config ($easyInputProvider) ->
  # ----------------------------------------
  # vertical_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_form',
    templateUrl: 'template/easy-form/input-wrappers/vertical_form.html'

  # ----------------------------------------
  # vertical_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_file_input',
    templateUrl: 'template/easy-form/input-wrappers/vertical_file_input.html'

  # ----------------------------------------
  # vertical_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_boolean',
    templateUrl: 'template/easy-form/input-wrappers/vertical_boolean.html'

  # ----------------------------------------
  # vertical_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'vertical_radio_and_checkboxes',
    templateUrl: 'template/easy-form/input-wrappers/vertical_radio_and_checkboxes.html'

  # ----------------------------------------
  # horizontal_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_form',
    templateUrl: 'template/easy-form/input-wrappers/horizontal_form.html'

  # ----------------------------------------
  # horizontal_file_input
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_file_input',
    templateUrl: 'template/easy-form/input-wrappers/horizontal_file_input.html'

  # ----------------------------------------
  # horizontal_boolean
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_boolean',
    templateUrl: 'template/easy-form/input-wrappers/horizontal_boolean.html'

  # ----------------------------------------
  # horizontal_radio_and_checkboxes
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'horizontal_radio_and_checkboxes',
    templateUrl: 'template/easy-form/input-wrappers/horizontal_radio_and_checkboxes.html'

  # ----------------------------------------
  # inline_form
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'inline_form',
    templateUrl: 'template/easy-form/input-wrappers/horizontal_radio_and_checkboxes.html'

  # ----------------------------------------
  # blank
  # ----------------------------------------
  $easyInputProvider.registerWrapper 'blank',
    templateUrl: 'template/easy-form/input-wrappers/blank.html'

  # ----------------------------------------
  # set default wrapper
  # ----------------------------------------
  $easyInputProvider.setDefaultWrapper 'horizontal_form'

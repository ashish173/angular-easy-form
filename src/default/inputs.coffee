angular.module 'easy.form.default'

.config ($easyInputProvider) ->
  # ----------------------------------------
  # checkbox
  # ----------------------------------------
  $easyInputProvider.registerInput 'checkbox',
    templateUrl: 'easy-form/templates/inputs/checkbox.html'

  # ----------------------------------------
  # checklist
  # ----------------------------------------
  $easyInputProvider.registerInput 'checklist',
    templateUrl: 'easy-form/templates/inputs/checklist.html'

  # ----------------------------------------
  # radiolist
  # ----------------------------------------
  $easyInputProvider.registerInput 'radiolist',
    templateUrl: 'easy-form/templates/inputs/radiolist.html'

  # ----------------------------------------
  # select
  # ----------------------------------------
  $easyInputProvider.registerInput 'select',
    templateUrl: 'easy-form/templates/inputs/select.html'

  # ----------------------------------------
  # select2
  # ----------------------------------------
  $easyInputProvider.registerInput 'select2',
    templateUrl: 'easy-form/templates/inputs/select2.html'

  # ----------------------------------------
  # date
  # ----------------------------------------
  $easyInputProvider.registerInput 'date',
    templateUrl: 'easy-form/templates/inputs/date.html'

  # ----------------------------------------
  # date_picker
  # ----------------------------------------
  $easyInputProvider.registerInput 'date_picker',
    templateUrl: 'template/easy-form/templates/inputs/date_picker.html'

  # ----------------------------------------
  # date_select
  # ----------------------------------------
  $easyInputProvider.registerInput 'date_select',
    templateUrl: 'easy-form/templates/inputs/date_select.html'

  # ----------------------------------------
  # month_picker
  # ----------------------------------------
  $easyInputProvider.registerInput 'month_picker',
    templateUrl: 'easy-form/templates/inputs/month_picker.html'

  # ----------------------------------------
  # month_select
  # ----------------------------------------
  $easyInputProvider.registerInput 'month_select',
    templateUrl: 'easy-form/templates/inputs/month_select.html'

  # ----------------------------------------
  # year_picker
  # ----------------------------------------
  $easyInputProvider.registerInput 'year_picker',
    templateUrl: 'easy-form/templates/inputs/year_picker.html'

  # ----------------------------------------
  # year_select
  # ----------------------------------------
  $easyInputProvider.registerInput 'year_select',
    templateUrl: 'easy-form/templates/inputs/year_select.html'

  # ----------------------------------------
  # text
  # ----------------------------------------
  $easyInputProvider.registerInput 'text',
    templateUrl: 'easy-form/templates/inputs/text.html'

  # ----------------------------------------
  # textarea
  # ----------------------------------------
  $easyInputProvider.registerInput 'textarea',
    templateUrl: 'easy-form/templates/inputs/textarea.html'

  # ----------------------------------------
  # set default input
  # ----------------------------------------
  $easyInputProvider.setDefaultInput 'text'
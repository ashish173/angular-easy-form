angular.module 'easy.form.default'

.config ($easyInputProvider) ->
  # ----------------------------------------
  # checkbox
  # ----------------------------------------
  $easyInputProvider.registerInput 'checkbox',
    templateUrl: 'template/easy-form/inputs/checkbox.html'

  # ----------------------------------------
  # checklist
  # ----------------------------------------
  $easyInputProvider.registerInput 'checklist',
    templateUrl: 'template/easy-form/inputs/checklist.html'

  # ----------------------------------------
  # radiolist
  # ----------------------------------------
  $easyInputProvider.registerInput 'radiolist',
    templateUrl: 'template/easy-form/inputs/radiolist.html'

  # ----------------------------------------
  # select
  # ----------------------------------------
  $easyInputProvider.registerInput 'select',
    templateUrl: 'template/easy-form/inputs/select.html'

  # ----------------------------------------
  # select2
  # ----------------------------------------
  $easyInputProvider.registerInput 'select2',
    templateUrl: 'template/easy-form/inputs/select2.html'

  # ----------------------------------------
  # date
  # ----------------------------------------
  $easyInputProvider.registerInput 'date',
    templateUrl: 'template/easy-form/inputs/date.html'

  # ----------------------------------------
  # date_picker
  # ----------------------------------------
  $easyInputProvider.registerInput 'date_picker',
    templateUrl: 'template/easy-form/inputs/date_picker.html'

  # ----------------------------------------
  # date_select
  # ----------------------------------------
  $easyInputProvider.registerInput 'date_select',
    templateUrl: 'template/easy-form/inputs/date_select.html'

  # ----------------------------------------
  # month_picker
  # ----------------------------------------
  $easyInputProvider.registerInput 'month_picker',
    templateUrl: 'template/easy-form/inputs/month_picker.html'

  # ----------------------------------------
  # month_select
  # ----------------------------------------
  $easyInputProvider.registerInput 'month_select',
    templateUrl: 'template/easy-form/inputs/month_select.html'

  # ----------------------------------------
  # year_picker
  # ----------------------------------------
  $easyInputProvider.registerInput 'year_picker',
    templateUrl: 'template/easy-form/inputs/year_picker.html'

  # ----------------------------------------
  # year_select
  # ----------------------------------------
  $easyInputProvider.registerInput 'year_select',
    templateUrl: 'template/easy-form/inputs/year_select.html'

  # ----------------------------------------
  # text
  # ----------------------------------------
  $easyInputProvider.registerInput 'text',
    templateUrl: 'template/easy-form/inputs/text.html'

  # ----------------------------------------
  # textarea
  # ----------------------------------------
  $easyInputProvider.registerInput 'textarea',
    templateUrl: 'template/easy-form/inputs/textarea.html'

  # ----------------------------------------
  # set default input
  # ----------------------------------------
  $easyInputProvider.setDefaultInput 'text'
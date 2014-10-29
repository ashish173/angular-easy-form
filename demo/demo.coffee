app = angular.module 'demoApp', [
  'easy.form'
]

app.controller 'DemoCtrl', ($scope, $http) ->
  $scope.disabled = undefined

  $scope.checkboxOptions =
    checkbox:
      text: 'text of checkbox'

  $scope.checkboxesOptions =
    checkboxes:
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.checkboxesInlineOptions =
    checkboxes:
      inline: true
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.radiosOptions =
    radios:
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.radiosInlineOptions =
    radios:
      inline: true
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]


  $scope.selectOptions =
    select:
      collection: [ 'key1', 'key2', 'key3']

  $scope.selectSingleCustomizeSelectOptions =
    select:
      selectOptions: ->
        'item.text for item in options.select.collection'
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.selectMultipleOptions =
    select:
      multiple: true
      selectOptions: ->
        'item.text for item in options.select.collection'
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.uiSelectOptions =
    uiSelect:
      searchEnabled: false
      allowEmpty: true
      formatSelection: (item) ->
        item.text if item? and item.text?
      formatResult: (item) ->
        item.text if item? and item.text?
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.uiSelectSinglePropertyOptions =
    uiSelect:
      searchEnabled: false
      bindProperty: 'key'
      formatSelection: (item) ->
        item.text if item? and item.text?
      formatResult: (item) ->
        item.text if item? and item.text?
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.uiSelectMultipleOptions =
    uiSelect:
      multiple: true
      formatSelection: (item) ->
        item.text
      formatResult: (item) ->
        item.text
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.uiSelectRemoteOptions =
    uiSelect:
      formatSelection: (item) ->
        item.name
      formatResult: (item) ->
        item.name
      refresh: (address)->
        params =
          address: address
        $http.get("json/countries.json",
          params: params
        ).then (response) ->
          $scope.uiSelectRemoteOptions.uiSelect.collection = response.data

  $scope.demo =
    controls:
      inputs: {}
      checkboxes:
        checkbox: true
        checkboxes: []
        checkboxesInline: []
      uiSelect:
        basic:
          key: 'key1'
          text: 'option 1'
#        singleProperty: 'key1'
        multiple: [
          {
            key: 'key1'
            text: 'option 1'
          },
          {
            key: 'key2',
            text: 'option 2'
          }
        ]
        remote: {
            name: "Sudan",
            code: "SD"
          }

  $scope.enable = ->
    $scope.disabled = false

  $scope.disable = ->
    $scope.disabled = true

  $scope.submit = ->
    alert 'submitting'

  $scope.trigValidation = ->
    $scope.$broadcast 'trigge-validate'

  $scope.validCallback = ->
    alert('valid')

  $scope.invalidCallback = ->
    alert('invalid')

app.config ($easyInputProvider) ->
  $easyInputProvider.registerInput 'custom-input',
    templateUrl: 'easy-form/templates/inputs/custom-select.html',

app.run ($templateCache) ->
  $templateCache.put("easy-form/templates/inputs/month-select.html",
      "<div class=\"row\">\n" +
      "    <div class=\"col-xs-7\">\n" +
      "        <select class=\"form-control\" name=\"year-select\" ng-model=\"year\" ng-options=\"option.key as option.text for option in yearOptions\">\n" +
      "        </select>\n" +
      "    </div>\n" +
      "\n" +
      "    <div class=\"col-xs-6\">\n" +
      "        <select class=\"form-control\" name=\"month-select\" ng-model=\"month\" ng-options=\"option.key as option.text for option in monthOptions\">\n" +
      "        </select>\n" +
      "    </div>\n" +
      "\n" +
      "    <div class=\"col-xs-5\">\n" +
      "        <select class=\"form-control\" name=\"day-select\" ng-model=\"day\" ng-options=\"option.key as option.text for option in dayOptions\">\n" +
      "        </select>\n" +
      "    </div>\n" +
      "</div>")






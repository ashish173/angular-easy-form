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

  $scope.radiosOptions =
    radios:
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.selectOptions =
    select:
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.selectMultipleOptions =
    select:
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.uiSelectOptions =
    uiSelect:
      formatSelection: (item) ->
        item.text
      formatResult: (item) ->
        item.text
      collection: [
        {key: 'key1', text: 'option 1'}
        {key: 'key2', text: 'option 2'}
        {key: 'key3', text: 'option 3'}
      ]

  $scope.uiSelectMultipleOptions =
    uiSelect:
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






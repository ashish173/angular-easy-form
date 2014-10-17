app = angular.module 'demoApp', [
  'easy.form'
]

app.controller 'DemoCtrl', ($scope, $http) ->
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
      refresh: (address)->
        params =
          address: address
          sensor: false
        $http.get("http://maps.googleapis.com/maps/api/geocode/json",
          params: params
        ).then (response) ->
          $scope.uiSelectRemoteOptions.uiSelect.collection = []
          $scope.uiSelectRemoteOptions.uiSelect.collection.push(key: result.formatted_address, text: result.formatted_address) for result in response.data.results

  $scope.demo =
    controls:
      inputs: {}
      checkboxes:
        checkbox: true
        checkboxes: []
        checkboxesInline: []



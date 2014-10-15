
app = angular.module 'demoApp', [
  'easy.form'
]

app.controller 'DemoCtrl', ($scope) ->
  $scope.demo =
    controls:
      inputs: {}
      checkboxes: {}

  $scope.checkboxOptions =
    checkbox:
      text: 'text of checkbox'

  $scope.checkboxesOptions =
    checkboxes:
      list: [
        {value: 'key1', text: 'option 1'}
        {value: 'key2', text: 'option 2'}
        {value: 'key3', text: 'option 3'}
      ]

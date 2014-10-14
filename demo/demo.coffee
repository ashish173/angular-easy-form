
app = angular.module 'demoApp', [
  'ui.select2'

  'easy.form'
]

app.controller 'DemoCtrl', ($scope) ->
  $scope.demo =
    controls:
      inputs: {}

(function() {
  var app;

  app = angular.module('demoApp', ['easy.form']);

  app.controller('DemoCtrl', function($scope) {
    $scope.demo = {
      controls: {
        inputs: {},
        checkboxes: {}
      }
    };
    $scope.checkboxOptions = {
      checkbox: {
        text: 'text of checkbox'
      }
    };
    return $scope.checkboxesOptions = {
      checkboxes: {
        list: [
          {
            value: 'key1',
            text: 'option 1'
          }, {
            value: 'key2',
            text: 'option 2'
          }, {
            value: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
  });

}).call(this);

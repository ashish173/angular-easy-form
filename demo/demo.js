(function() {
  var app;

  app = angular.module('demoApp', ['ui.select2', 'easy.form']);

  app.controller('DemoCtrl', function($scope) {
    return $scope.demo = {
      controls: {
        inputs: {}
      }
    };
  });

}).call(this);

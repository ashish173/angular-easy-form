(function() {
  var Controller, Directive;

  Controller = (function() {
    function Controller() {}

    return Controller;

  })();

  Directive = (function() {
    function Directive($log) {
      ({
        controller: Controller,
        controllerAs: 'controller',
        require: '?ngModel',
        replace: true,
        restrict: 'E',
        scope: {
          model: '=ngModel',
          ngDisabled: '=',
          label: '=',
          placeholder: '=',
          options: '=',
          validCallback: '&',
          invalidCallback: '&'
        }
      });
    }

    return Directive;

  })();

  angular.module('easy.form.directives').directive("easyForm", Directive);

}).call(this);

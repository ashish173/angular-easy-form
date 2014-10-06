class Controller

class Directive
  constructor: ($log) ->
    controller: Controller
    controllerAs: 'controller'
    require: '?ngModel'
    replace: true
    restrict: 'E'
    scope:
      model: '=ngModel',
      ngDisabled: '=',
      label: '=',
      placeholder: '=',
      options: '=',
      validCallback: '&',
      invalidCallback: '&'


angular.module('easy.form.directives').directive "easyForm", Directive
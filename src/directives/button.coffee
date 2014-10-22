angular.module('easy.form.directives')
.directive "easySubmit", ($timeout, $parse, $easyValidation) ->
  priority: 1 # execute before ng-click (0)
  require: '?ngClick'
  link: (scope, element, attrs) ->
    form = $parse(attrs.easySubmit)(scope)

    $timeout ->
      # Disable ng-click event propagation
      element.off "click"
      element.on "click", (e) ->
        e.preventDefault()
        $easyValidation.validate(form).success ->
          $parse(attrs.ngClick) scope
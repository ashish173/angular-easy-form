(function() {
  angular.module('easy.form.directives').directive("easySubmit", function($timeout, $parse, $easyValidation) {
    return {
      priority: 1,
      require: '?ngClick',
      link: function(scope, element, attrs) {
        var form;
        form = $parse(attrs.easySubmit)(scope);
        return $timeout(function() {
          element.off("click");
          return element.on("click", function(e) {
            e.preventDefault();
            return $easyValidation.validate(form).success(function() {
              return $parse(attrs.ngClick)(scope);
            });
          });
        });
      }
    };
  });

}).call(this);

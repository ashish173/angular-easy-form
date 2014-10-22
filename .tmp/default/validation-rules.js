(function() {
  angular.module('easy.form.default').config(function($easyValidationProvider) {
    $easyValidationProvider.register('required', {
      expression: function(value) {
        return !!value;
      },
      messages: {
        invalid: "This should be required.",
        valid: "It's Required"
      },
      translate: true
    });
    $easyValidationProvider.register('url', {
      expression: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      messages: {
        invalid: "This should be url.",
        valid: "It's Url"
      },
      translate: true
    });
    $easyValidationProvider.register('email', {
      expression: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      messages: {
        invalid: "This should be email",
        valid: "It's email"
      },
      translate: true
    });
    return $easyValidationProvider.register('number', {
      expression: /^\d+$/,
      messages: {
        invalid: "This should be number",
        valid: "It's number"
      },
      translate: true
    });
  });

}).call(this);

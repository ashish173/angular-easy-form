(function() {
  'use strict';

  /**
    * @ngdoc overview
    * @name easy.form
    * @description
    * # easy.form
    *
    * Main module of the application.
   */
  angular.module('easy.form', ['checklist-model', 'ui.select', 'textAngular', 'monospaced.elastic', 'easy.form.directives', 'easy.form.providers', 'easy.form.templates', 'easy.form.default']);

  angular.module('easy.form.directives', []);

  angular.module('easy.form.providers', []);

  angular.module('easy.form.default', []);

}).call(this);
;(function() {
  'use strict';

  /**
    * @ngdoc service
    * @name easy.form.providers:$easyButton
    * @description
    * # $easyButton
    *
    * $easyButton provider a set of function and setting for button
   */
  angular.module('easy.form.providers').provider('$easyButton', function() {
    var $injector, $q, $timeout;
    $injector = null;
    $q = null;
    $timeout = null;
    this.setupProviders = function(injector) {
      $injector = injector;
      $q = $injector.get('$q');
      return $timeout = $injector.get('$timeout');
    };
    this.get = function($injector) {
      return this.setupProviders($injector);
    };
    this.get.$inject = ['$injector'];
    this.$get = this.get;
  });

}).call(this);
;(function() {
  'use strict';

  /**
    * @ngdoc service
    * @name easy.form.providers:$easyForm
    * @description
    * # $easyForm
    *
   */
  angular.module('easy.form.providers').provider('$easyForm', function() {
    var $injector, $q, $timeout;
    $injector = null;
    $q = null;
    $timeout = null;
    this.setupProviders = function(injector) {
      $injector = injector;
      $q = $injector.get('$q');
      return $timeout = $injector.get('$timeout');
    };
    this.get = function($injector) {
      return this.setupProviders($injector);
    };
    this.get.$inject = ['$injector'];
    this.$get = this.get;
  });

}).call(this);
;(function() {
  'use strict';

  /**
    * @ngdoc service
    * @name easy.form.providers:$easyInput
    * @description
    * # $easyInput
    *
   */
  angular.module('easy.form.providers').provider('$easyInput', function() {
    var $http, $injector, $q, $templateCache, $timeout;
    $injector = null;
    $q = null;
    $timeout = null;
    $http = null;
    $templateCache = null;
    this.inputMappings = {};
    this.wrapperMappings = {};
    this.defaultInputMapping = null;
    this.defaultWrapperMapping = null;
    this.setupProviders = function(injector) {
      $injector = injector;
      $q = $injector.get('$q');
      $http = $injector.get('$http');
      $templateCache = $injector.get('$templateCache');
      return $timeout = $injector.get('$timeout');
    };
    this.convertInputMapping = (function(_this) {
      return function(name, object) {
        if (object == null) {
          object = {};
        }

        /**
          * @ngdoc function
          * @name easy.form.providers:$easyInput#convertInputMapping
          * @methodOf easy.form.providers:$easyInput
          *
          * @description
          * Convert the input mapping object.
          *
         */
        return {
          name: name,
          templateUrl: object.templateUrl
        };
      };
    })(this);
    this.convertWrapperMapping = (function(_this) {
      return function(name, object) {
        if (object == null) {
          object = {};
        }

        /*
        Convert the wrapper mapping object.
         */
        return {
          name: name,
          templateUrl: object.templateUrl
        };
      };
    })(this);
    this.registerInput = function(name, object) {
      if (object == null) {
        object = {};
      }

      /*
      Register the input mapping.
      @params name: The input mapping name.
      @params object:
          templateUrl
       */
      return this.inputMappings[name] = this.convertInputMapping(name, object);
    };
    this.registerWrapper = function(name, object) {
      if (object == null) {
        object = {};
      }

      /*
      Register the wrapper mapping.
      @params name: The wrapper mapping name.
      @params object:
          templateUrl
       */
      return this.wrapperMappings[name] = this.convertWrapperMapping(name, object);
    };
    this.getInputMapping = function(name) {

      /*
      Get the input mapping form easy.form.field.mappings by the name.
      @return input mapping / null
       */
      if (this.inputMappings[name]) {
        return angular.copy(this.inputMappings[name]);
      } else {
        return null;
      }
    };
    this.getWrapperMapping = function(name) {

      /*
      Get the wrapper mapping form easy.form.field.mappings by the name.
      @return wrapper mapping / null
       */
      if (this.wrapperMappings[name]) {
        return angular.copy(this.wrapperMappings[name]);
      } else {
        return null;
      }
    };
    this.setDefaultInput = function(name) {

      /*
      Set the default input mapping form easy.form.field.mappings by the name.
      @return wrapper mapping / null
       */
      return this.defaultInputMapping = this.inputMappings[name] ? angular.copy(this.inputMappings[name]) : null;
    };
    this.setDefaultWrapper = function(name) {

      /*
      Set the default wrapper mapping form easy.form.field.mappings by the name.
      @return wrapper mapping / null
       */
      return this.defaultWrapperMapping = this.wrapperMappings[name] ? angular.copy(this.wrapperMappings[name]) : null;
    };
    this.getInputTemplate = function(name) {

      /*
      Get the input mapping by the name.
      @return Template HTML / null
       */
      var mapping;
      mapping = name ? this.getInputMapping(name) : this.defaultInputMapping;
      return $templateCache.get(mapping.templateUrl);
    };
    this.getWrapperTemplate = function(name) {

      /*
      Get the wrapper mapping by the name.
      @return Template HTML / null
       */
      var mapping;
      mapping = name ? this.getWrapperMapping(name) : this.defaultWrapperMapping;
      return $templateCache.get(mapping.templateUrl);
    };
    this.get = function($injector) {
      this.setupProviders($injector);
      return {
        inputMappings: this.inputMappings,
        wrapperMappings: this.wrapperMappings,
        defaultInputMapping: this.defaultInputMapping,
        defaultWrapperMapping: this.defaultWrapperMapping,
        convertInputMapping: this.convertInputMapping,
        convertWrapperMapping: this.convertWrapperMapping,
        registerInput: this.registerInput,
        registerWrapper: this.registerWrapper,
        getInputMapping: this.getInputMapping,
        getWrapperMapping: this.getWrapperMapping,
        setDefaultInput: this.setDefaultInput,
        setDefaultWrapper: this.setDefaultWrapper,
        getInputTemplate: this.getInputTemplate,
        getWrapperTemplate: this.getWrapperTemplate
      };
    };
    this.get.$inject = ['$injector'];
    this.$get = this.get;
  });

}).call(this);
;(function() {


}).call(this);
;(function() {
  'use strict';

  /**
    * @ngdoc service
    * @name easy.form.providers:$easyValidation
    * @description
    * # $easyValidation
    *
   */
  angular.module('easy.form.providers').provider('$easyValidation', function() {
    var $http, $injector, $q, $scope, $timeout, _this;
    $injector = null;
    $scope = null;
    $http = null;
    $q = null;
    $timeout = null;
    _this = this;
    this.ruleMappings = {};
    this.defaultInvalidMessage = 'Please check it again';
    this.defaultValidMessage = 'Value is valid';
    this.showInvalidMessage = true;
    this.showValidMessage = false;
    this.setupProviders = function(injector) {
      $injector = injector;
      $scope = $injector.get('$rootScope');
      $http = $injector.get('$http');
      $q = $injector.get('$q');
      return $timeout = $injector.get('$timeout');
    };
    this.convertRuleMapping = (function(_this) {
      return function(name, object) {
        if (object == null) {
          object = {};
        }

        /*
        Convert the rule mapping object.
        @params name: The rule mapping name.
        @params object:
          name
          expression
          messages
          translate
        @return rule mapping / null
         */
        return {
          name: name,
          expression: object.expression,
          messages: object.messages || {},
          translate: object.translate || false
        };
      };
    })(this);
    this.register = function(name, object) {
      if (object == null) {
        object = {};
      }

      /*
      Register the rule mapping.
      @params name: The rule mapping name.
      @params object:
          name
          expression
          messages
          translate
      @return rule mapping / null
       */
      return this.ruleMappings[name] = this.convertRuleMapping(name, object);
    };
    this.getRuleMapping = function(name) {

      /*
      Get the rule mapping by the name.
      @return rule mapping / null
       */
      if (this.ruleMappings[name]) {
        return angular.copy(this.ruleMappings[name]);
      } else {
        return null;
      }
    };
    this.getExpression = function(name) {

      /*
      Get the rule expression by the name.
      @return expression / null
       */
      if (this.getRuleMapping(name)) {
        return angular.copy(this.getRuleMapping(name).expression);
      } else {
        return null;
      }
    };
    this.getInvalidMessage = function(name) {

      /*
      Get the invalid message by the name.
      @return invalid message of rule / null
       */
      if (this.getRuleMapping(name) && this.getRuleMapping(name).messages) {
        return angular.copy(this.getRuleMapping(name).messages.invalid);
      } else {
        return this.defaultInvalidMessage;
      }
    };
    this.checkValid = function(form) {

      /**
      Check form valid, return true
      checkValid(Form): Check the specific form(Form) valid from angular `$valid`
      @param form
      @returns {boolean}
       */
      if (form.$valid === undefined) {
        return false;
      }
      return form && form.$valid === true;
    };

    /**
    Validate the form when click submit, when `validMethod = submit`
    @param form
    @returns {promise|*}
     */
    this.validate = function(form) {
      var deferred, i, idx, k;
      deferred = $q.defer();
      idx = 0;
      if (form === undefined) {
        console.error("This is not a regular Form name scope");
        deferred.reject("This is not a regular Form name scope");
        return deferred.promise;
      }
      if (form.validationId) {
        $scope.$broadcast(form.$name + "submit-" + form.validationId, idx++);
      } else if (form.constructor === Array) {
        for (k in form) {
          $scope.$broadcast(form[k].$name + "submit-" + form[k].validationId, idx++);
        }
      } else {
        for (i in form) {
          if (form[i] && form[i].hasOwnProperty("$dirty")) {
            $scope.$broadcast(i + "submit-" + form[i].validationId, idx++);
          }
        }
      }
      deferred.promise.success = function(fn) {
        deferred.promise.then(function(value) {
          fn(value);
        });
        return deferred.promise;
      };
      deferred.promise.error = function(fn) {
        deferred.promise.then(null, function(value) {
          fn(value);
        });
        return deferred.promise;
      };
      $timeout(function() {
        if (_this.checkValid(form)) {
          deferred.resolve("success");
        } else {
          deferred.reject("error");
        }
      });
      return deferred.promise;
    };

    /**
    reset the specific form
    @param form
     */
    this.reset = function(form) {
      var i, k;
      if (form === undefined) {
        console.error("This is not a regular Form name scope");
        return;
      }
      if (form.validationId) {
        $scope.$broadcast(form.$name + "reset-" + form.validationId);
      } else if (form.constructor === Array) {
        for (k in form) {
          $scope.$broadcast(form[k].$name + "reset-" + form[k].validationId);
        }
      } else {
        for (i in form) {
          if (form[i].hasOwnProperty("$dirty")) {
            $scope.$broadcast(i + "reset-" + form[i].validationId);
          }
        }
      }
    };
    this.get = function($injector) {
      this.setupProviders($injector);
      return {
        ruleMappings: this.ruleMappings,
        defaultInvalidMessage: this.defaultInvalidMessage,
        defaultValidMessage: this.defaultValidMessage,
        showValidMessage: this.showValidMessage,
        showInvalidMessage: this.showInvalidMessage,
        register: this.register,
        convertRuleMapping: this.convertRuleMapping,
        getRuleMapping: this.getRuleMapping,
        getExpression: this.getExpression,
        getInvalidMessage: this.getInvalidMessage,
        checkValid: this.checkValid,
        validate: this.validate,
        reset: this.reset
      };
    };
    this.get.$inject = ['$injector'];
    this.$get = this.get;
  });

}).call(this);
;(function() {
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
;(function() {
  'use strict';

  /**
    * @ngdoc directive
    * @name easy.form.directives:easyInput
    *
    * @restrict AE
    *
    * @requires $log
    * @requires $q
    * @requires $timeout
    * @requires $compile
    * @requires easy.form.providers:$easyInput
    * @requires easy.form.$easyValidation
    *
    * @description
    * # easyInput
    *
    *
    * @example
     <example module="easy.form.directives">
       <file name="index.html">
           <easy-input type='text' ng-model="model1">
       </file>
     </example>
    *
   */
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  angular.module('easy.form.directives').directive("easyInput", ['$log', '$q', '$timeout', '$compile', '$easyInput', '$easyValidation', function($log, $q, $timeout, $compile, $easyInput, $easyValidation) {

    /*
    Compile dynamic template in runtime
    @param element
    @param scope
    @param template
     */
    var checkValidation, guid, invalidFunc, isFocusElement, s4, setElementTemplate, validFunc;
    setElementTemplate = function(element, scope, template) {
      element.html(template);
      return $compile(element.contents())(scope);
    };

    /**
    Do this function if validation valid
    @param element
    @param validMessage
    @param validation
    @param callback
    @param ctrl
    @returns {}
     */
    validFunc = function(scope, element, validMessage, validation, callback, ctrl) {
      element.removeClass('has-error');
      scope.invalidMessage = null;
      ctrl.$setValidity(ctrl.$name, true);
      if (callback) {
        callback();
      }
      return true;
    };

    /**
    Do this function if validation invalid
    @param element
    @param validMessage
    @param validation
    @param callback
    @param ctrl
    @returns {}
     */
    invalidFunc = function(scope, element, invalidMessage, validator, callback, ctrl) {
      element.addClass('has-error');
      scope.validMessage = null;
      scope.invalidMessage = $easyValidation.showInvalidMessage ? $easyValidation.getInvalidMessage(validator) : null;
      ctrl.$setValidity(ctrl.$name, false);
      if (callback) {
        callback();
      }
      return false;
    };

    /**
    If var is true, focus element when validate end
    @type {boolean}
    private variable
     */
    isFocusElement = false;

    /**
    Check Validation with Function or RegExp
    @param scope
    @param element
    @param attrs
    @param ctrl
    @param validation
    @param value
    @returns {}
     */
    checkValidation = function(scope, element, attrs, ctrl, validation, value) {
      var errorMessage, expression, invalidMessage, leftValidation, valid, validMessage, validator;
      validator = validation[0];
      leftValidation = validation.slice(1);
      invalidMessage = $easyValidation.getInvalidMessage(validator);
      validMessage = '';
      errorMessage = validation + "ErrorMessage";
      expression = $easyValidation.getExpression(validator);
      valid = {
        success: function() {
          scope.$invalid = false;
          validFunc(scope, element, validMessage, validator, scope.validCallback, ctrl);
          if (leftValidation.length) {
            return checkValidation(scope, element, attrs, ctrl, leftValidation, value);
          } else {
            return true;
          }
        },
        error: function() {
          scope.$invalid = true;
          return invalidFunc(scope, element, invalidMessage, validator, scope.invalidCallback, ctrl);
        }
      };
      if (expression === undefined) {
        console.error("You are using undefined validator \"%s\"", validator);
        if (leftValidation.length) {
          return checkValidation(scope, element, attrs, ctrl, leftValidation, value);
        }
      } else if (expression.constructor === Function) {
        return $q.all([expression(value, scope, element, attrs)]).then((function(data) {
          if (data && data.length > 0 && data[0]) {
            return valid.success();
          } else {
            return valid.error();
          }
        }), function() {
          return valid.error();
        });
      } else if (expression.constructor === RegExp) {
        if ($easyValidation.getExpression(validator).test(value)) {
          return valid.success();
        } else {
          return valid.error();
        }
      } else {
        return valid.error();
      }
    };

    /**
    generate unique guid
     */
    s4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    guid = function() {
      return s4() + s4() + s4() + s4();
    };
    return {
      require: 'ngModel',
      restrict: 'AE',
      transclude: true,
      scope: {
        model: '=ngModel',
        options: '=',
        type: '@',
        wrapper: '@',
        ngDisabled: '=',
        ngChange: '&',
        label: '=',
        placeholder: '=',
        hint: '=',
        labelClass: '@',
        controlClass: '@',
        wrapperClass: '@',
        validator: '@',
        validClass: '@',
        originInvalidClass: '@',
        validMethod: '@',
        validatorRule: '=',
        validTrigger: '@',
        initialValidity: '=',
        validCallback: '&',
        invalidCallback: '&'
      },
      link: function(scope, element, attrs, ctrl, transclude) {

        /**
        Initialize scope from options
         */

        /**
        Watch the model change and trigger matched callback
         */
        var initialValidity, inputElement, inputTemplate, name, uid, v, validMethod, validation, watch, wrapperTemplate, _i, _j, _len, _len1, _ref, _ref1;
        scope.$watch('model', function(newVal, oldVal) {
          if (newVal !== oldVal) {
            if (scope.ngChange()) {
              return scope.ngChange();
            }
          }
        });

        /**
        recognition if label and placeholder a string or a object
         */

        /**
        Set labelClass
         */
        scope.labelClassArr = scope.labelClass ? scope.labelClass.split(/[ ,]+/) : [];

        /**
        Set controlClass
         */
        scope.controlClassArr = scope.controlClass ? scope.controlClass.split(/[ ,]+/) : [];

        /**
        Get wrapper template option and compile it
         */
        wrapperTemplate = $easyInput.getWrapperTemplate(scope.wrapper);
        if (wrapperTemplate) {
          setElementTemplate(element, scope, wrapperTemplate);
        }

        /**
        Get input template option and compile it
         */
        inputTemplate = $easyInput.getInputTemplate(scope.type);
        inputElement = element.find('easy-input-field');
        if (inputTemplate) {
          setElementTemplate(inputElement, scope, inputTemplate);
        }

        /**
        watch
        @type {watch}
        
        Use to collect scope.$watch method
        
        use watch() to destroy the $watch method
         */
        watch = function() {};

        /**
        validator
        @type {Array}
        
        Convert validators and validatorRule to Array
         */
        validation = [];
        if (scope.validatorRule != null) {
          _ref = scope.validatorRule;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            name = _ref[_i];
            if (scope.validatorRule[name]) {
              validation.push(scope.validatorRule[name]);
            }
          }
        }
        if (scope.validator != null) {
          _ref1 = scope.validator.split(/[ ,]+/);
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            v = _ref1[_j];
            validation.push(v);
          }
        }
        if (validation.length !== 0) {

          /**
          set default invalid class
           */
          scope.invalidClass = scope.originInvalidClass ? scope.originInvalidClass : 'has-error';

          /**
          guid use
           */
          uid = ctrl.validationId = guid();

          /**
          Valid/Invalid Message
           */
          scope.validMessage = null;
          scope.invalidMessage = null;

          /**
          Set initial validity to false if no boolean value is transmitted
           */
          initialValidity = typeof scope.initialValidity !== "boolean" ? scope.initialValidity : false;

          /**
          Set custom initial validity
          Usage: <easy-input initial-validity="true" ... >
           */
          scope.$invalid !== ctrl.$setValidity(ctrl.$name, initialValidity);

          /**
          Use default validMethod if there is no value
           */
          validMethod = scope.validMethod ? scope.validMethod.split(/[ ,]+/) : ['watch'];

          /**
          Reset the validation for specific form
           */
          scope.$on(ctrl.$name + "reset-" + uid, function() {

            /**
            clear scope.$watch here
            when reset status
            clear the $watch method to prevent
            $watch again while reset the form
             */
            watch();
            isFocusElement = false;
            ctrl.$setViewValue("");
            ctrl.$setPristine();
            ctrl.$setValidity(ctrl.$name, false);
            ctrl.$render();
            element.next().html("");
          });

          /**
          Check validator
           */
          if (__indexOf.call(validMethod, 'watch') >= 0) {

            /**
            Validate watch method
            This is the default method
             */
            scope.$watch("model", function(value) {

              /**
              dirty, pristine, viewValue control here
               */
              if (ctrl.$pristine && ctrl.$viewValue) {
                ctrl.$setViewValue(ctrl.$viewValue);
              }
              if (!ctrl.$pristine) {
                return checkValidation(scope, element, attrs, ctrl, validation, value);
              }
            });
          }
          if (__indexOf.call(validMethod, 'submit') >= 0) {

            /**
            Click submit form, check the validity when submit
             */
            scope.$on(ctrl.$name + "submit-" + uid, function(event, index) {
              var isValid, value;
              value = element[0].value;
              isValid = false;
              if (index === 0) {
                isFocusElement = false;
              }
              isValid = checkValidation(scope, element, attrs, ctrl, validation, value);
              if (scope.validMethod === "submit") {
                watch();
                watch = scope.$watch("model", function(value, oldValue) {
                  if (value === oldValue) {
                    return;
                  }
                  if (value === undefined || value === null) {
                    value = "";
                  }
                  return isValid = checkValidation(scope, element, attrs, ctrl, validation, value);
                });
              }
              if (!isFocusElement && !isValid) {
                isFocusElement = true;
                return element[0].focus();
              }
            });
          }
          if (__indexOf.call(validMethod, 'blur') >= 0) {

            /**
            Validate blur method
             */
            element.bind("blur", function() {
              var value;
              value = element[0].value;
              return scope.$apply(function() {
                return checkValidation(scope, element, attrs, ctrl, validation, value);
              });
            });
          }
          if (__indexOf.call(validMethod, 'trigger') >= 0) {

            /**
            Validate trigger method
             */
            scope.validTrigger;
            return scope.$on(scope.validTrigger, function() {
              return checkValidation(scope, element, attrs, ctrl, validation, value);
            });
          }
        }
      }
    };
  }]);

}).call(this);
;(function() {


}).call(this);
;(function() {
  angular.module('easy.form.default').config(['$easyInputProvider', function($easyInputProvider) {
    $easyInputProvider.registerWrapper('verticalForm', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-form.html'
    });
    $easyInputProvider.registerWrapper('verticalFileInput', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-file-input.html'
    });
    $easyInputProvider.registerWrapper('verticalBoolean', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-boolean.html'
    });
    $easyInputProvider.registerWrapper('verticalRadioAndCheckboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('horizontalForm', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-form.html'
    });
    $easyInputProvider.registerWrapper('horizontalFileInput', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontalFileInput.html'
    });
    $easyInputProvider.registerWrapper('horizontalBoolean', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontalBoolean.html'
    });
    $easyInputProvider.registerWrapper('horizontalRadioAndCheckboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('inlineForm', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontalRadioAndCheckboxes.html'
    });
    $easyInputProvider.registerWrapper('none', {
      templateUrl: 'easy-form/templates/input-wrappers/none.html'
    });
    return $easyInputProvider.setDefaultWrapper('verticalForm');
  }]);

}).call(this);
;(function() {
  angular.module('easy.form.default').config(['$easyInputProvider', function($easyInputProvider) {
    $easyInputProvider.registerInput('text', {
      templateUrl: 'easy-form/templates/inputs/text.html'
    });
    $easyInputProvider.registerInput('password', {
      templateUrl: 'easy-form/templates/inputs/password.html'
    });
    $easyInputProvider.registerInput('email', {
      templateUrl: 'easy-form/templates/inputs/email.html'
    });
    $easyInputProvider.registerInput('datetime', {
      templateUrl: 'easy-form/templates/inputs/datetime.html'
    });
    $easyInputProvider.registerInput('datetime-local', {
      templateUrl: 'easy-form/templates/inputs/datetime-local.html'
    });
    $easyInputProvider.registerInput('date', {
      templateUrl: 'easy-form/templates/inputs/date.html'
    });
    $easyInputProvider.registerInput('month', {
      templateUrl: 'easy-form/templates/inputs/month.html'
    });
    $easyInputProvider.registerInput('time', {
      templateUrl: 'easy-form/templates/inputs/time.html'
    });
    $easyInputProvider.registerInput('number', {
      templateUrl: 'easy-form/templates/inputs/number.html'
    });
    $easyInputProvider.registerInput('email', {
      templateUrl: 'easy-form/templates/inputs/email.html'
    });
    $easyInputProvider.registerInput('url', {
      templateUrl: 'easy-form/templates/inputs/url.html'
    });
    $easyInputProvider.registerInput('search', {
      templateUrl: 'easy-form/templates/inputs/search.html'
    });
    $easyInputProvider.registerInput('tel', {
      templateUrl: 'easy-form/templates/inputs/tel.html'
    });
    $easyInputProvider.registerInput('color', {
      templateUrl: 'easy-form/templates/inputs/color.html'
    });
    $easyInputProvider.registerInput('textarea', {
      templateUrl: 'easy-form/templates/inputs/textarea.html'
    });
    $easyInputProvider.registerInput('textarea-autosize', {
      templateUrl: 'easy-form/templates/inputs/textarea-autosize.html'
    });
    $easyInputProvider.registerInput('text-angular', {
      templateUrl: 'easy-form/templates/inputs/text-angular.html'
    });
    $easyInputProvider.registerInput('checkbox', {
      templateUrl: 'easy-form/templates/inputs/checkbox.html'
    });
    $easyInputProvider.registerInput('checkboxes', {
      templateUrl: 'easy-form/templates/inputs/checkboxes.html'
    });
    $easyInputProvider.registerInput('checkboxes-inline', {
      templateUrl: 'easy-form/templates/inputs/checkboxes-inline.html'
    });
    $easyInputProvider.registerInput('radios', {
      templateUrl: 'easy-form/templates/inputs/radios.html'
    });
    $easyInputProvider.registerInput('radios-inline', {
      templateUrl: 'easy-form/templates/inputs/radios-inline.html'
    });
    $easyInputProvider.registerInput('select', {
      templateUrl: 'easy-form/templates/inputs/select.html'
    });
    $easyInputProvider.registerInput('select-multiple', {
      templateUrl: 'easy-form/templates/inputs/select-multiple.html'
    });
    $easyInputProvider.registerInput('ui-select', {
      templateUrl: 'easy-form/templates/inputs/ui-select.html'
    });
    $easyInputProvider.registerInput('ui-select-multiple', {
      templateUrl: 'easy-form/templates/inputs/ui-select-multiple.html'
    });
    $easyInputProvider.registerInput('date', {
      templateUrl: 'easy-form/templates/inputs/date.html'
    });
    $easyInputProvider.registerInput('date_picker', {
      templateUrl: 'template/easy-form/templates/inputs/date_picker.html'
    });
    $easyInputProvider.registerInput('date_select', {
      templateUrl: 'easy-form/templates/inputs/date_select.html'
    });
    $easyInputProvider.registerInput('month_picker', {
      templateUrl: 'easy-form/templates/inputs/month_picker.html'
    });
    $easyInputProvider.registerInput('month_select', {
      templateUrl: 'easy-form/templates/inputs/month_select.html'
    });
    $easyInputProvider.registerInput('year_picker', {
      templateUrl: 'easy-form/templates/inputs/year_picker.html'
    });
    $easyInputProvider.registerInput('year_select', {
      templateUrl: 'easy-form/templates/inputs/year_select.html'
    });
    return $easyInputProvider.setDefaultInput('text');
  }]);

}).call(this);
;(function() {
  angular.module('easy.form.default').config(['$easyValidationProvider', function($easyValidationProvider) {
    $easyValidationProvider.register('required', {
      expression: function(value) {
        return !!value;
      },
      messages: {
        invalid: "This should be Required!!",
        valid: "It's Required"
      },
      translate: true
    });
    $easyValidationProvider.register('url', {
      expression: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      messages: {
        invalid: "This should be Url",
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
  }]);

}).call(this);
;angular.module('easy.form.templates', ['easy-form/templates/components/date-select.html', 'easy-form/templates/components/month-select.html', 'easy-form/templates/form-wrappers/default.html', 'easy-form/templates/input-wrappers/horizontal-form.html', 'easy-form/templates/input-wrappers/inline-form.html', 'easy-form/templates/input-wrappers/none.html', 'easy-form/templates/input-wrappers/vertical-form.html', 'easy-form/templates/inputs/checkbox.html', 'easy-form/templates/inputs/checkboxes-inline.html', 'easy-form/templates/inputs/checkboxes.html', 'easy-form/templates/inputs/color.html', 'easy-form/templates/inputs/date.html', 'easy-form/templates/inputs/date_picker.html', 'easy-form/templates/inputs/date_select.html', 'easy-form/templates/inputs/datetime-local.html', 'easy-form/templates/inputs/datetime.html', 'easy-form/templates/inputs/datetime_picker.html', 'easy-form/templates/inputs/email.html', 'easy-form/templates/inputs/i-boolean.html', 'easy-form/templates/inputs/month.html', 'easy-form/templates/inputs/month_select.html', 'easy-form/templates/inputs/number.html', 'easy-form/templates/inputs/password.html', 'easy-form/templates/inputs/radios-inline.html', 'easy-form/templates/inputs/radios.html', 'easy-form/templates/inputs/search.html', 'easy-form/templates/inputs/select-multiple.html', 'easy-form/templates/inputs/select.html', 'easy-form/templates/inputs/switch.html', 'easy-form/templates/inputs/tag.html', 'easy-form/templates/inputs/tel.html', 'easy-form/templates/inputs/text-angular.html', 'easy-form/templates/inputs/text.html', 'easy-form/templates/inputs/textarea-autosize.html', 'easy-form/templates/inputs/textarea.html', 'easy-form/templates/inputs/time.html', 'easy-form/templates/inputs/time_picker.html', 'easy-form/templates/inputs/ui-select-multiple.html', 'easy-form/templates/inputs/ui-select.html', 'easy-form/templates/inputs/url.html', 'easy-form/templates/messages/default.html']);

angular.module("easy-form/templates/components/date-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/components/date-select.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-7\">\n" +
    "        <select class=\"form-control\" name=\"year-select\" ng-model=\"year\" ng-options=\"option.key as option.text for option in yearOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-6\">\n" +
    "        <select class=\"form-control\" name=\"month-select\" ng-model=\"month\" ng-options=\"option.key as option.text for option in monthOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-5\">\n" +
    "        <select class=\"form-control\" name=\"day-select\" ng-model=\"day\" ng-options=\"option.key as option.text for option in dayOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/components/month-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/components/month-select.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-9\">\n" +
    "        <select class=\"form-control\" name=\"year-select\" ng-model=\"year\" ng-options=\"option.key as option.text for option in yearOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-9\">\n" +
    "        <select class=\"form-control\" name=\"month-select\" ng-model=\"month\" ng-options=\"option.key as option.text for option in monthOptions\">\n" +
    "        </select>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/form-wrappers/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/form-wrappers/default.html",
    "<ng-form role=\"form\">\n" +
    "    <easy-input ng-repeat=\"field in fields\">\n" +
    "    </easy-input>\n" +
    "    <button type=\"submit\"\n" +
    "            ng-hide=\"options.hideSubmit\">\n" +
    "        {{options.submitCopy || \"Submit\"}}\n" +
    "    </button>\n" +
    "</ng-form>");
}]);

angular.module("easy-form/templates/input-wrappers/horizontal-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/horizontal-form.html",
    "<ng-form name=\"formIn\">\n" +
    "    <div ng-class=\"{'has-error': formIn.inputIn.$invalid}\">\n" +
    "        <label class=\"control-label\" ng-class=\"labelClassArr\" ng-show=\"label\">{{label}}</label>\n" +
    "        <div ng-class=\"controlClassArr\">\n" +
    "            <easy-input-field></easy-input-field>\n" +
    "            <ng-transclude></ng-transclude>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</ng-form>");
}]);

angular.module("easy-form/templates/input-wrappers/inline-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/inline-form.html",
    "<ng-form name=\"formIn\">\n" +
    "    <div ng-class=\"{'has-error': formIn.inputIn.$invalid}\">\n" +
    "        <label class=\"col-sm-{{wrapper[1]}} control-label\" ng-show=\"wrapper[1]\">{{label}}</label>\n" +
    "\n" +
    "        <div class=\"col-sm-{{wrapper[2]}}\" ng-show=\"wrapper[2]\">\n" +
    "            <easy-input-field ng-model=\"model\" easy-input-options=\"easyInputOptions\" placeholder=\"placeholder\"></easy-input-field>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</ng-form>");
}]);

angular.module("easy-form/templates/input-wrappers/none.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/none.html",
    "<div ng-transclude></div>");
}]);

angular.module("easy-form/templates/input-wrappers/vertical-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/vertical-form.html",
    "<label ng-class=\"labelClassArr\" ng-bind=\"label\"></label>\n" +
    "<easy-input-field ng-class=\"controlClassArr\"></easy-input-field>\n" +
    "<span class=\"help-block\" ng-bind=\"hint\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "<span class=\"help-block\" ng-bind=\"invalidMessage\" ng-hide=\"hint && !invalidMessage\"></span>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkbox.html",
    "<div class=\"checkbox\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" ng-model=\"model\">\n" +
    "        {{options.checkbox.text}}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/checkboxes-inline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkboxes-inline.html",
    "<label class=\"checkbox-inline\" ng-repeat=\"item in options.checkboxes.collection\">\n" +
    "    <input type=\"checkbox\" checklist-model=\"model\" checklist-value=\"item\"> {{item.text}}\n" +
    "</label>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/checkboxes.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkboxes.html",
    "<div class=\"checkbox\" ng-repeat=\"item in options.checkboxes.collection\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" checklist-model=\"model\" checklist-value=\"item\"> {{item.text}}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/color.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/color.html",
    "<input name=\"inputIn\" type=\"color\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date.html",
    "<input name=\"inputIn\" type=\"date\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/date_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker  easy-datepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/date_select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date_select.html",
    "<easy-datetime-select ng-model=\"model\">\n" +
    "</easy-datetime-select>");
}]);

angular.module("easy-form/templates/inputs/datetime-local.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime-local.html",
    "<input name=\"inputIn\" type=\"datetime-local\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime.html",
    "<input name=\"inputIn\" type=\"datetime\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datetimepicker  easy-datetimepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/email.html",
    "<input name=\"inputIn\" type=\"email\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/i-boolean.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/i-boolean.html",
    "<div class=\"checkbox\">\n" +
    "    <label class=\"i-ckecks\">\n" +
    "        <input type=\"checkbox\" >\n" +
    "        <i></i>\n" +
    "        {{options}}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/month.html",
    "<input name=\"inputIn\" type=\"month\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/month_select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/month_select.html",
    "<easy-datetime-select ng-model=\"model\" min-view=\"month\">\n" +
    "</easy-datetime-select>");
}]);

angular.module("easy-form/templates/inputs/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/number.html",
    "<input name=\"inputIn\" type=\"number\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/password.html",
    "<input name=\"inputIn\" type=\"password\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/radios-inline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/radios-inline.html",
    "<label class=\"radio-inline\" ng-repeat=\"item in options.radios.collection\">\n" +
    "    <input type=\"radio\" ng-value=\"{{item}}\" ng-model=\"$parent.model\">\n" +
    "    {{item.text}}\n" +
    "</label>");
}]);

angular.module("easy-form/templates/inputs/radios.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/radios.html",
    "<div class=\"radio\" ng-repeat=\"item in options.radios.collection\">\n" +
    "    <label>\n" +
    "        <input type=\"radio\" ng-value=\"{{item}}\" ng-model=\"$parent.model\">\n" +
    "        {{item.text}}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/search.html",
    "<input name=\"inputIn\" type=\"search\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/select-multiple.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/select-multiple.html",
    "<select class=\"form-control\" ng-model=\"model\" ng-options=\"item.key as item.text for item in options.select.collection\" multiple>\n" +
    "</select>");
}]);

angular.module("easy-form/templates/inputs/select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/select.html",
    "<select class=\"form-control\" ng-model=\"model\" ng-options=\"item.key as item.text for item in options.select.collection\">\n" +
    "</select>");
}]);

angular.module("easy-form/templates/inputs/switch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/switch.html",
    "<input\n" +
    "        easy-switch\n" +
    "        ng-model=\"isSelected\"\n" +
    "        type=\"checkbox\"\n" +
    "        switch-active=\"{{ isActive }}\"\n" +
    "        switch-size=\"{{ size }}\"\n" +
    "        switch-animate=\"{{ animate }}\"\n" +
    "        switch-label=\"{{ label }}\"\n" +
    "        switch-icon=\"{{ icon }}\"\n" +
    "        switch-on-label=\"{{ onLabel }}\"\n" +
    "        switch-off-label=\"{{ offLabel }}\"\n" +
    "        switch-on=\"{{ on }}\"\n" +
    "        switch-off=\"{{ off }}\" >");
}]);

angular.module("easy-form/templates/inputs/tag.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tag.html",
    "<div name=\"inputIn\" ui-select2=\"easyInputOptions.select\" ng-model=\"model\" data-placeholder=\"Pick a number\">\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/tel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tel.html",
    "<input name=\"inputIn\" type=\"tel\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/text-angular.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text-angular.html",
    "<div text-angular ng-model=\"model\"></div>");
}]);

angular.module("easy-form/templates/inputs/text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text.html",
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/textarea-autosize.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea-autosize.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder}}\"\n" +
    "          ng-model=\"model\" msd-elastic></textarea>");
}]);

angular.module("easy-form/templates/inputs/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder}}\"\n" +
    "          ng-model=\"model\"></textarea>");
}]);

angular.module("easy-form/templates/inputs/time.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/time.html",
    "<input name=\"inputIn\" type=\"time\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/time_picker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/time_picker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-timepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/ui-select-multiple.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/ui-select-multiple.html",
    "<ui-select ng-model=\"$parent.model\"\n" +
    "           ng-disabled=\"\"\n" +
    "           reset-search-input=\"\"\n" +
    "           multiple>\n" +
    "    <ui-select-match placeholder=\"placeholder\">{{$item.text}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item in options.uiSelect.collection\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div ng-bind-html=\"item.text | highlight: $select.search\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>");
}]);

angular.module("easy-form/templates/inputs/ui-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/ui-select.html",
    "<ui-select ng-model=\"$parent.model\"\n" +
    "           ng-disabled=\"\"\n" +
    "           reset-search-input=\"\">\n" +
    "    <ui-select-match placeholder=\"placeholder\">{{$select.selected.text}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item in options.uiSelect.collection\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div ng-bind-html=\"item.text | highlight: $select.search\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/url.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/url.html",
    "<input name=\"inputIn\" type=\"url\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" />\n" +
    "");
}]);

angular.module("easy-form/templates/messages/default.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/messages/default.html",
    "<div>\n" +
    "    <div class=\"alert alert-success\" ng-if=\"ngModel.notice\">\n" +
    "        {{ngModel.notice}}\n" +
    "    </div>\n" +
    "    <div class=\"alert alert-danger\" ng-if=\"ngModel.error || ngModel.errors\">\n" +
    "        {{ngModel.error}}\n" +
    "        {{ngModel.errors}}\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

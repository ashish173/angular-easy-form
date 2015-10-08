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
  angular.module('easy.form', ['checklist-model', 'ui.select', 'textAngular', 'monospaced.elastic', 'ui.bootstrap', 'ngTagsInput', 'pascalprecht.translate', 'easy.form.directives', 'easy.form.providers', 'easy.form.templates', 'easy.form.default']);

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
          templateUrl: object.templateUrl,
          labelClass: object.labelClass,
          controlClass: object.controlClass
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
    this.getInput = function(name) {
      if (name) {
        return this.getInputMapping(name);
      } else {
        return this.defaultInputMapping;
      }
    };
    this.getWrapper = function(name) {
      if (name) {
        return this.getWrapperMapping(name);
      } else {
        return this.defaultWrapperMapping;
      }
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
        getWrapperTemplate: this.getWrapperTemplate,
        getInput: this.getInput,
        getWrapper: this.getWrapper
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
          if (form[i] && form[i].hasOwnProperty("$dirty") && form[i].validationId) {
            $scope.$broadcast("" + i + "-submit-" + form[i].validationId, idx++);
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
        var firstInvalidElement, firstInvalidElementInput;
        if (_this.checkValid(form)) {
          deferred.resolve("success");
        } else {
          firstInvalidElement = $(".has-error");
          if (firstInvalidElement != null) {
            window.scrollTo(0, firstInvalidElement.offset().top - 100);
          }
          firstInvalidElementInput = firstInvalidElement.find('input[type=text], textarea, select').filter(':visible:first');
          firstInvalidElementInput.focus();
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
  angular.module('easy.form.directives').directive("easySubmit", ['$timeout', '$parse', '$easyValidation', function($timeout, $parse, $easyValidation) {
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
  }]);

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

  angular.module('easy.form.directives').directive("easyInput", ['$log', '$parse', '$injector', '$q', '$timeout', '$compile', '$easyInput', '$easyValidation', function($log, $parse, $injector, $q, $timeout, $compile, $easyInput, $easyValidation) {

    /*
    Compile dynamic template in runtime
    @param element
    @param scope
    @param template
     */
    var $translate, guid, s4, uniqueArray, _checkValidation, _invalidFunc, _isFocusElement, _isTranslateEnable, _setElementTemplate, _validFunc;
    _setElementTemplate = function(element, scope, template) {
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
    _validFunc = function(scope, element, validMessage, validation, callback, ctrl) {
      scope.$invalid = false;
      scope.invalidMessage = null;
      ctrl.$setValidity(ctrl.$name, true);
      if (scope.$dirty === true) {
        element.removeClass('has-error');
        if (callback) {
          callback();
        }
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
    _invalidFunc = function(scope, element, invalidMessage, validator, callback, ctrl) {
      scope.$invalid = true;
      ctrl.$setValidity(ctrl.$name, false);
      if (scope.$dirty === true) {
        element.addClass('has-error');
        scope.invalidMessage = $easyValidation.showInvalidMessage ? invalidMessage : null;
        if (callback) {
          callback();
        }
      }
      return false;
    };

    /**
    If var is true, focus element when validate end
    @type {boolean}
    private variable
     */
    _isFocusElement = true;

    /**
    If translate module exsited, and inject a $translate object
    @type {boolean}
    private variable
     */
    _isTranslateEnable = $injector.has('$translate');
    if (_isTranslateEnable) {
      $translate = $injector.get('$translate');
    }

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
    _checkValidation = function(scope, element, attrs, ctrl, validation, customValidationRules) {
      var errorMessage, expression, invalidMessage, leftValidation, valid, validMessage, validator;
      if (scope.type === 'checkboxes') {
        console.log(scope.model);
      }
      validator = validation[0];
      leftValidation = validation.slice(1);
      invalidMessage = $easyValidation.getInvalidMessage(validator);
      validMessage = '';
      errorMessage = validation + "ErrorMessage";
      expression = $easyValidation.getExpression(validator);
      if ((expression == null) && customValidationRules[validator]) {
        expression = customValidationRules[validator].expression;
        invalidMessage = customValidationRules[validator].messages.invalid;
      }
      valid = {
        success: function() {
          _validFunc(scope, element, validMessage, validator, scope.validCallback, ctrl);
          if (leftValidation.length) {
            return _checkValidation(scope, element, attrs, ctrl, leftValidation, customValidationRules);
          } else {
            return true;
          }
        },
        error: function() {
          return _invalidFunc(scope, element, invalidMessage, validator, scope.invalidCallback, ctrl);
        }
      };
      if (expression === undefined) {
        $log.debug("You are using undefined validator \"%s\"", validator);
        if (leftValidation.length) {
          return _checkValidation(scope, element, attrs, ctrl, leftValidation, customValidationRules);
        }
      } else if (expression.constructor === Function) {
        return $q.all([expression(scope.model, scope, element, attrs)]).then((function(data) {
          if (data && data.length > 0 && data[0]) {
            return valid.success();
          } else {
            return valid.error();
          }
        }), function() {
          return valid.error();
        });
      } else if (expression.constructor === RegExp) {
        if ($easyValidation.getExpression(validator).test(scope.model)) {
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

    /**
    Removing duplicate elements from array
     */
    uniqueArray = function(arr) {
      var key, newArr, value, _i, _ref;
      newArr = {};
      for (key = _i = 0, _ref = arr.length; 0 <= _ref ? _i < _ref : _i > _ref; key = 0 <= _ref ? ++_i : --_i) {
        newArr[arr[key]] = arr[key];
      }
      for (key in newArr) {
        value = newArr[key];
        value;
      }
      return arr = newArr;
    };
    return {
      require: 'ngModel',
      restrict: 'AE',
      scope: {
        model: '=ngModel',
        name: '@',
        options: '=',
        type: '@',
        wrapper: '@',
        ngDisabled: '=',
        ngChange: '&',
        label: '@',
        placeholder: '@',
        hint: '@',
        labelClass: '@',
        controlClass: '@',
        wrapperClass: '@',
        validator: '@',
        validClass: '@',
        originInvalidClass: '@',
        validMethod: '@',
        customValidator: '@',
        validTriggerEvent: '@',
        initialValidity: '@',
        validCallback: '&',
        invalidCallback: '&'
      },
      link: function(scope, element, attrs, ctrl) {

        /**
        Initialize scope from options
         */
        var customRule, customValidationRules, initialValidity, input, inputElement, inputFieldElement, inputTemplate, uid, v, validMethod, validation, watch, wrapper, wrapperTemplate, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
        wrapper = $easyInput.getWrapper(scope.wrapper);
        wrapperTemplate = $easyInput.getWrapperTemplate(scope.wrapper);
        input = $easyInput.getInput(scope.type);
        inputTemplate = $easyInput.getInputTemplate(scope.type);

        /**
        Remove the search string when option is selected in the ui-select
         */
        scope.optionSelected = function($select) {
          return setTimeout((function() {
            $select.search = '';
          }), 1000);
        };

        /**
        Watch the model change and trigger matched callback
         */
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
        if (angular.isArray(wrapper.labelClass)) {
          (_ref = scope.labelClassArr).push.apply(_ref, wrapper.labelClass);
        }
        uniqueArray(scope.labelClassArr);

        /**
        Set controlClass
         */
        scope.controlClassArr = scope.controlClass ? scope.controlClass.split(/[ ,]+/) : [];
        if (angular.isArray(wrapper.controlClass)) {
          (_ref1 = scope.controlClassArr).push.apply(_ref1, wrapper.controlClass);
        }
        uniqueArray(scope.controlClassArr);

        /**
        Get wrapper template option and compile it
         */
        if (wrapperTemplate) {
          _setElementTemplate(element, scope, wrapperTemplate);
        }

        /**
        Get input template option and compile it
         */
        inputFieldElement = element.find('easy-input-field');
        if (inputFieldElement) {
          _setElementTemplate(inputFieldElement, scope, inputTemplate);
        }
        inputElement = inputFieldElement.children("[name='inputIn']");

        /**
        watch
        @type {watch}
        
        Use to collect scope.$watch method
        
        use watch() to destroy the $watch method
         */
        watch = function() {

          /**
          validator
          @type {Array}
          
          Convert validators and validatorRule to Array
           */
        };
        validation = [];
        customValidationRules = {};
        if (scope.customValidator != null) {
          _ref2 = scope.customValidator.split(/[ ,]+/);
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            v = _ref2[_i];
            customRule = $parse(v)(scope.$parent);
            customValidationRules[customRule.name] = customRule;
            validation.push(customRule.name);
          }
        }
        if (scope.validator != null) {
          _ref3 = scope.validator.split(/[ ,]+/);
          for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
            v = _ref3[_j];
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

          /**
          set and watch model $pristine and $dirty
           */
          scope.$pristine = ctrl.$pristine = true;
          scope.$dirty = ctrl.$dirty = false;
          scope.$watch('model', function(newVal, oldVal) {
            if (newVal === oldVal) {
              return;
            }
            scope.$pristine = ctrl.$pristine = false;
            return scope.$dirty = ctrl.$dirty = true;
          });

          /**
          Do the initial validation
           */
          _checkValidation(scope, element, attrs, ctrl, validation, customValidationRules);

          /**
          Use default validMethod if there is no value
           */
          validMethod = scope.validMethod ? scope.validMethod.split(/[ ,]+/) : ['watch', 'submit'];

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
            _isFocusElement = false;
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
              if (!ctrl.$pristine && ctrl.$viewValue && ctrl.$invalid) {
                return _checkValidation(scope, element, attrs, ctrl, validation, customValidationRules);
              }
            });
          }
          if (__indexOf.call(validMethod, 'submit') >= 0) {

            /**
            Click submit form, check the validity when submit
             */
            scope.$on(ctrl.$name + "-submit-" + uid, function(event, index) {
              var isValid;
              scope.$pristine = false;
              scope.$dirty = true;
              isValid = false;
              return isValid = _checkValidation(scope, element, attrs, ctrl, validation, customValidationRules);
            });
          }
          if (scope.validTriggerEvent != null) {

            /**
            Do validation when receive a given event command
             */
            return scope.$on(scope.validTriggerEvent, function() {
              scope.$pristine = false;
              scope.$dirty = true;
              return _checkValidation(scope, element, attrs, ctrl, validation, customValidationRules);
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
    $easyInputProvider.registerWrapper('vertical-form', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-form.html'
    });
    $easyInputProvider.registerWrapper('vertical-file-input', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-file-input.html'
    });
    $easyInputProvider.registerWrapper('vertical-boolean', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-boolean.html'
    });
    $easyInputProvider.registerWrapper('vertical-radio-and-checkboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/vertical-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('horizontal-form', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-form.html',
      labelClass: ['col-xs-3'],
      controlClass: ['col-xs-9']
    });
    $easyInputProvider.registerWrapper('horizontal-file-input', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-file-input.html'
    });
    $easyInputProvider.registerWrapper('horizontal-boolean', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-boolean.html'
    });
    $easyInputProvider.registerWrapper('horizontal-radio-and-checkboxes', {
      templateUrl: 'easy-form/templates/input-wrappers/horizontal-radio-and-checkboxes.html'
    });
    $easyInputProvider.registerWrapper('inline-form', {
      templateUrl: 'easy-form/templates/input-wrappers/inline-form.html'
    });
    $easyInputProvider.registerWrapper('no-label', {
      templateUrl: 'easy-form/templates/input-wrappers/no-label.html'
    });
    $easyInputProvider.registerWrapper('none', {
      templateUrl: 'easy-form/templates/input-wrappers/none.html'
    });
    return $easyInputProvider.setDefaultWrapper('vertical-form');
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
    $easyInputProvider.registerInput('week', {
      templateUrl: 'easy-form/templates/inputs/week.html'
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
    $easyInputProvider.registerInput('ui-select', {
      templateUrl: 'easy-form/templates/inputs/ui-select.html'
    });
    $easyInputProvider.registerInput('tag', {
      templateUrl: 'easy-form/templates/inputs/tag.html'
    });
    $easyInputProvider.registerInput('datepicker', {
      templateUrl: 'easy-form/templates/inputs/datepicker.html'
    });
    $easyInputProvider.registerInput('timepicker', {
      templateUrl: 'template/easy-form/templates/inputs/timepicker.html'
    });
    $easyInputProvider.registerInput('datetimepicker', {
      templateUrl: 'easy-form/templates/inputs/datetimepicker.html'
    });
    return $easyInputProvider.setDefaultInput('text');
  }]);

}).call(this);
;(function() {
  angular.module('easy.form.default').config(['$easyValidationProvider', function($easyValidationProvider) {
    $easyValidationProvider.register('required', {
      expression: function(value) {
        if (angular.isArray(value) || angular.isString(value)) {
          return value.length > 0;
        } else {
          return !(value == null);
        }
      },
      messages: {
        invalid: "This should be required.",
        valid: "It's Required"
      },
      translate: false
    });
    $easyValidationProvider.register('url', {
      expression: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
      messages: {
        invalid: "This should be url.",
        valid: "It's Url"
      },
      translate: false
    });
    $easyValidationProvider.register('email', {
      expression: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      messages: {
        invalid: "This should be email",
        valid: "It's email"
      },
      translate: false
    });
    return $easyValidationProvider.register('number', {
      expression: /^\d+$/,
      messages: {
        invalid: "This should be number",
        valid: "It's number"
      },
      translate: false
    });
  }]);

}).call(this);
;angular.module('easy.form.templates', ['easy-form/templates/form-wrappers/default.html', 'easy-form/templates/input-wrappers/horizontal-form.html', 'easy-form/templates/input-wrappers/inline-form.html', 'easy-form/templates/input-wrappers/no-label.html', 'easy-form/templates/input-wrappers/none.html', 'easy-form/templates/input-wrappers/vertical-form.html', 'easy-form/templates/inputs/checkbox.html', 'easy-form/templates/inputs/checkboxes.html', 'easy-form/templates/inputs/color.html', 'easy-form/templates/inputs/date.html', 'easy-form/templates/inputs/datepicker.html', 'easy-form/templates/inputs/datetime-local.html', 'easy-form/templates/inputs/datetime.html', 'easy-form/templates/inputs/datetimepicker.html', 'easy-form/templates/inputs/email.html', 'easy-form/templates/inputs/month.html', 'easy-form/templates/inputs/number.html', 'easy-form/templates/inputs/password.html', 'easy-form/templates/inputs/radios.html', 'easy-form/templates/inputs/search.html', 'easy-form/templates/inputs/select.html', 'easy-form/templates/inputs/switch.html', 'easy-form/templates/inputs/tag.html', 'easy-form/templates/inputs/tel.html', 'easy-form/templates/inputs/text-angular.html', 'easy-form/templates/inputs/text.html', 'easy-form/templates/inputs/textarea-autosize.html', 'easy-form/templates/inputs/textarea.html', 'easy-form/templates/inputs/time.html', 'easy-form/templates/inputs/timepicker.html', 'easy-form/templates/inputs/ui-select.html', 'easy-form/templates/inputs/url.html', 'easy-form/templates/inputs/week.html', 'easy-form/templates/messages/default.html']);

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
    "<label class=\"control-label\" ng-class=\"::labelClassArr\" translate=\"{{label}}\"></label>\n" +
    "\n" +
    "<div class='form-control-wrapper' ng-class=\"::controlClassArr\">\n" +
    "    <easy-input-field></easy-input-field>\n" +
    "    <span class=\"help-block\" translate=\"{{hint}}\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "    <span class=\"help-block\" translate ng-hide=\"hint && !invalidMessage\">{{invalidMessage}}</span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/inline-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/inline-form.html",
    "<label ng-class=\"::labelClassArr\" translate=\"{{::label}}\"></label>\n" +
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/no-label.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/no-label.html",
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "<span class=\"help-block\" translate=\"{{hint}}\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "<span class=\"help-block\" translate ng-hide=\"hint && !invalidMessage\">{{invalidMessage}}</span>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/none.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/none.html",
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/input-wrappers/vertical-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/input-wrappers/vertical-form.html",
    "<label ng-class=\"::labelClassArr\" translate=\"{{label}}\"></label>\n" +
    "<easy-input-field ng-class=\"::controlClassArr\"></easy-input-field>\n" +
    "<span class=\"help-block\" translate=\"{{hint}}\" ng-show=\"hint && !invalidMessage\"></span>\n" +
    "<span class=\"help-block\" translate ng-show=\"invalidMessage\">{{invalidMessage}}</span>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkbox.html",
    "<div class=\"checkbox\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" name=\"inputIn\" ng-model=\"model\" ng-disabled=\"ngDisabled\">\n" +
    "        <span translate=\"{{options.checkbox.text}}\"></span>\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/checkboxes.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/checkboxes.html",
    "<div class=\"checkbox\" ng-repeat=\"item in options.checkboxes.collection\" ng-if=\"!options.checkboxes.inline\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" name=\"inputIn\" checklist-model=\"model\" checklist-value=\"item.key\"\n" +
    "               ng-disabled=\"ngDisabled\">\n" +
    "        <span translate=\"{{item.text}}\"></span>\n" +
    "    </label>\n" +
    "</div>\n" +
    "\n" +
    "<label class=\"checkbox-inline\" ng-repeat=\"item in options.checkboxes.collection\" ng-if=\"options.checkboxes.inline\">\n" +
    "    <input type=\"checkbox\" name=\"inputIn\" checklist-model=\"model\" checklist-value=\"item.key\" ng-disabled=\"ngDisabled\">\n" +
    "    <span translate=\"{{item.text}}\"></span>\n" +
    "</label>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/color.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/color.html",
    "<input name=\"inputIn\" type=\"color\" class=\"form-control\" placeholder=\"{{::placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/date.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/date.html",
    "<input name=\"inputIn\" type=\"date\" class=\"form-control\" placeholder=\"{{::placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datepicker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-datepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>\n" +
    "\n" +
    "<p class=\"input-group\">\n" +
    "    <input type=\"text\" class=\"form-control\" datepicker-popup=\"{{format}}\" ng-model=\"model\"\n" +
    "           min-date=\"minDate\" max-date=\"'2015-06-22'\" datepicker-options=\"options.datepicker\"\n" +
    "           date-disabled=\"disabled(date, mode)\" ng-required=\"true\" close-text=\"Close\"/>\n" +
    "    <span class=\"input-group-btn\">\n" +
    "        <button type=\"button\" class=\"btn btn-default\" ng-click=\"open($event)\"><i\n" +
    "            class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "    </span>\n" +
    "</p>\n" +
    "\n" +
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\" placeholder=\"{{placeholder}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime-local.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime-local.html",
    "<input name=\"inputIn\" type=\"datetime-local\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetime.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetime.html",
    "<input name=\"inputIn\" type=\"datetime\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/datetimepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/datetimepicker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datetimepicker  easy-datetimepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/email.html",
    "<input name=\"inputIn\" type=\"email\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\" ng-model-options=\"{ updateOn: 'blur' }\"/>\n" +
    "\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/month.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/month.html",
    "<input name=\"inputIn\" type=\"month\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/number.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/number.html",
    "<input name=\"inputIn\" type=\"number\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/password.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/password.html",
    "<input name=\"inputIn\" type=\"password\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\" ng-model-options=\"{ updateOn: 'blur' }\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/radios.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/radios.html",
    "<form name=\"formIn\">\n" +
    "    <div class=\"radio\" ng-repeat=\"item in options.radios.collection\" ng-if=\"!options.radios.inline\">\n" +
    "        <label>\n" +
    "            <input type=\"radio\" name=\"inputIn\" ng-value=\"item.key\" ng-model=\"$parent.$parent.model\" ng-disabled=\"ngDisabled\">\n" +
    "            <span translate=\"{{item.text}}\"></span>\n" +
    "        </label>\n" +
    "    </div>\n" +
    "\n" +
    "    <label class=\"radio-inline\" ng-repeat=\"item in options.radios.collection\" ng-if=\"options.radios.inline\">\n" +
    "        <input type=\"radio\" name=\"inputIn\" ng-value=\"item.key\" ng-model=\"$parent.$parent.model\" ng-disabled=\"ngDisabled\">\n" +
    "        <span translate=\"{{item.text}}\"></span>\n" +
    "    </label>\n" +
    "</form>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/search.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/search.html",
    "<input name=\"inputIn\" type=\"search\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\" />\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/select.html",
    "<!--single of objects-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        ng-if=\"!options.select.multiple && !options.select.selectOptions\"\n" +
    "        ng-options=\"item for item in options.select.collection\">\n" +
    "</select>\n" +
    "\n" +
    "<!--multiple of objects-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        multiple\n" +
    "        ng-if=\"options.select.multiple && !options.select.selectOptions\"\n" +
    "        ng-options=\"item for item in options.select.collection\" >\n" +
    "</select>\n" +
    "\n" +
    "<!--single of objects with customize selectOptions-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        ng-if=\"!options.select.multiple && options.select.selectOptions\"\n" +
    "        ng-options=\"{{options.select.selectOptions()}}\">\n" +
    "</select>\n" +
    "\n" +
    "<!--multiple of objects with customize selectOptions-->\n" +
    "<select class=\"form-control\"\n" +
    "        ng-model=\"$parent.model\"\n" +
    "        ng-disabled=\"ngDisabled\"\n" +
    "        multiple\n" +
    "        ng-if=\"options.select.multiple && options.select.selectOptions\"\n" +
    "        ng-options=\"{{options.select.selectOptions()}}\">\n" +
    "</select>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/switch.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/switch.html",
    "<input\n" +
    "        easy-switch\n" +
    "        ng-model=\"isSelected\"\n" +
    "        type=\"checkbox\"\n" +
    "        switch-active=\"{{ isActive }}\"\n" +
    "        switch-size=\"{{ ::size }}\"\n" +
    "        switch-animate=\"{{ ::animate }}\"\n" +
    "        switch-label=\"{{ label | translate }}\"\n" +
    "        switch-icon=\"{{ icon }}\"\n" +
    "        switch-on-label=\"{{ onLabel }}\"\n" +
    "        switch-off-label=\"{{ offLabel }}\"\n" +
    "        switch-on=\"{{ on }}\"\n" +
    "        switch-off=\"{{ off }}\" >");
}]);

angular.module("easy-form/templates/inputs/tag.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tag.html",
    "<tags-input name=\"inputIn\"  ng-model=\"model\"></tags-input>");
}]);

angular.module("easy-form/templates/inputs/tel.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/tel.html",
    "<input name=\"inputIn\" type=\"tel\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\" ng-model-options=\"{ updateOn: 'blur' }\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/text-angular.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text-angular.html",
    "<div text-angular ng-model=\"model\" ta-disabled=\"ngDisabled\" ng-model-options=\"{ updateOn: 'blur' }\"></div>");
}]);

angular.module("easy-form/templates/inputs/text.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/text.html",
    "<input name=\"inputIn\" type=\"text\" class=\"form-control\"\n" +
    "       placeholder=\"{{placeholder | translate}}\"\n" +
    "       ng-model=\"model\" ng-disabled=\"ngDisabled\"\n" +
    "       ng-model-options=\"{ updateOn: 'blur' }\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/textarea-autosize.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea-autosize.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\"\n" +
    "          ng-model=\"model\" ng-disabled=\"ngDisabled\" msd-elastic ng-model-options=\"{ updateOn: 'blur' }\"></textarea>");
}]);

angular.module("easy-form/templates/inputs/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/textarea.html",
    "<textarea name=\"inputIn\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\"\n" +
    "          ng-model=\"model\" ng-disabled=\"ngDisabled\" maxlength=\"5000\" ng-model-options=\"{ updateOn: 'blur' }\"></textarea>");
}]);

angular.module("easy-form/templates/inputs/time.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/time.html",
    "<input name=\"inputIn\" type=\"time\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/timepicker.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/timepicker.html",
    "<div class=\"input-group date\">\n" +
    "    <input name=\"inputIn\" class=\"form-control\" type=\"text\" ng-model=\"model\" easy-datepicker easy-timepicker-options=\"\"/>\n" +
    "    <span class=\"input-group-addon\"><i class=\"fa fa-clock-o\"></i></span>\n" +
    "</div>");
}]);

angular.module("easy-form/templates/inputs/ui-select.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/ui-select.html",
    "<!--single of objects-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"!options.uiSelect.multiple && !options.uiSelect.bindProperty\">\n" +
    "    <ui-select-match placeholder=\"{{placeholder | translate}}\">{{options.uiSelect.formatResult($select.selected)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item in options.uiSelect.collection | filter: $select.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div translate=\"{{options.uiSelect.formatSelection(item)}}\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "\n" +
    "<!--multiple of objects-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"options.uiSelect.multiple && !options.uiSelect.bindProperty\"\n" +
    "           multiple>\n" +
    "    <ui-select-match placeholder=\"{{placeholder | translate}}\">{{options.uiSelect.formatResult($item)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item in options.uiSelect.collection | filter:$search.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div translate=\"{{options.uiSelect.formatSelection(item)}}\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "\n" +
    "<!--single of objects with single property binding-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"!options.uiSelect.multiple && options.uiSelect.bindProperty\">\n" +
    "    <ui-select-match placeholder=\"{{placeholder | translate}}\">{{options.uiSelect.formatResult($select.selected)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item[options.uiSelect.bindProperty] as item in options.uiSelect.collection | filter: $select.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div translate=\"{{options.uiSelect.formatSelection(item)}}\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "\n" +
    "<!--multiple of objects with single property binding-->\n" +
    "<ui-select ng-model=\"$parent.$parent.model\"\n" +
    "           ng-disabled=\"ngDisabled\"\n" +
    "           search-enabled=\"{{options.uiSelect.searchEnabled != false}}\"\n" +
    "           ng-if=\"options.uiSelect.multiple && options.uiSelect.bindProperty\"\n" +
    "           multiple>\n" +
    "    <ui-select-match placeholder=\"{{placeholder | translate}}\">{{options.uiSelect.formatResult($item)}}</ui-select-match>\n" +
    "    <ui-select-choices repeat=\"item[options.uiSelect.bindProperty] in options.uiSelect.collection | filter: $search.search\"\n" +
    "                       refresh=\"options.uiSelect.refresh($select.search)\"\n" +
    "                       refresh-delay=\"0\">\n" +
    "        <div translate=\"{{options.uiSelect.formatSelection(item)}}\"></div>\n" +
    "    </ui-select-choices>\n" +
    "</ui-select>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/url.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/url.html",
    "<input name=\"inputIn\" type=\"url\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\" ng-disabled=\"ngDisabled\" ng-model-options=\"{ updateOn: 'blur' }\"/>\n" +
    "");
}]);

angular.module("easy-form/templates/inputs/week.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("easy-form/templates/inputs/week.html",
    "<input name=\"inputIn\" type=\"week\" class=\"form-control\" placeholder=\"{{placeholder | translate}}\" ng-model=\"model\"  ng-disabled=\"ngDisabled\"/>\n" +
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

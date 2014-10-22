(function() {
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

  angular.module('easy.form.directives').directive("easyInput", function($log, $q, $timeout, $compile, $easyInput, $easyValidation) {

    /*
    Compile dynamic template in runtime
    @param element
    @param scope
    @param template
     */
    var checkValidation, guid, invalidFunc, isFocusElement, s4, setElementTemplate, uniqueArray, validFunc;
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
        var initialValidity, input, inputElement, inputTemplate, name, uid, v, validMethod, validation, watch, wrapper, wrapperTemplate, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3;
        wrapper = $easyInput.getWrapper(scope.wrapper);
        wrapperTemplate = $easyInput.getWrapperTemplate(scope.wrapper);
        input = $easyInput.getInput(scope.type);
        inputTemplate = $easyInput.getInputTemplate(scope.type);

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
          setElementTemplate(element, scope, wrapperTemplate);
        }

        /**
        Get input template option and compile it
         */
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
          _ref2 = scope.validatorRule;
          for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
            name = _ref2[_i];
            if (scope.validatorRule[name]) {
              validation.push(scope.validatorRule[name]);
            }
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
  });

}).call(this);

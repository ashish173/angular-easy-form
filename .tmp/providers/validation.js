(function() {
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

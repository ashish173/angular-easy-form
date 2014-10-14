(function() {
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

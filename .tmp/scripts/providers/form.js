(function() {
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

(function() {
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

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
  angular.module('easy.form', ['checklist-model', 'ui.select', 'textAngular', 'monospaced.elastic', 'ui.bootstrap', 'easy.form.directives', 'easy.form.providers', 'easy.form.templates', 'easy.form.default']);

  angular.module('easy.form.directives', []);

  angular.module('easy.form.providers', []);

  angular.module('easy.form.default', []);

}).call(this);

'use strict'

###*
 # @ngdoc service
 # @name easy.form.providers:$easyButton
 # @description
 # # $easyButton
 #
 # $easyButton provider a set of function and setting for button
###

angular.module 'easy.form.providers'

.provider '$easyButton', ->
  # ----------------------------------------
  # providers
  # ----------------------------------------
  $injector = null
  $q = null
  $timeout = null

  # ----------------------------------------
  # private functions
  # ----------------------------------------
  @setupProviders = (injector) ->
    $injector = injector
    $q = $injector.get '$q'
    $timeout = $injector.get '$timeout'

  # ----------------------------------------
  # $get
  # ----------------------------------------
  @get = ($injector) ->
    @setupProviders $injector

  @get.$inject = ['$injector']
  @$get = @get
  return
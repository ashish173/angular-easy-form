'use strict'

###*
 # @ngdoc service
 # @name easy.form.providers:$easyValidation
 # @description
 # # $easyValidation
 #
###

angular.module 'easy.form.providers'

.provider '$easyValidation', ->
  # ----------------------------------------
  # providers
  # ----------------------------------------
  $injector = null
  $scope = null
  $http = null
  $q = null
  $timeout = null
  _this = this

  # ----------------------------------------
  # properties
  # ----------------------------------------
  @ruleMappings = {}
  @defaultInvalidMessage = 'Please check it again'
  @defaultValidMessage = 'Value is valid'
  @showInvalidMessage = true
  @showValidMessage = false

  # ----------------------------------------
  # private functions
  # ----------------------------------------
  @setupProviders = (injector) ->
    $injector = injector
    $scope = $injector.get '$rootScope'
    $http = $injector.get '$http'
    $q = $injector.get '$q'
    $timeout = $injector.get '$timeout'

  # ----------------------------------------
  # public functions
  # ----------------------------------------

  @convertRuleMapping = (name, object = {}) =>
    ###
    Convert the rule mapping object.
    @params name: The rule mapping name.
    @params object:
      name
      expression
      messages
      translate
    @return rule mapping / null
    ###
    {
    name: name
    expression: object.expression
    messages: object.messages || {}
    translate: object.translate || false
    }

  @register = (name, object = {}) ->
    ###
    Register the rule mapping.
    @params name: The rule mapping name.
    @params object:
        name
        expression
        messages
        translate
    @return rule mapping / null
    ###
    @ruleMappings[name] = @convertRuleMapping name, object

  @getRuleMapping = (name) ->
    ###
    Get the rule mapping by the name.
    @return rule mapping / null
    ###
    if @ruleMappings[name] then angular.copy(@ruleMappings[name]) else null

  @getExpression = (name) ->
    ###
    Get the rule expression by the name.
    @return expression / null
    ###
    if @getRuleMapping(name) then angular.copy @getRuleMapping(name).expression else null

  @getInvalidMessage = (name) ->
    ###
    Get the invalid message by the name.
    @return invalid message of rule / null
    ###
    if @getRuleMapping(name) and @getRuleMapping(name).messages then angular.copy(@getRuleMapping(name).messages.invalid) else @defaultInvalidMessage


  @checkValid = (form) ->
    ###*
    Check form valid, return true
    checkValid(Form): Check the specific form(Form) valid from angular `$valid`
    @param form
    @returns {boolean}
    ###
    return false if form.$valid is `undefined`
    form and form.$valid is true


  ###*
  Validate the form when click submit, when `validMethod = submit`
  @param form
  @returns {promise|*}
  ###
  @validate = (form) ->
    deferred = $q.defer()
    idx = 0

    if form is `undefined`
      console.error "This is not a regular Form name scope"
      deferred.reject "This is not a regular Form name scope"
      return deferred.promise
    if form.validationId # single
      $scope.$broadcast form.$name + "submit-" + form.validationId, idx++
    else if form.constructor is Array # multiple
      for k of form
        $scope.$broadcast form[k].$name + "submit-" + form[k].validationId, idx++
    else

      for i of form # whole scope
        $scope.$broadcast "#{i}-submit-#{form[i].validationId}", idx++  if form[i] and form[i].hasOwnProperty("$dirty") and  form[i].validationId
    deferred.promise.success = (fn) ->
      deferred.promise.then (value) ->
        fn value
        return

      deferred.promise

    deferred.promise.error = (fn) ->
      deferred.promise.then null, (value) ->
        fn value
        return

      deferred.promise

    $timeout ->
      if _this.checkValid(form)
        deferred.resolve "success"
      else
        deferred.reject "error"
      return

    deferred.promise


  ###*
  reset the specific form
  @param form
  ###
  @reset = (form) ->
    if form is `undefined`
      console.error "This is not a regular Form name scope"
      return
    if form.validationId
      $scope.$broadcast form.$name + "reset-" + form.validationId
    else if form.constructor is Array
      for k of form
        $scope.$broadcast form[k].$name + "reset-" + form[k].validationId
    else
      for i of form
        $scope.$broadcast i + "reset-" + form[i].validationId  if form[i].hasOwnProperty("$dirty")
    return


  # ----------------------------------------
  # $get
  # ----------------------------------------
  @get = ($injector) ->
    @setupProviders $injector

    # properties
    ruleMappings: @ruleMappings
    defaultInvalidMessage: @defaultInvalidMessage
    defaultValidMessage: @defaultValidMessage
    showValidMessage: @showValidMessage
    showInvalidMessage: @showInvalidMessage

    # public functions
    register: @register
    convertRuleMapping: @convertRuleMapping
    getRuleMapping: @getRuleMapping
    getExpression: @getExpression
    getInvalidMessage: @getInvalidMessage

    checkValid: @checkValid
    validate: @validate
    reset: @reset

  @get.$inject = ['$injector']
  @$get = @get
  return
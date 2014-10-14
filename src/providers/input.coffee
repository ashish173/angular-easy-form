'use strict'

###*
 # @ngdoc service
 # @name easy.form.providers:$easyInput
 # @description
 # # $easyInput
 #
###

angular.module 'easy.form.providers'

.provider '$easyInput', ->
  # ----------------------------------------
  # providers
  # ----------------------------------------
  $injector = null
  $q = null
  $timeout = null
  $http = null
  $templateCache = null


  # ----------------------------------------
  # properties
  # ----------------------------------------
  @inputMappings = {}
  @wrapperMappings = {}
  @defaultInputMapping = null
  @defaultWrapperMapping = null

  # ----------------------------------------
  # private functions
  # ----------------------------------------
  @setupProviders = (injector) ->
    $injector = injector
    $q = $injector.get '$q'
    $http = $injector.get '$http'
    $templateCache = $injector.get '$templateCache'
    $timeout = $injector.get '$timeout'


  # ----------------------------------------
  # public functions
  # ----------------------------------------
  @convertInputMapping = (name, object = {}) =>
    ###*
     # @ngdoc function
     # @name easy.form.providers:$easyInput#convertInputMapping
     # @methodOf easy.form.providers:$easyInput
     #
     # @description
     # Convert the input mapping object.
     #
    ###
    {
    name: name
    templateUrl: object.templateUrl
    }

  @convertWrapperMapping = (name, object = {}) =>
    ###
    Convert the wrapper mapping object.
    ###
    {
    name: name
    templateUrl: object.templateUrl
    }

  @registerInput = (name, object = {}) ->
    ###
    Register the input mapping.
    @params name: The input mapping name.
    @params object:
        templateUrl
    ###
    @inputMappings[name] = @convertInputMapping name, object

  @registerWrapper = (name, object = {}) ->
    ###
    Register the wrapper mapping.
    @params name: The wrapper mapping name.
    @params object:
        templateUrl
    ###
    # set rule
    @wrapperMappings[name] = @convertWrapperMapping name, object

  @getInputMapping = (name) ->
    ###
    Get the input mapping form easy.form.field.mappings by the name.
    @return input mapping / null
    ###
    if @inputMappings[name] then angular.copy(@inputMappings[name]) else null


  @getWrapperMapping = (name) ->
    ###
    Get the wrapper mapping form easy.form.field.mappings by the name.
    @return wrapper mapping / null
    ###
    if @wrapperMappings[name] then angular.copy(@wrapperMappings[name]) else null

  @setDefaultInput= (name) ->
    ###
    Set the default input mapping form easy.form.field.mappings by the name.
    @return wrapper mapping / null
    ###
    @defaultInputMapping = if @inputMappings[name] then angular.copy(@inputMappings[name]) else null

  @setDefaultWrapper = (name) ->
    ###
    Set the default wrapper mapping form easy.form.field.mappings by the name.
    @return wrapper mapping / null
    ###
    @defaultWrapperMapping = if @wrapperMappings[name] then angular.copy(@wrapperMappings[name]) else null

  @getInputTemplate = (name) ->
    ###
    Get the input mapping by the name.
    @return Template HTML / null
    ###
    mapping = if name then @getInputMapping(name) else @defaultInputMapping
    $templateCache.get(mapping.templateUrl)

  @getWrapperTemplate = (name) ->
    ###
    Get the wrapper mapping by the name.
    @return Template HTML / null
    ###
    mapping = if name then @getWrapperMapping(name) else @defaultWrapperMapping
    $templateCache.get(mapping.templateUrl)

  # ----------------------------------------
  # $get
  # ----------------------------------------
  @get = ($injector) ->
    @setupProviders $injector

    # properties
    inputMappings: @inputMappings
    wrapperMappings: @wrapperMappings
    defaultInputMapping: @defaultInputMapping
    defaultWrapperMapping: @defaultWrapperMapping

    # public functions
    convertInputMapping: @convertInputMapping
    convertWrapperMapping: @convertWrapperMapping
    registerInput: @registerInput
    registerWrapper: @registerWrapper
    getInputMapping: @getInputMapping
    getWrapperMapping: @getWrapperMapping
    setDefaultInput: @setDefaultInput
    setDefaultWrapper: @setDefaultWrapper
    getInputTemplate: @getInputTemplate
    getWrapperTemplate: @getWrapperTemplate

  @get.$inject = ['$injector']
  @$get = @get
  return
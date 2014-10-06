angular.module 'easy.form.providers'

.provider '$easyForm', ->
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
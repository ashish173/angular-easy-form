'use strict'

###*
 # @ngdoc directive
 # @name easy.form.directives:easyInput
 #
 # @restrict AE
 #
 # @requires $log
 # @requires $q
 # @requires $timeout
 # @requires $compile
 # @requires easy.form.providers:$easyInput
 # @requires easy.form.$easyValidation
 #
 # @description
 # # easyInput
 #
 #
 # @example
   <example module="easy.form.directives">
     <file name="index.html">
         <easy-input type='text' ng-model="model1">
     </file>
   </example>
 #
###

angular.module('easy.form.directives')
.directive "easyInput", ($log, $q, $timeout, $compile, $easyInput, $easyValidation) ->

  ###
  Compile dynamic template in runtime
  @param element
  @param scope
  @param template
  ###
  setElementTemplate = (element, scope, template) ->
    element.html(template)
    $compile(element.contents())(scope)

  ###*
  Do this function if validation valid
  @param element
  @param validMessage
  @param validation
  @param callback
  @param ctrl
  @returns {}
  ###
  validFunc = (scope, element, validMessage, validation, callback, ctrl) ->
    element.removeClass('has-error')
    scope.invalidMessage = null
#    scope.validMessage = if $easyValidation.showValidMessage then $easyValidation.getValidMessage(validator) else null
    ctrl.$setValidity ctrl.$name, true
    callback()  if callback
    true

  ###*
  Do this function if validation invalid
  @param element
  @param validMessage
  @param validation
  @param callback
  @param ctrl
  @returns {}
  ###
  invalidFunc = (scope, element, invalidMessage, validator, callback, ctrl) ->
    element.addClass('has-error')
    scope.validMessage = null
    scope.invalidMessage = if $easyValidation.showInvalidMessage then $easyValidation.getInvalidMessage(validator) else null
    ctrl.$setValidity ctrl.$name, false
    callback()  if callback
    false

  ###*
  If var is true, focus element when validate end
  @type {boolean}
  private variable
  ###
  isFocusElement = false

  ###*
  Check Validation with Function or RegExp
  @param scope
  @param element
  @param attrs
  @param ctrl
  @param validation
  @param value
  @returns {}
  ###
  checkValidation = (scope, element, attrs, ctrl, validation, value) ->
    validator = validation[0]
    leftValidation = validation.slice(1)
    invalidMessage = $easyValidation.getInvalidMessage(validator)
    validMessage = ''
    errorMessage = validation + "ErrorMessage"
    expression = $easyValidation.getExpression(validator)
    valid =
      success: ->
        scope.$invalid = false
        validFunc scope, element, validMessage, validator, scope.validCallback, ctrl
        if leftValidation.length
          checkValidation scope, element, attrs, ctrl, leftValidation, value
        else
          true
      error: ->
        scope.$invalid = true
        invalidFunc scope, element, invalidMessage, validator, scope.invalidCallback, ctrl

    if expression is `undefined`
      console.error "You are using undefined validator \"%s\"", validator
      if leftValidation.length
        checkValidation scope, element, attrs, ctrl, leftValidation, value
    else if expression.constructor is Function
      $q.all([expression(value, scope, element, attrs)]).then ((data) ->
        if data and data.length > 0 and data[0]
          valid.success()
        else
          valid.error()
      ), ->
        valid.error()

      # Check with RegExp
    else if expression.constructor is RegExp
      (if $easyValidation.getExpression(validator).test(value) then valid.success() else valid.error())
    else
      valid.error()

  ###*
  generate unique guid
  ###
  s4 = ->
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring 1

  guid = ->
    s4() + s4() + s4() + s4()

  return (
    require: 'ngModel'
    restrict: 'AE'
    transclude: true
    scope:
      model: '=ngModel'
      options: '='
      # template
      type: '@'
      wrapper: '@'
      # native behaviour
      ngDisabled: '='
      ngChange: '&'
      # label & placeholder
      label: '='
      placeholder: '='
      hint: '='
      # style
      labelClass: '@'
      controlClass: '@'
      wrapperClass: '@'
      # validation
      validator: '@'
      validClass: '@'
      originInvalidClass: '@'
      validMethod: '@'
      validatorRule: '='
      validTrigger: '@'
      initialValidity: '='
      validCallback: '&'
      invalidCallback: '&'
    link: (scope, element, attrs, ctrl, transclude) ->
      ###*
      Initialize scope from options
      ###
#      if scope.options
#        optionKeys = ['type'
#                      'wrapper'
#                      'ngDisabled'
#                      'label'
#                      'placeholder'
#                      'labelClass'
#                      'controlClass'
#                      'changeCallback'
#                      'validCallback'
#                      'inValidCallback']
#        scope[key] = scope.options[key] for key in optionKeys when scope.options[key]

      ###*
      Watch the model change and trigger matched callback
      ###
      scope.$watch 'model', (newVal, oldVal)->
        unless newVal is oldVal
          scope.ngChange() if scope.ngChange()

      ###*
      recognition if label and placeholder a string or a object
      ###
#      scope.label = attrs.label if angular.isUndefined(scope.label) and angular.isString(attrs.label)
#      scope.placeholder = attrs.placeholder if angular.isUndefined(scope.placeholder) and angular.isString(attrs.placeholder)

      ###*
      Set labelClass
      ###
      scope.labelClassArr = if scope.labelClass then scope.labelClass.split(/[ ,]+/) else []

      ###*
      Set controlClass
      ###
      scope.controlClassArr = if scope.controlClass then scope.controlClass.split(/[ ,]+/) else []

      ###*
      Get wrapper template option and compile it
      ###
      wrapperTemplate = $easyInput.getWrapperTemplate(scope.wrapper)
      if wrapperTemplate then setElementTemplate(element, scope, wrapperTemplate)

      ###*
      Get input template option and compile it
      ###
      inputTemplate = $easyInput.getInputTemplate(scope.type)
      inputElement = element.find('easy-input-field')
      if inputTemplate then setElementTemplate(inputElement, scope, inputTemplate)
      ###*
      watch
      @type {watch}

      Use to collect scope.$watch method

      use watch() to destroy the $watch method
      ###
      watch = ->

      ###*
      validator
      @type {Array}

      Convert validators and validatorRule to Array
      ###
#      validationRule = { name: 'name', expression: /^\d+$/, messages: {invalid: 'error!'}, translate: true }
      validation = []
      validation.push scope.validatorRule[name] for name in scope.validatorRule when scope.validatorRule[name] if scope.validatorRule?
      validation.push v for v in scope.validator.split((/[ ,]+/)) if scope.validator?

      unless validation.length is 0
        ###*
        set default invalid class
        ###
        scope.invalidClass = if scope.originInvalidClass then scope.originInvalidClass else 'has-error'


        ###*
        guid use
        ###
        uid = ctrl.validationId = guid()

        ###*
        Valid/Invalid Message
        ###
        scope.validMessage = null
        scope.invalidMessage = null

        ###*
        Set initial validity to false if no boolean value is transmitted
        ###
        initialValidity = if typeof scope.initialValidity isnt "boolean" then scope.initialValidity else false

        ###*
        Set custom initial validity
        Usage: <easy-input initial-validity="true" ... >
        ###
        scope.$invalid != ctrl.$setValidity ctrl.$name, initialValidity


        ###*
        Use default validMethod if there is no value
        ###
        validMethod = if scope.validMethod then scope.validMethod.split(/[ ,]+/) else ['watch']

        ###*
        Reset the validation for specific form
        ###
        scope.$on ctrl.$name + "reset-" + uid, ->
          ###*
          clear scope.$watch here
          when reset status
          clear the $watch method to prevent
          $watch again while reset the form
          ###
          watch()
          isFocusElement = false
          ctrl.$setViewValue ""
          ctrl.$setPristine()
          ctrl.$setValidity ctrl.$name, false
          ctrl.$render()
          element.next().html ""
          return


        ###*
        Check validator
        ###
        if 'watch' in validMethod
          ###*
          Validate watch method
          This is the default method
          ###
          scope.$watch "model", (value) ->
            ###*
            dirty, pristine, viewValue control here
            ###
            if ctrl.$pristine and ctrl.$viewValue
              ctrl.$setViewValue ctrl.$viewValue # has value when initial
            checkValidation scope, element, attrs, ctrl, validation, value unless ctrl.$pristine

        if 'submit' in validMethod
          ###*
          Click submit form, check the validity when submit
          ###
          scope.$on ctrl.$name + "submit-" + uid, (event, index) ->
            value = element[0].value
            isValid = false

            isFocusElement = false  if index is 0

            isValid = checkValidation(scope, element, attrs, ctrl, validation, value)

            if scope.validMethod is "submit"
              watch() # clear previous scope.$watch
              watch = scope.$watch "model", (value, oldValue) ->

                # don't watch when init
                return  if value is oldValue

                # scope.$watch will translate '' to undefined
                # undefined/null will pass the required submit /^.+/
                # cause some error in this validation
                value = ""  if value is `undefined` or value is null

                isValid = checkValidation(scope, element, attrs, ctrl, validation, value)

            # Focus first input element when submit error
            if not isFocusElement and not isValid
              isFocusElement = true
              element[0].focus()

        if 'blur' in validMethod
          ###*
          Validate blur method
          ###
          # todo get input element again after successful rendering
          element.bind "blur", ->
            value = element[0].value
            scope.$apply ->
              checkValidation scope, element, attrs, ctrl, validation, value

        if 'trigger' in validMethod
          ###*
          Validate trigger method
          ###
          scope.validTrigger
          scope.$on scope.validTrigger, ->
            checkValidation scope, element, attrs, ctrl, validation, value
  )
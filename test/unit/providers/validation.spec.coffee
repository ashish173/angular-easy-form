describe 'easy.form', ->
  describe 'providers', ->
    describe '$easyValidation', ->
      $rootScope = null
      $compile = null
      $scope = null
      $timeout = null
      element = null
      fakeModule = null
      easyValidationProvider = null

      beforeEach module('easy.form')
      beforeEach ->
        fakeModule = angular.module 'fakeModule', ['easy.form']
        fakeModule.config ($easyValidationProvider) ->
          easyValidationProvider = $easyValidationProvider
      beforeEach module('fakeModule')

      beforeEach inject ($injector) ->
        $rootScope = $injector.get("$rootScope")
        $compile = $injector.get("$compile")
        $scope = $rootScope.$new()
        $timeout = $injector.get("$timeout")
        element = $compile("<form name=\"Form\"><input type=\"text\" name=\"required\" ng-model=\"required\" validator=\"required\"></span></form>")($scope)


      describe 'setupProviders()', ->
        it 'check providers', inject ($injector) ->
          expect(easyValidationProvider.setupProviders($injector)).not.toThrow()

      describe 'convertRuleMapping(name, object = {})', ->
        it 'name should equal to the argument', inject ($easyValidation) ->
          mapping = $easyValidation.convertRuleMapping 'name', expression: ''
          expect(mapping.name).toEqual 'name'

        it 'expression should equal to the argument', inject ($easyValidation) ->
          mapping = $easyValidation.convertRuleMapping 'name', expression: /^\d+$/
          expect(mapping.expression).toEqual /^\d+$/

        it 'messages should equal to the argument', inject ($easyValidation) ->
          mapping = $easyValidation.convertRuleMapping 'name', expression: /^\d+$/, messages: {invalid: 'error!'}
          expect(mapping.messages).toEqual {invalid: 'error!'}

        it 'expression should equal to the argument', inject ($easyValidation) ->
          mapping = $easyValidation.convertRuleMapping 'name', translate: true
          expect(mapping.translate).toEqual true

        it 'messages should be a empty object by default', inject ($easyValidation) ->
          mapping = $easyValidation.convertRuleMapping 'name', expression: /^\d+$/
          expect(mapping.messages).toEqual {}

        it 'translate should be false by default', inject ($easyValidation) ->
          mapping = $easyValidation.convertRuleMapping 'name', expression: /^\d+$/
          expect(mapping.translate).toEqual false

      describe 'getRuleMapping(name)', ->
        it 'should return rule mapping by name', inject ($easyValidation) ->
          $easyValidation.register 'name', expression: /^\d+$/, messages: {invalid: 'error!'}, translate: true
          expect($easyValidation.getRuleMapping('name')).toEqual { name: 'name', expression: /^\d+$/, messages: {invalid: 'error!'}, translate: true }
          expect($easyValidation.getRuleMapping('xx')).toBeNull()


      describe 'getExpression(name)', ->
        it 'should return expression by name', inject ($easyValidation) ->
          $easyValidation.register 'name', expression: /^\d+$/, messages: {invalid: 'error!'}, translate: true
          expect($easyValidation.getExpression('name')).toEqual /^\d+$/
          expect($easyValidation.getExpression('xx')).toBeNull()

      describe 'getInvalidMessage(name)', ->
        it 'should return invalid message by name', inject ($easyValidation) ->
          $easyValidation.defaultInvalidMessage = 'default error message'
          $easyValidation.register 'name', expression: /^\d+$/, messages: {invalid: 'error!'}, translate: true
          expect($easyValidation.getInvalidMessage('name')).toEqual 'error!'
          expect($easyValidation.getInvalidMessage('xx')).toEqual $easyValidation.defaultInvalidMessage

      xdescribe 'checkValid(form)', ->
        it 'should check the form', ->
          expect(easyValidationProvider.checkValid($scope.Form)).toBe false
          $scope.$apply ->
            $scope.required = "required"

          expect(easyValidationProvider.checkValid($scope.Form)).toBe true
          $scope.$apply ->
            $scope.required = ""

          expect(easyValidationProvider.checkValid($scope.Form)).toBe false

      xit "reset", inject ->
        resetSpy = jasmine.createSpy("resetSpy")
        $scope.$on "requiredreset-" + $scope.Form.required.validationId, ->
          resetSpy()

        easyValidationProvider.reset $scope.Form
        expect(element.find("p")[0]).toBeUndefined()
        expect(resetSpy).toHaveBeenCalled()

      xit "validate - submit", inject ->
        submitSpy = jasmine.createSpy("submitSpy")
        successSpy = jasmine.createSpy("successSpy")
        errorSpy = jasmine.createSpy("errorSpy")
        submitSpy2 = jasmine.createSpy("submitSpy2")
        successSpy2 = jasmine.createSpy("successSpy2")
        errorSpy2 = jasmine.createSpy("errorSpy2")

        # test .success()
        $scope.$on "requiredsubmit-" + $scope.Form.required.validationId, ->
          submitSpy()

        $scope.$apply ->
          $scope.required = "Required"

        easyValidationProvider.validate($scope.Form).success(->
          successSpy()
        ).error ->
          errorSpy()

        $timeout.flush()
        expect(submitSpy).toHaveBeenCalled()
        expect(successSpy).toHaveBeenCalled()
        expect(errorSpy).not.toHaveBeenCalled()

        # test .error()
        $scope.$apply ->
          $scope.required = ""

        $scope.$on "requiredsubmit-" + $scope.Form.required.validationId, ->
          submitSpy2()

        easyValidationProvider.validate($scope.Form).success(->
          successSpy2()
        ).error ->
          errorSpy2()

        $timeout.flush()
        expect(submitSpy2).toHaveBeenCalled()
        expect(successSpy2).not.toHaveBeenCalled()
        expect(errorSpy2).toHaveBeenCalled()

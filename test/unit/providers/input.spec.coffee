describe 'easy.form', ->
  describe 'providers', ->
    describe '$easyInput', ->
      fakeModule = null
      easyInputProvider = null

      beforeEach module('easy.form')
      beforeEach ->
        fakeModule = angular.module 'fakeModule', ['easy.form']
        fakeModule.config ($easyInputProvider) ->
          easyInputProvider = $easyInputProvider
      beforeEach module('fakeModule')

      describe 'setupProviders()', ->
        it 'check providers', inject ($injector) ->
          expect(easyInputProvider.setupProviders($injector)).not.toThrow()

      describe 'convertInputMapping(name, object)', ->
        it 'name should equal to the argument', inject ($easyInput) ->
          mapping = $easyInput.convertInputMapping('name', templateUrl: '')
          expect(mapping.name).toEqual 'name'

        it 'templateUrl should equal to the argument', inject ($easyInput) ->
          mapping = $easyInput.convertInputMapping 'name', templateUrl: 'test.html'
          expect(mapping.templateUrl).toEqual 'test.html'

      describe 'convertWrapperMapping(name, object)', ->
        it 'name should equal to the argument', inject ($easyInput) ->
          mapping = $easyInput.convertWrapperMapping('name', templateUrl: '')
          expect(mapping.name).toEqual 'name'

        it 'templateUrl should equal to the argument', inject ($easyInput) ->
          mapping = $easyInput.convertWrapperMapping 'name', templateUrl: 'test.html'
          expect(mapping.templateUrl).toEqual 'test.html'

      describe 'getInputMapping', ->
        it 'check getInputMapping', inject ($easyInput) ->
          $easyInput.registerInput 'name',
            templateUrl: 'test.html'
          expect($easyInput.getInputMapping('name')).toEqual { name: 'name', templateUrl: 'test.html' }
          expect($easyInput.getInputMapping('xx')).toBeNull()

      describe 'getWrapperMapping', ->
        it 'check getWrapperMapping', inject ($easyInput) ->
          $easyInput.registerWrapper 'name',
            templateUrl: 'test.html'
          expect($easyInput.getWrapperMapping('name')).toEqual { name: 'name', templateUrl: 'test.html' }
          expect($easyInput.getWrapperMapping('xx')).toBeNull()

      describe 'getInputTemplate(name)', ->
        input = null
        defaultInput = null

        beforeEach inject ($templateCache, $easyInput)->
          input = '<div>input</div>'
          defaultInput = '<div>defaultInput</div>'

          $templateCache.put('input.html', input)
          $templateCache.put('default-input.html', defaultInput)

          $easyInput.registerInput('input', templateUrl: 'input.html')
          $easyInput.registerInput('default_input', templateUrl: 'default-input.html')

          $easyInput.setDefaultInput('default_input')

        it 'should render input by given name', inject ($easyInput) ->
          expect($easyInput.getInputTemplate('input')).toBe(input)

        it 'should render default input without name', inject ($easyInput) ->
          expect($easyInput.getInputTemplate()).toBe(defaultInput)

      describe 'getWrapperTemplate(name)', ->
        wrapper = null
        defaultWrapper = null

        beforeEach inject ($templateCache, $easyInput)->
          wrapper = '<div>wrapper</div>'
          defaultWrapper = '<div>defaultWrapper</div>'

          $templateCache.put('wrapper.html', wrapper)
          $templateCache.put('default-wrapper.html', defaultWrapper)

          $easyInput.registerWrapper('wrapper', templateUrl: 'wrapper.html')
          $easyInput.registerWrapper('default_wrapper', templateUrl: 'default-wrapper.html')

          $easyInput.setDefaultWrapper('default_wrapper')

        it 'should render wrapper by given name', inject ($easyInput) ->
          expect($easyInput.getWrapperTemplate('wrapper')).toBe(wrapper)

        it 'should render default wrapper without name', inject ($easyInput) ->
          expect($easyInput.getWrapperTemplate()).toBe(defaultWrapper)

      describe '$easyInput', ->
        it '$easyFormField.mappings and $easyFormFieldProvider.mappings are the same object', inject ($easyInput) ->
          expect($easyInput.mappings).toBe easyInputProvider.mappings
        it '$easyFormField.register and $easyFormFieldProvider.register are the same object', inject ($easyInput) ->
          expect($easyInput.registerInput).toBe easyInputProvider.registerInput
        it '$easyFormField.getMapping and $easyFormFieldProvider.getMapping are the same object', inject ($easyInput) ->
          expect($easyInput.getInputMapping).toBe easyInputProvider.getInputMapping
        it '$easyFormField.convertMapping and $easyFormFieldProvider.convertMapping are the same object', inject ($easyInput) ->
          expect($easyInput.convertInputMapping).toBe easyInputProvider.convertInputMapping
describe 'easy.form', ->
  describe 'providers', ->
    describe '$easyForm', ->
      fakeModule = null
      easyFormProvider = null

      beforeEach module('easy.form')
      beforeEach ->
        fakeModule = angular.module 'fakeModule', ['easy.form']
        fakeModule.config ($easyFormProvider) ->
          easyFormProvider = $easyFormProvider
      beforeEach module('fakeModule')


      describe 'setupProviders()', ->
        it 'check providers', inject ($injector) ->
          expect(easyFormProvider.setupProviders($injector)).not.toThrow()
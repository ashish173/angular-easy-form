describe 'easy.form', ->
  describe 'providers', ->
    describe '$easyButton', ->
      fakeModule = null
      easyButtonProvider = null

      beforeEach module('easy.form')
      beforeEach ->
        fakeModule = angular.module 'fakeModule', ['easy.form']
        fakeModule.config ($easyButtonProvider) ->
          easyButtonProvider = $easyButtonProvider
      beforeEach module('fakeModule')


      describe 'setupProviders()', ->
        it 'check providers', inject ($injector) ->
          expect(easyButtonProvider.setupProviders($injector)).not.toThrow()
describe 'easy.form', ->
  describe 'default', ->
    beforeEach module('easy.form')

    describe 'inputMappings', ->
      it 'should have 16 default inputMappings by initialization', inject ($easyInput) ->
        expect(16).toBe Object.keys($easyInput.inputMappings).length

    describe 'wrapperMappings', ->
      it 'should have 10 default inputMappings by initialization', inject ($easyInput) ->
        expect(10).toBe Object.keys($easyInput.wrapperMappings).length

    describe 'ruleMappings', ->
      it 'should have 4 default ruleMappings by initialization', inject ($easyValidation) ->
        expect(4).toBe Object.keys($easyValidation.ruleMappings).length
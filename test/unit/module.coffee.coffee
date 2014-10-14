describe "easy.form", ->
  describe "module", ->
    module = undefined

    beforeEach ->
      module = angular.module('easy.form')

    it "should be registered", ->
      expect(module).toBeDefined()

    describe "Dependencies:", ->
      deps = undefined

      hasModule = (m)->
        deps.indexOf(m) >= 0

      beforeEach ->
        deps = module.value('appName').requires

      it "should have easy.form.directives as a dependency", ->
        expect(hasModule('easy.form.directives')).toBeTruthy()

      it "should have easy.form.providers as a dependency", ->
        expect(hasModule('easy.form.providers')).toBeTruthy()

      it "should have easy.form.templates as a dependency", ->
        expect(hasModule('easy.form.templates')).toBeTruthy()

      it "should have easy.form.default as a dependency", ->
        expect(hasModule('easy.form.default')).toBeTruthy()
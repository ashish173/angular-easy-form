describe "easy.form", ->
  describe 'directives', ->
    describe 'easyForm', ->
      $scope = undefined
      element = undefined

      beforeEach module('easy.form')

      beforeEach inject ($compile, _$rootScope_) ->
        $scope = _$rootScope_.$new()
        element = angular.element('<easy-form-field type="text"></easy-form-field>')
        $compile(element)($scope)
        $scope.$digest()

      xit 'should render with text input', ->
        expect(element).toBe(2)

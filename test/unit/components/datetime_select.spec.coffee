describe "easy.form", ->
  describe 'components', ->
    describe 'EasyDateTimeSelect', ->

      beforeEach module("easy.form.directives", "easy.form.templates", "template/easy-form/datetime-select.html")

      # angular specific stuff
      $rootScope = undefined
      $compile = undefined
      $scope = undefined

      beforeEach inject (_$rootScope_, _$compile_) ->
        $rootScope = _$rootScope_
        $scope = $rootScope.$new()
        $compile = _$compile_

      # object specific stuff
      element = undefined
      createDateSelect = undefined
      createMonthSelect = undefined

      beforeEach inject () ->
        createDateSelect = () ->
          element = angular.element("<easy-datetime-select ng-model='dateModel'></easy-datetime-select>")
          $scope.dateModel = "2014-12-22"
          $compile(element)($scope)
          $scope.$digest()

        createMonthSelect = () ->
          element = angular.element("<easy-datetime-select ng-model='dateModel'></easy-datetime-select>")
          $scope.dateModel = "2014-12-22"
          $compile(element)($scope)
          $scope.$digest()

#      it 'should render with date select boxes', ->
#        createDateSelect()
#        selectList = element.find('select')
#        expect(selectList.length).toBe(3)

  #    it 'should render with month select boxes', ->
  #      createDateSelect()
  #      selectList = element.find('select')
  #      expect(selectList.length).toBe(3)

  #    it 'should parse the year, month, day from given model', ->
  #      createDateSelect()
  ##      $scope = element.isolateScope()
  #      expect($scope.year).toBe(3)


describe "easy.form", ->
  describe 'directives', ->
    describe 'easyInput', ->
      $scope = null
      $rootScope = null
      $timeout = null
      $compile = null
      $templateCache = null
      $sniffer = null

      wrapperScope = null
      inputScope = null

      element = null
      wrapperElement = null
      formElement = null
      inputElement = null
      labelElement = null

      mockedWrapperHTML = null
      mockedInputHTML = null

      beforeEach module('easy.form')

      beforeEach inject (_$rootScope_, _$compile_, _$timeout_, _$templateCache_, _$easyInput_, _$sniffer_) ->
        $rootScope = _$rootScope_
        $scope = $rootScope.$new()
        $compile = _$compile_
        $timeout = _$timeout_
        $templateCache = _$templateCache_
        $sniffer = _$sniffer_

        mockedWrapperHTML = """
                            <div class='mocked-wrapper' ng-class="{'has-error': formIn.inputIn.$invalid}">
                              <label class="control-label" ng-class="labelClassArr" ng-show="label">{{label}}</label>
                              <div ng-class="controlClassArr">
                                <easy-input-field ng-model="model" options="options" placeholder="placeholder" ng-disabled="ngDisabled"></easy-input-field>
                                <ng-transclude></ng-transclude>
                              </div>
                            </div>
                            """
        mockedInputHTML = """
                          <input name="inputIn" type="text" class="form-control mocked-input" placeholder="{{placeholder}}" ng-model="model" />{{model}}
                          """
        $templateCache.put "mocked-wrapper.html", mockedWrapperHTML
        $templateCache.put "mocked-input.html", mockedInputHTML

        _$easyInput_.registerWrapper('mockedWrapper', templateUrl: 'mocked-wrapper.html')
        _$easyInput_.registerInput('mockedInput', templateUrl: 'mocked-input.html')

      beforeEach ->
        $scope.inputModel = 'test'
        $scope.label = 'test label'
        $scope.placeholder = 'test placeholder'
        element = angular.element """
                                  <form><easy-input ng-model="inputModel" type="mockedInput"
                                                    wrapper="mockedWrapper"
                                                    label="label" placeholder="placeholder"
                                                    label-class="label-class-1, label-class-2"
                                                    control-class="control-class-1, control-class-2"
                                                    validator="required"></easy-input></form>
                                  """
        $compile(element)($scope)
        $scope.$apply()

        formElement = element
        wrapperElement = element.find('easy-input').eq(0)
        inputElement = element.find('input').eq(0)
        labelElement = element.find('label').eq(0)

        wrapperScope = wrapperElement.isolateScope()
        inputScope = inputElement.isolateScope()

      describe 'initialize', ->
        xit 'should set options if scope.option ', ->
          $scope.inputModel = 'test'
          $scope.options =
            type: 'mockedInput'
            wrapper: 'mockedWrapper'
            ngDisabled: true
            label: 'label'
            placeholder: 'placeholder'
            labelCol: '3,3'
            labelClass: 'labelClass'
            controlCol: '9,9'
            controlClass: 'controlClass'
            changeCallback: ->
            validCallback: ->
            invalidCallback: ->

          element = angular.element """
                                    <form name="Form"><easy-input ng-model="inputModel" options="options"></easy-input></form>
                                    """
          $compile(element)($scope)
          $scope.$apply()
          formElement = element
          wrapperElement = element.find('easy-input').eq(0)
          wrapperScope = wrapperElement.isolateScope()
          expect(wrapperScope.type).toBe 'text'
          expect(wrapperScope.ngDisabled).toBeTruthy
          expect(wrapperScope.changeCallback).toEqual $scope.options.changeCallback()


      describe 'render', ->
        it 'should render wrapper', ->
          expect(wrapperElement.hasClass('mocked-wrapper')).toBeTruthy

        it 'should render input', ->
          expect(inputElement.hasClass('mocked-wrapper')).toBeTruthy

        it 'should render label', ->
          expect(labelElement.text()).toBe('test label')
          $scope.label = 'test label2'
          $scope.$apply()
          expect(labelElement.text()).toBe('test label2')

        it 'should render placeholder', ->
          expect(inputElement.attr("placeholder")).toBe('test placeholder')
          $scope.placeholder = 'test placeholder2'
          $scope.$apply()
          expect(inputElement.attr("placeholder")).toBe('test placeholder2')

        it 'should render labelClass', ->
          expect(wrapperScope.labelClassArr).toEqual ['label-class-1', 'label-class-2']
          expect(labelElement.hasClass('label-class-1')).toBeTruthy
          expect(labelElement.hasClass('label-class-2')).toBeTruthy

        it 'should render controlClass', ->
          expect(wrapperScope.controlClassArr).toEqual ['control-class-1', 'control-class-2']
          expect(labelElement.hasClass('control-class-1')).toBeTruthy
          expect(labelElement.hasClass('control-class-2')).toBeTruthy

        xit 'should render transclude input', ->
          element = angular.element """
                                    <easy-input ng-model="inputModel"><p>blablabla</p></easy-input>
                                    """
          $compile(element)($scope)
          $scope.$apply()
          formElement = element
          wrapperElement = element.find('easy-input').eq(0)
          wrapperScope = wrapperElement.isolateScope()
          expect(wrapperScope.type).toBe 'text'
          expect(wrapperScope.ngDisabled).toBeTruthy
          expect(wrapperScope.changeCallback).toEqual $scope.options.changeCallback()


      describe 'validate', ->
        beforeEach ->
          $scope.inputModel = ''
          $scope.label = 'test label'
          $scope.placeholder = 'test placeholder'
          element = angular.element """
                                      <form name="form"><easy-input ng-model="inputModel" type="mockedInput"
                                                        wrapper="mockedWrapper"
                                                        validator="required"></easy-input></form>
                                      """
          $compile(element)($scope)
          $scope.$apply()

          formElement = element
          wrapperElement = element.find('easy-input').eq(0)
          inputElement = element.find('input').eq(0)
          labelElement = element.find('.control-label').eq(0)

          wrapperScope = wrapperElement.isolateScope()
          inputScope = inputElement.isolateScope()

        describe 'initialize', ->
          it 'should has empty valid message', ->
            expect(wrapperScope.validMessage).toBe null

          it 'should has empty invalid message', ->
            expect(wrapperScope.invalidMessage).toBe null

          it "form should be pristine and invalid", ->
            expect($scope.form.$pristine).toBe true
            expect(element.hasClass("ng-pristine")).toBe true
            expect($scope.form.$invalid).toBe true
            expect(element.hasClass("ng-invalid")).toBe true


        describe 'Check validator', ->
          it 'should be dirty after input', ->
            $scope.$apply ->
              $scope.inputModel = "Required"
            expect($scope.form.$dirty).toBe true
            expect(element.hasClass("ng-dirty")).toBe true

          describe 'watch', ->
            it "should be valid and has class 'validation-valid' after input", ->
              $scope.$apply ->
                $scope.inputModel = "Required"
              expect($scope.form.$valid).toBe true
              expect(element.hasClass("ng-valid")).toBe true

            it "should be invalid and has class 'validation-invalid' after empty input",  ->
              $scope.$apply ->
                $scope.required = "Required"
              $scope.$apply ->
                $scope.required = ""
              expect($scope.form.$invalid).toBe true
              expect(element.hasClass("ng-invalid")).toBe true

          describe 'blur', ->
          describe 'submit', ->
          describe 'trigger', ->

        describe 'custom validation rules', ->


        xit "no-validation-message", inject ->
          display = null

          # given no-validation-message="true"
          element = $compile("<form name=\"Form\"><input type=\"text\" name=\"required\" ng-model=\"required\" validator=\"required\" no-validation-message=\"true\"></span></form>")($scope)
          $timeout.flush()
          display = element.find("span").css("display")
          expect(display).toBe "none"

          # given no-validation-message="false"
          element = $compile("<form name=\"Form\"><input type=\"text\" name=\"required\" ng-model=\"required\" validator=\"required\" no-validation-message=\"false\"></span></form>")($scope)
          $timeout.flush()
          display = element.find("span").css("display")
          expect(display).toBe "block"

          # given no-validation-message="{{ noValidMessage }}" -> 'true'
          $scope.noValidMessage = "true"
          element = $compile("<form name=\"Form\"><input type=\"text\" name=\"required\" ng-model=\"required\" validator=\"required\" no-validation-message=\"{{ noValidMessage }}\"></span></form>")($scope)
          $timeout.flush()
          display = element.find("span").css("display")
          expect(display).toBe "none"

          # given no-validation-message="{{ noValidMessage }}" -> true
          $scope.$apply ->
            $scope.noValidMessage = true

          display = element.find("span").css("display")
          expect(display).toBe "none"

          # given no-validation-message="{{ noValidMessage }}" -> 'false'
          $scope.$apply ->
            $scope.noValidMessage = "false"

          display = element.find("span").css("display")
          expect(display).toBe "block"

          # given no-validation-message="{{ noValidMessage }}" -> false
          $scope.$apply ->
            $scope.noValidMessage = false

          display = element.find("span").css("display")
          expect(display).toBe "block"

      describe 'ngModel', ->
        it 'should popup the model value to external scope', ->
          wrapperScope.$apply ->
            wrapperScope.model = 'test2'
          expect($scope.inputModel).toBe "test2"

        it 'should receiver the model changing from external scope', ->
          $scope.$apply ->
            $scope.inputModel = 'test2'
          expect(wrapperScope.model).toBe 'test2'


      describe 'changeCallback', ->
        xit 'should should execute callback if model changed', ->
          # todo passed browser testing, but failed in jasmin testing
          $scope.testChange = ->

          spyOn($scope, 'testChange').andCallThrough()
          #          spyOn($scope, 'testChange').and.returnValue(745)

          element = angular.element """
                                    <form><easy-input ng-model="inputModel" ng-change="testChangeCallback()"></easy-input></form>
                                    """

          $compile(element)($scope)
          $scope.$apply()
          formElement = element
          wrapperElement = element.find('easy-input').eq(0)
          wrapperScope = wrapperElement.isolateScope()

          expect($scope.testChange).not.toHaveBeenCalled()

          wrapperScope.$apply ->
            wrapperScope.model = 'test2'

          expect($scope.testChange).toHaveBeenCalled()


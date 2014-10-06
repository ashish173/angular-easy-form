'use strict'

###*
  # @ngdoc directive
  # @name easy.form.components:easyDatetimeSelect
  # @module easy.form.components
  #
  # @restrict AE
###

angular.module 'easy.form.components'
.directive "easyDatetimeSelect", ($compile, $templateCache)->
  ###*
  Compile dynamic template in runtime
  @param element
  @param scope
  @param template
  ###
  setElementTemplate = (element, scope, template) ->
    element.html(template)
    $compile(element.contents())(scope)

  getTemplate = (minView='day') ->
    if minView is 'month'
      templateUrl = 'template/easy-form/components/month-select.html'
    else
      templateUrl = 'template/easy-form/components/date-select.html'
    $templateCache.get(templateUrl)


  return(
    restrict: "AE"
    scope:
      ngModel: '='
      minYear: '='
      maxYear: '='
      minView: '@'
    link: (scope, element)->
      template = getTemplate(scope.minView)
      if template then setElementTemplate(element, scope, template)

    controller: ($scope) ->
      maxYear = if $scope.maxYear then $scope.maxYear else moment().year()
      minYear = if $scope.minYear then $scope.minYear else 1940

      $scope.monthOptions = []
      $scope.yearOptions = []
      $scope.dayOptions = []

      dateObj = new Date($scope.ngModel)

      $scope.monthOptions.push {
        key: num
        text: moment().month(num - 1).format("MMM")
      } for num in [1..12]

      $scope.yearOptions.push {
        key: num
        text: moment().year(num).format("YYYY")
      } for num in [maxYear .. minYear]

      $scope.dayOptions.push {
        key: num
        text: moment().day(num - 1).format("DD")
      } for num in [1 .. 31]

      $scope.year = dateObj.getFullYear()
      $scope.month = dateObj.getMonth()
      $scope.day = dateObj.getDate()


      $scope.$watch 'year', ->
        $scope.ngModel = moment($scope.ngModel).set('year', $scope.year).format('YYYY-MM-DD')

      $scope.$watch 'month', ->
        $scope.ngModel = moment($scope.ngModel).set('month', $scope.month - 1).format('YYYY-MM-DD')

      unless $scope.minView = 'month'
        $scope.$watch 'day', ->
          $scope.ngModel = moment($scope.ngModel).set('day', $scope.day - 1).format('YYYY-MM-DD')
  )

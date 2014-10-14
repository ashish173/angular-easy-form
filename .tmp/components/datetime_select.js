(function() {
  'use strict';

  /**
     * @ngdoc directive
     * @name easy.form.components:easyDatetimeSelect
     * @module easy.form.components
     *
     * @restrict AE
   */
  angular.module('easy.form.components').directive("easyDatetimeSelect", function($compile, $templateCache) {

    /**
    Compile dynamic template in runtime
    @param element
    @param scope
    @param template
     */
    var getTemplate, setElementTemplate;
    setElementTemplate = function(element, scope, template) {
      element.html(template);
      return $compile(element.contents())(scope);
    };
    getTemplate = function(minView) {
      var templateUrl;
      if (minView == null) {
        minView = 'day';
      }
      if (minView === 'month') {
        templateUrl = 'template/easy-form/components/month-select.html';
      } else {
        templateUrl = 'template/easy-form/components/date-select.html';
      }
      return $templateCache.get(templateUrl);
    };
    return {
      restrict: "AE",
      scope: {
        ngModel: '=',
        minYear: '=',
        maxYear: '=',
        minView: '@'
      },
      link: function(scope, element) {
        var template;
        template = getTemplate(scope.minView);
        if (template) {
          return setElementTemplate(element, scope, template);
        }
      },
      controller: function($scope) {
        var dateObj, maxYear, minYear, num, _i, _j, _k;
        maxYear = $scope.maxYear ? $scope.maxYear : moment().year();
        minYear = $scope.minYear ? $scope.minYear : 1940;
        $scope.monthOptions = [];
        $scope.yearOptions = [];
        $scope.dayOptions = [];
        dateObj = new Date($scope.ngModel);
        for (num = _i = 1; _i <= 12; num = ++_i) {
          $scope.monthOptions.push({
            key: num,
            text: moment().month(num - 1).format("MMM")
          });
        }
        for (num = _j = maxYear; maxYear <= minYear ? _j <= minYear : _j >= minYear; num = maxYear <= minYear ? ++_j : --_j) {
          $scope.yearOptions.push({
            key: num,
            text: moment().year(num).format("YYYY")
          });
        }
        for (num = _k = 1; _k <= 31; num = ++_k) {
          $scope.dayOptions.push({
            key: num,
            text: moment().day(num - 1).format("DD")
          });
        }
        $scope.year = dateObj.getFullYear();
        $scope.month = dateObj.getMonth();
        $scope.day = dateObj.getDate();
        $scope.$watch('year', function() {
          return $scope.ngModel = moment($scope.ngModel).set('year', $scope.year).format('YYYY-MM-DD');
        });
        $scope.$watch('month', function() {
          return $scope.ngModel = moment($scope.ngModel).set('month', $scope.month - 1).format('YYYY-MM-DD');
        });
        if (!($scope.minView = 'month')) {
          return $scope.$watch('day', function() {
            return $scope.ngModel = moment($scope.ngModel).set('day', $scope.day - 1).format('YYYY-MM-DD');
          });
        }
      }
    };
  });

}).call(this);

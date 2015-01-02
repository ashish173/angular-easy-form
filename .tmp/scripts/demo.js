(function() {
  var app;

  app = angular.module('demoApp', ['pascalprecht.translate', 'easy.form']);

  app.config(function($translateProvider) {
    var translationsDE, translationsEN;
    translationsEN = {
      custom_validate_error_2: 'This should be greater then model 1.',
      LABEL: 'translated label',
      PLACEHOLDER: 'translated placeholder'
    };
    translationsDE = {
      custom_validate_error_2: 'This should be greater then model 1.(DE)',
      LABEL: 'translated label(DE)',
      PLACEHOLDER: 'translated placeholder(DE)'
    };
    return $translateProvider.translations('en', translationsEN).translations('de', translationsDE).preferredLanguage('en');
  });

  app.controller('DemoCtrl', function($scope, $http, $translate) {
    $scope.disabled = void 0;
    $scope.checkboxOptions = {
      checkbox: {
        text: 'text of checkbox'
      }
    };
    $scope.checkboxesOptions = {
      checkboxes: {
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.checkboxesInlineOptions = {
      checkboxes: {
        inline: true,
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.radiosOptions = {
      radios: {
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.radiosInlineOptions = {
      radios: {
        inline: true,
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.selectOptions = {
      select: {
        collection: ['key1', 'key2', 'key3']
      }
    };
    $scope.selectSingleCustomizeSelectOptions = {
      select: {
        selectOptions: function() {
          return 'item.text for item in options.select.collection';
        },
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.selectMultipleOptions = {
      select: {
        multiple: true,
        selectOptions: function() {
          return 'item.text for item in options.select.collection';
        },
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.uiSelectOptions = {
      uiSelect: {
        searchEnabled: false,
        allowEmpty: true,
        formatSelection: function(item) {
          if ((item != null) && (item.text != null)) {
            return item.text;
          }
        },
        formatResult: function(item) {
          if ((item != null) && (item.text != null)) {
            return item.text;
          }
        },
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.uiSelectSinglePropertyOptions = {
      uiSelect: {
        searchEnabled: false,
        bindProperty: 'key',
        formatSelection: function(item) {
          if ((item != null) && (item.text != null)) {
            return item.text;
          }
        },
        formatResult: function(item) {
          if ((item != null) && (item.text != null)) {
            return item.text;
          }
        },
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.uiSelectMultipleOptions = {
      uiSelect: {
        multiple: true,
        formatSelection: function(item) {
          return item.text;
        },
        formatResult: function(item) {
          return item.text;
        },
        collection: [
          {
            key: 'key1',
            text: 'option 1'
          }, {
            key: 'key2',
            text: 'option 2'
          }, {
            key: 'key3',
            text: 'option 3'
          }
        ]
      }
    };
    $scope.uiSelectRemoteOptions = {
      uiSelect: {
        formatSelection: function(item) {
          return item.name;
        },
        formatResult: function(item) {
          return item.name;
        },
        refresh: function(address) {
          var params;
          params = {
            address: address
          };
          return $http.get("json/countries.json", {
            params: params
          }).then(function(response) {
            return $scope.uiSelectRemoteOptions.uiSelect.collection = response.data;
          });
        }
      }
    };
    $scope.demo = {
      controls: {
        inputs: {},
        checkboxes: {
          checkbox: true,
          checkboxes: [],
          checkboxesInline: []
        },
        uiSelect: {
          basic: {
            key: 'key1',
            text: 'option 1'
          },
          multiple: [
            {
              key: 'key1',
              text: 'option 1'
            }, {
              key: 'key2',
              text: 'option 2'
            }
          ],
          remote: {
            name: "Sudan",
            code: "SD"
          }
        }
      },
      validation: {}
    };
    $scope.enable = function() {
      return $scope.disabled = false;
    };
    $scope.disable = function() {
      return $scope.disabled = true;
    };
    $scope.submit = function() {
      return alert('submitting');
    };
    $scope.trigValidation = function() {
      return $scope.$broadcast('trigge-validate');
    };
    $scope.validCallback = function() {
      return alert('valid');
    };
    $scope.invalidCallback = function() {
      return alert('invalid');
    };
    $scope.customValid = {
      name: 'big',
      expression: function(value) {
        if (value == null) {
          return true;
        }
        return parseInt(value) > parseInt($scope.demo.validation.customize1);
      },
      messages: {
        invalid: "custom_validate_error_2"
      },
      translate: true
    };
    $scope.$watch('demo.validation.customize1', function(newVal, oldVal) {
      var model2;
      model2 = $scope.customValidateForm.model2;
      if (model2.$invalid && model2.$dirty) {
        return $scope.$broadcast('trigger-model2-validate');
      }
    });
    return $scope.changeLanguage = function(langKey) {
      return $translate.use(langKey);
    };
  });

  app.config(function($easyInputProvider) {
    return $easyInputProvider.registerInput('custom-input', {
      templateUrl: 'easy-form/templates/inputs/custom-select.html'
    });
  });

  app.run(function($templateCache) {
    return $templateCache.put("easy-form/templates/inputs/month-select.html", "<div class=\"row\">\n" + "    <div class=\"col-xs-7\">\n" + "        <select class=\"form-control\" name=\"year-select\" ng-model=\"year\" ng-options=\"option.key as option.text for option in yearOptions\">\n" + "        </select>\n" + "    </div>\n" + "\n" + "    <div class=\"col-xs-6\">\n" + "        <select class=\"form-control\" name=\"month-select\" ng-model=\"month\" ng-options=\"option.key as option.text for option in monthOptions\">\n" + "        </select>\n" + "    </div>\n" + "\n" + "    <div class=\"col-xs-5\">\n" + "        <select class=\"form-control\" name=\"day-select\" ng-model=\"day\" ng-options=\"option.key as option.text for option in dayOptions\">\n" + "        </select>\n" + "    </div>\n" + "</div>");
  });

}).call(this);

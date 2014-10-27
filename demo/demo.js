(function() {
  var app;

  app = angular.module('demoApp', ['easy.form']);

  app.controller('DemoCtrl', function($scope, $http) {
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
      }
    };
    $scope.enable = function() {
      return $scope.disabled = false;
    };
    $scope.disable = function() {
      return $scope.disabled = true;
    };
    $scope.trigValidation = function() {
      return $scope.$broadcast('trigge-validate');
    };
    $scope.validCallback = function() {
      return alert('valid');
    };
    return $scope.invalidCallback = function() {
      return alert('invalid');
    };
  });

}).call(this);

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
    $scope.selectOptions = {
      select: {
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
    $scope.uiSelectMultipleOptions = {
      uiSelect: {
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
    return $scope.disable = function() {
      return $scope.disabled = true;
    };
  });

}).call(this);

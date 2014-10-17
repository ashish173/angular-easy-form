(function() {
  var app;

  app = angular.module('demoApp', ['easy.form']);

  app.controller('DemoCtrl', function($scope, $http) {
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
        refresh: function(address) {
          var params;
          params = {
            address: address,
            sensor: false
          };
          return $http.get("http://maps.googleapis.com/maps/api/geocode/json", {
            params: params
          }).then(function(response) {
            var result, _i, _len, _ref, _results;
            $scope.uiSelectRemoteOptions.uiSelect.collection = [];
            _ref = response.data.results;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              result = _ref[_i];
              _results.push($scope.uiSelectRemoteOptions.uiSelect.collection.push({
                key: result.formatted_address,
                text: result.formatted_address
              }));
            }
            return _results;
          });
        }
      }
    };
    return $scope.demo = {
      controls: {
        inputs: {},
        checkboxes: {
          checkbox: true,
          checkboxes: [],
          checkboxesInline: []
        }
      }
    };
  });

}).call(this);

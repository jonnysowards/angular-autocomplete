var exampleApp = angular.module('exampleApp',
    [
        "angularAutocomplete"
    ]
).controller('exampleController', function($scope) {
    $scope.items = [
        {partNum: "Q5950A"},
        {partNum: "Q5951A"},
        {partNum: "Q5952A"},
    ];

    $scope.updateItem = function(typed){
        console.log(typed);
    }
});
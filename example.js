var exampleApp = angular.module('exampleApp',
    [
	"ngTouch",
	"angularAutocomplete"
    ]
).controller('exampleObjectController', function($scope) {
    $scope.items = [
        {partNum: "Q5950A"},
        {partNum: "Q5951A"},
        {partNum: "Q5952A"},
    ];

    console.log($scope.items[0]);

    $scope.updateObjectItems = function(typedString){
        console.log(typedString);
        $scope.partToSelectObject = typedString;
    }

    
    $scope.part = 0;
    
    $scope.test = "helloworld";
}).controller('exampleStringController', function($scope) {
        $scope.stringItems = [
            "Q5950A",
            "Q5951A",
            "Q5952A"
        ];


        $scope.updateStringItems = function(typedObject){
            console.log(typedObject);
            $scope.partToSelectString = typedObject;
        }


        $scope.part = 0;

        $scope.test = "helloworld";
    });

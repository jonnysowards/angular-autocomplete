angular-autocomplete
====================

Autocomplete Directive for AngularJS

Angular Autocomplete was built with simplicity in mind assign ac-items="" attribute to a simple json
array of strings or objects. If it is an array of objects specify which attribute in the object
contains the autocomplete string you would like to match with ac-term="". If you are just using an
array of strings do not add this attribute. Create a function to call on key up to update the item
in your $scope you would like to update, along with having the ability to update any of the scope
attributes you would like. Lastly add a placeholder for placeholding text before you start to use
autocomplete.

Depends on jQuery do not forget to load the jQuery library.

Usage:

```
<script>
    angular.module('exampleApp',
            [
                "angularAutocomplete"
            ]
    ).controller('exampleObjectController', function($scope) {
        $scope.items = [
            {partNum: "Q5950A"},
            {partNum: "Q5951A"},
            {partNum: "Q5952A"},
        ];

        $scope.updateObjectItems = function(typedString){
            console.log(typedString);
            $scope.partToSelectObject = typedString;
        }
    });
</script>

<div ng-controller="exampleObjectController">
    <ng-autocomplete ac-items="items" ac-term="'partNum'" ac-keyup="updateObjectItems" placeholder="Part Number..." ng-model="partToSelectObject"></ng-autocomplete>
    Selected Item: {{partToSelectObject}}
</div>
```

Known Bug:

Only one instance of this directive can be used at a time, as the scope is currently shared. Working on trying to isolate the socpe.

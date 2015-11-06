var app = angular.module('angularAutocomplete', []);
app.directive('ngAutocomplete', function ($http, $templateCache) {
    return {
        require: "ngModel",
        restrict: 'E',
        scope: {
            acItems: '=acItems',
            acTerm: '=acTerm',
            acKeyup: '=acKeyup',
            ngModel: '=ngModel',
            placeholder: '@placeholder'
        },
        templateUrl: function(elem,attrs) {
            return attrs.templateUrl || 'angular-autocomplete.html'
        },
        link: function (scope, $element, $attrs, ngModel) {
            scope.acShow = false;
            scope.index = 0;
            scope.preSelect;
            scope.key = {left: 37, up: 38, right: 39, down: 40 , enter: 13, esc: 27, tab: 9};
            scope.updateAutoComplete = function (event) {
                console.log(scope.index);
                switch (event.keyCode) {
                    case scope.key.down:
                        if(scope.acItems.length > scope.index + 1){
                            scope.index ++;
                        }else{
                            scope.index = 0;
                        }
                        break;
                    case scope.key.up:
                        if(0 <= scope.index - 1){
                            scope.index --;
                        }else{
                            scope.index = scope.acItems.length-1;
                        }
                        break;
                    case scope.key.enter:
                    case scope.key.right:
                    case scope.key.tab:
                        scope.acShow = false;
                        scope.setAutocomplete();
                        console.log(scope.autocomplete);
                        scope.acKeyup(scope.autocomplete);
                        break;
                    case scope.key.esc:
                        scope.acShow = false;
                        break;
                    default:
                        scope.acShow = true;
                        scope.acKeyup(scope.autocomplete);
                        break;
                }
            }

            scope.checkForTab = function(event){
                if(event.keyCode == 9){
                    scope.acShow = false;
                    scope.setAutocomplete();
                    scope.acKeyup(scope.autocomplete);
                }
            }

            scope.setIndex = function(index){
                scope.index = index;
                scope.setAutocomplete();
                scope.acShow = false;
                scope.acKeyup(scope.autocomplete);
            }


            scope.setAutocomplete = function(){
                console.log(scope.items);
                scope.autocomplete = scope.acItems[scope.index][scope.acTerm];
                scope.ngModel = scope.acItems[scope.index];
                scope.index = 0;
            }

            scope.$watch("ngModel", function() {
                scope.ngModel = ngModel.$modelValue;
                scope.autocomplete = scope.ngModel[scope.acTerm];
            });
        }
    }
});

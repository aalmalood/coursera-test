(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.lunchStatus = "";
      $scope.lunchItems = "";
    
      $scope.checkLunchItems = function () {
          var lunchItemsArray = $scope.lunchItems.split(',');
          var validateLunchItemSpaces = $scope.lunchItems.split(' ');
          var counter = 0 ;
          if($scope.lunchItems.length == 0 || validateLunchItemSpaces.length ==0){
            $scope.lunchStatus = "Please enter data first!"
            return;
          }
          counter = $scope.calculateItems(lunchItemsArray,counter);
          if(counter > 3){
            $scope.lunchStatus = "Too much!";
          }else if (counter == 0){
            $scope.lunchStatus = "Please enter data first!";
          }else{
            $scope.lunchStatus = "Enjoy!";
          }
      };
    
      $scope.calculateItems = function (lunchItemsArray,counter) {
          for(let i = 0 ; i < lunchItemsArray.length; i++){
            var validateEmptyString = lunchItemsArray[i].split(' ').toString;
              if(lunchItemsArray[i] != "" && validateEmptyString != "" && (validateEmptyString.length != 0 || lunchItemsArray[i].length != 0)){
                  counter+=1;
              }
              console.log(lunchItemsArray[i]);
              console.log(validateEmptyString.length);
            }
          return counter;
      };
    }
    
    })();
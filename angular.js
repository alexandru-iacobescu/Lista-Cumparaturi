
     var app = angular.module('Lista', []);

     function ListaController($scope) {

         $scope.showInputs = false;

         $scope.show = function () {
             if ($scope.showInputs)
                $scope.showInputs = false;
             else
                $scope.showInputs = true;
         }

         $scope.products = [];

         $scope.addProduct = function(){
             $scope.products.push({
                 name: $scope.newProductName,
                 details: $scope.newProductDetails
         });
             $scope.newProductName="";
             $scope.newProductDetails="";

         }

         $scope.edit=function(){

         }
     }








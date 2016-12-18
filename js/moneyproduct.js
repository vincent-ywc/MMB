 /*
  * @Author: zhengwei
  * @Date:   2016-10-24 22:14:54
  * @Last Modified by:   zhengwei
  * @Last Modified time: 2016-12-03 17:18:18
  */

 'use strict';
 var moneyproductController = myApp.controller('moneyproductController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
     $scope.getMoneyProduct = function() {
         $http({
             method: 'get',
             url: 'http://mmb.ittun.com/api/getmoneyctrlproduct',
             params: { "productid": $scope.productId }
         }).success(function(data) {
             for (var i = 0; i < data.result.length; i++) {
                 data.result[i].productImgSm = $sce.trustAsHtml(data.result[i].productImgSm);
                 data.result[i].productCity = $sce.trustAsHtml(data.result[i].productCity);
                 data.result[i].productComment = $sce.trustAsHtml(data.result[i].productComment);
                 data.result[i].productImg2 = $sce.trustAsHtml(data.result[i].productImg2);
                 data.result[i].productImg3 = $sce.trustAsHtml(data.result[i].productImg3);
                 data.result[i].productImgLg = $sce.trustAsHtml(data.result[i].productImgLg);
             }
             $scope.moneyproduct = data.result[0];
         });
     }
     $scope.getMoneyProduct();
 }]);

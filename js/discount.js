/*
 * @Author: zhengwei
 * @Date:   2016-10-24 22:14:54
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-05 15:34:26
 */

'use strict';
 var discountController = myApp.controller('discountController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
     $scope.getMoneyProduct = function() {
         $http({
             method: 'get',
             url: 'http://mmb.ittun.com/api/getdiscountproduct',
             params: { "productid": $scope.productId }
         }).success(function(data) {
             for (var i = 0; i < data.result.length; i++) {
                 data.result[i].productImgSm = $sce.trustAsHtml(data.result[i].productImgSm);
                 data.result[i].productImg = $sce.trustAsHtml(data.result[i].productImg);
                 data.result[i].productCity = $sce.trustAsHtml(data.result[i].productCity);
                 data.result[i].productComment = $sce.trustAsHtml(data.result[i].productComment);
                 data.result[i].productImg2 = $sce.trustAsHtml(data.result[i].productImg2);
                 data.result[i].productImg3 = $sce.trustAsHtml(data.result[i].productImg3);
                 data.result[i].productImgLg = $sce.trustAsHtml(data.result[i].productImgLg);
             }
             $scope.moneyproduct = data.result[0];
             console.log($scope.moneyproduct);
         });
     }
     $scope.getMoneyProduct();
 }]);

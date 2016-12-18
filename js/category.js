/*
 * @Author: zhengwei
 * @Date:   2016-11-23 23:23:00
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-03 11:36:26
 */

'use strict';
var categoryController = myApp.controller('categoryController', ["$scope", "$http", "$sce", function($scope, $http, $sce) {
    $scope.getCategoryTitle = function() {
        $http({
            method: 'get',
            url: "http://mmb.ittun.com/api/getcategorytitle"
        }).success(function(data) {
            $scope.categorytitles = data.result;
        })
    }
    $scope.getCategoryTitle();
    $scope.getCategory = function(titleid) {
        $http({
            method: 'get',
            url: "http://mmb.ittun.com/api/getcategory",
            params: { 'titleid': titleid || 0 }
        }).success(function(data) {
            $scope.categoryes = data.result;
        })
    }
    $scope.getCategory();
}]);

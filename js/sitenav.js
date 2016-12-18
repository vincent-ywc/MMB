/*
 * @Author: zhengwei
 * @Date:   2016-10-25 11:03:24
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-06 16:11:13
 */

'use strict';
var sitenavController = myApp.controller('sitenavController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getSitenav = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getsitenav'
        }).success(function(data) {
            $scope.sitenavs = data.result;
            console.log($scope.sitenavs);
        });
    }
    $scope.getSitenav();
}]);

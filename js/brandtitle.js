/*
 * @Author: zhengwei
 * @Date:   2016-10-23 15:57:22
 * @Last Modified by:   zhengwei
 * @Last Modified time: 2016-12-06 16:17:31
 */

'use strict';
var brandtitleController = myApp.controller('brandtitleController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
    $scope.getBrandTitle = function() {
        $http({
            method: 'get',
            url: 'http://mmb.ittun.com/api/getbrandtitle'
        }).success(function(data) {
            $scope.brandtitles = data.result;
        });
    }
    $scope.getBrandTitle();
}]);

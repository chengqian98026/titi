/**
 * Created by hxsd on 2016/8/3.
 */
angular.module("myapp").controller("delicacyCon",function($scope,$http){
    $http.get("json/delicacyData.json").success(function(data){
        $scope.date=data
    });
    $scope.loadMore=function(){
        $http.get("json/delicacyData.json").success(function(data){
            Array.prototype.push.apply($scope.date,data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        });
    }
});
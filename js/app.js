/**
 * Created by hxsd on 2016/8/3.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("home",{url:"/home",templateUrl:"views/home/home.html"});
    $stateProvider.state("CustomRoute",{url:"/CustomRoute",templateUrl:"views/CustomRoute/CustomRoute.html"});
    $stateProvider.state("delicacy",{url:"/delicacy",templateUrl:"views/delicacy/delicacy.html",controller:"delicacyCon"});
    $stateProvider.state("delicacyDetails",{url:"/delicacyDetails",templateUrl:"views/delicacy/delicacyDetails/delicacyDetails.html"});
    $stateProvider.state("dressing",{url:"/dressing",templateUrl:"views/dressing/dressing.html"});
    $stateProvider.state("entry",{url:"/entry",templateUrl:"views/entry/entry.html"});
    $stateProvider.state("featureSpot",{url:"/featureSpot",templateUrl:"views/featureSpot/featureSpot.html",controller:"featureSpotCon"});
    $stateProvider.state("featureSpotDetails",{url:"/featureSpotDetails",templateUrl:"views/featureSpot/featureSpotDetails/featureSpotDetails.html"});
    $stateProvider.state("footmark",{url:"/footmark",templateUrl:"views/footmark/footmark.html"});
    $stateProvider.state("itinerary",{url:"/itinerary",templateUrl:"views/itinerary/itinerary.html"});
    $stateProvider.state("termini",{url:"/termini",templateUrl:"views/termini/termini.html"});
    $stateProvider.state("terminiDetails",{url:"/terminiDetails",templateUrl:"views/termini/terminiDetails/terminiDetails.html"});
    $urlRouterProvider.otherwise("/home")
}).controller("myCtrl",function($scope,$state){
    $scope.goUrl = function(id){
        $state.go(id);
    }
});
var app = angular.module('myApp',['ngRoute']);

app.controller('formCtrl',['$scope','$http', function($scope,$http){
        $scope.submit = function(cat) {
            $http({
                url: '/cat',
                method: 'post',
                data: cat
            }).then(function (response) {
                console.log(response.status);
                $scope.checkCats();
            });
        };

    $scope.checkCats = function() {
        $http({
            url: '/cat',
            method: 'get'
        }).then(function (response) {
            $scope.catList = response.data;

        });
    };
}]);


//app.service('shared', function () {
//    var catList = "";
//
//    return {
//        update: function () {
//            $http({
//                url: '/cat',
//                method: 'get'
//            }).then(function (response) {
//                catList = response.data;
//            });
//        }
//    }});

//app.controller('showCtrl',['$scope','$http', function($scope,$http){
//        $scope.checkCats = function() {
//            $http({
//                url: '/cat',
//                method: 'get'
//            }).then(function (response) {
//                $scope.catList = response.data;
//
//            });
//        };
//}]);






//$(document).ready(function(){
//
//    $("#catform").on("submit", submitCats);
//
//    fetchCats();
//});
//
//function submitCats(event){
//    event.preventDefault();
//
//    var catObject = {};
//    catObject.username = $("#username").val();
//
//    $.ajax({
//        type: "POST",
//        data: catObject,
//        url: "/cat",
//        success: function(anythingWeWant){
//            console.log(anythingWeWant);
//            fetchCats();
//        }
//    });
//
//}
//
//function fetchCats(){
//    $.ajax({
//        type: "GET",
//        url: "/cat",
//        success: function(data){
//            appendDom(data);
//        }
//    });
//}
//
//function appendDom(data){
//    $("#container").empty();
//    for(var i = 0; i < data.length; i++){
//        $("#container").append("<div></div>");
//
//        var $el = $("#container").children().last();
//        $el.append("<p>" + data[i].username + "</p>");
//    }
//}
'use strict';

/**
 * @ngdoc function
 * @name landingOrbitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingOrbitApp
 */
angular.module('landingOrbitApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
    
    $scope.scrollTo = function(id) {
    	$location.hash(id);
    	$anchorScroll();
  	};

  });

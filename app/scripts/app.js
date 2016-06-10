'use strict';

/**
 * @ngdoc overview
 * @name landingOrbitApp
 * @description
 * # landingOrbitApp
 *
 * Main module of the application.
 */
angular
  .module('landingOrbitApp', [
    'duScroll',
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
  });

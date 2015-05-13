'use strict';

angular.module('dashboardAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/register/my-register.html',
        controller: 'RegisterCtrl'
      });
  });
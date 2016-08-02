'use strict';

/**
 * @ngdoc function
 * @name angularjsYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsYoApp
 */
console.log(angularDragula(angular));
var angularjsYoApp = angular.module('angularjsYoApp', ['ui.tinymce', 'ngRoute', 'angularMoment', 'mwl.calendar', angularDragula(angular)])

  .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/sample', {
          templateUrl: '../views/sample.html',
          controller: 'TinyMceController'
        })
        .when('/main', {
          templateUrl: '../views/main.html',
          controller: 'MainCtrl'
        })
        .when('/logReport', {
          templateUrl: '../views/logReport.html',
          controller: 'LogReportCtrl'
        })
        .when('/login', {
          templateUrl: '../views/login.html',
          controller: 'LoginCtrl'
        })
        .when('/dragDrop', {
          templateUrl: '../views/dragdrop.html',
          controller: 'DragdropCtrl'
        })
        .when('/customPanel', {
          templateUrl: '../views/customPanel.html',
          controller: 'CustomPanelCtrl'
        })
        .when('/dragula', {
          templateUrl: '../views/dragula.html',
          controller: 'DragulaCtrl'
        })
        .when('/calendar', {
          templateUrl: '../views/calendar.html',
          controller: 'CalendarCtrl as vm'
        });

      $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
      });

    }]);


  angularjsYoApp.filter('nl2br', function(){
      return function(text) {
           var t = text.split("**");
           // ? text.replace(/\*\*/g,'<br/>'):''; //(/(?:\r\n|\r|\n)/g, '<br />'):''; //.replace(/\n/g, '<br>') : '';
           console.log(t);
           return t;
      };

    })

  .controller('MainCtrl', function ($log) {
    $log.debug('Entering MainCtrl controller');
  })





  ;



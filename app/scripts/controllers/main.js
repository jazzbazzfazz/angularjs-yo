'use strict';

/**
 * @ngdoc function
 * @name angularjsYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsYoApp
 */
angular.module('angularjsYoApp',['ui.tinymce','ngRoute','angularMoment','mwl.calendar'])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
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
      .when('/calendar', {
        templateUrl: '../views/calendar.html',
        controller: 'CalendarCtrl'
      });
$locationProvider.html5Mode({
  enabled: false,
  requireBase: false
});

}])

  .controller('MainCtrl', function ($log) {
      $log.debug('Entering MainCtrl controller');
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
  })
  
  .controller('TinyMceController', function($scope,$log) {
      $scope.data={};

      $scope.data.tinymceModel = 'Initial content';

      $scope.getContent = function() {
        console.log('Setting editor content to:', $scope.data.tinymceModel);
      }

  })

  .controller('LogReportCtrl', function($scope,$log) {
      $scope.last100rows = [
        {id:9, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:8, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:7, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:6, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:5, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:4, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:3, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:2, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'},
        {id:1, logtime:moment(), entry: 'Accessed user table', ip: '127.0.0.1',user:'jwalter'}
      ]

  })

  .controller('LoginCtrl', function($scope,$log) {


  })

  .controller('CalendarCtrl', function($scope,$log,moment) {
        $scope.calendarView="month";
        $scope.calendarDate = moment();
        $scope.calendarTitle = "Calendar Title";
        $scope.events = [
      {
        title: 'My event title', // The title of the event
        startsAt: new Date(2013,5,1,1), // A javascript date object for when the event starts
        endsAt: new Date(2014,8,26,15), // Optional - a javascript date object for when the event ends
        color: { // can also be calendarConfig.colorTypes.warning for shortcuts to the deprecated event types
          primary: '#e3bc08', // the primary event color (should be darker than secondary)
          secondary: '#fdf1ba' // the secondary event color (should be lighter than primary)
        },
        actions: [{ // an array of actions that will be displayed next to the event title
          label: '<i class=\'glyphicon glyphicon-pencil\'></i>', // the label of the action
          cssClass: 'edit-action', // a CSS class that will be added to the action element so you can implement custom styling
          onClick: function(args) { // the action that occurs when it is clicked. The first argument will be an object containing the parent event
            console.log('Edit event', args.calendarEvent);
          }
        }],
        draggable: true, //Allow an event to be dragged and dropped
        resizable: true, //Allow an event to be resizable
        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
        cssClass: 'a-css-class-name', //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
        allDay: false // set to true to display the event as an all day event on the day view
      }
];


})

  .controller('CustomPanelCtrl', function($scope,$log,moment) {

    $log.debug('Entering CustomPanelCtrl controller');
})


  .directive('draggableIconPanel', function($log) { // N.B. to refer to this panel, use hyphen-name, i.e. drag-event-panel
    $log.debug('Making custom directive dragEvent');
    return {
      controller: function() {

      },
      transclude: true,
      restrict: 'E',
      scope: {title: '@', details:'@', icon:'@', when: '@',color: '@'},
      link: function(scope,elem,attr,controller, transclude) {
          //elem.attr('title',scope.title);
          //elem.attr('details',scope.details);
          //elem.attr('icon',scope.icon);
          //elem.attr('when',scope.when);
          //elem.attr('color',scope.color);
      },
      templateUrl: '../views/draggableIconPanel.directive.html'
    }
})

  .directive('draggableActivityPanel', function($log) { // N.B. to refer to this panel, use hyphen-name, i.e. drag-event-panel
    $log.debug('Making custom directive dragEvent');
    return {
      controller: function() {

      },
      transclude: true,
      restrict: 'E',
      scope: {title: '@', details:'@', icon:'@', color: '@'},
      link: function(scope,elem,attr,controller, transclude) {
          //elem.attr('title',scope.title);
          //elem.attr('details',scope.details);
          //elem.attr('icon',scope.icon);
          //elem.attr('when',scope.when);
          //elem.attr('color',scope.color);
      },
      templateUrl: '../views/draggableActivityPanel.directive.html'
    }

})


;



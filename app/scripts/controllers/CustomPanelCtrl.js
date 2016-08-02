angularjsYoApp
  .controller('CustomPanelCtrl', function ($scope, $log, moment) {

    $log.debug('Entering CustomPanelCtrl controller');
  })

  .directive('draggableIconPanel', function ($log) { // N.B. to refer to this panel, use hyphen-name, i.e. drag-event-panel
    $log.debug('Making custom directive dragEvent');
    return {
      controller: function () {

      },
      transclude: true,
      restrict: 'E',
      scope: { title: '@', details: '@', icon: '@', when: '@', color: '@' },
      link: function (scope, elem, attr, controller, transclude) {
        //elem.attr('title',scope.title);
        //elem.attr('details',scope.details);
        //elem.attr('icon',scope.icon);
        //elem.attr('when',scope.when);
        //elem.attr('color',scope.color);
      },
      templateUrl: '../views/draggableIconPanel.directive.html'
    }
  })

  .directive('draggableActivityPanel', function ($log) { // N.B. to refer to this panel, use hyphen-name, i.e. drag-event-panel
    $log.debug('Making custom directive dragEvent');
    return {
      controller: function () {

      },
      transclude: true,
      restrict: 'E',
      scope: { title: '@', details: '@', icon: '@', color: '@' },
      link: function (scope, elem, attr, controller, transclude) {
        //elem.attr('title',scope.title);
        //elem.attr('details',scope.details);
        console.log(scope.details);
        var t = scope.details.split("**");
        console.log(t);
        scope.list = t;

        //elem.attr('icon',scope.icon);
        //elem.attr('when',scope.when);
        //elem.attr('color',scope.color);
      },
      templateUrl: '../views/draggableActivityPanel.directive.html'
    }

  })
  



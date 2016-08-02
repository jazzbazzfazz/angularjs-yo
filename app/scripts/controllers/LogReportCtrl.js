angularjsYoApp.controller('LogReportCtrl', function ($scope, $log) {
    $scope.last100rows = [
      { id: 9, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 8, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 7, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 6, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 5, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 4, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 3, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 2, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' },
      { id: 1, logtime: moment(), entry: 'Accessed user table', ip: '127.0.0.1', user: 'jwalter' }
    ]

  });

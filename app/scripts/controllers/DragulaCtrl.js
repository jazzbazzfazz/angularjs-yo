angularjsYoApp
  .controller('DragulaCtrl', function ($scope, $log) {

  $scope.$on('second-bag.drag', function (e, el) {
    el.removeClass('ex-moved');
  });

  $scope.$on('second-bag.drop', function (e, el) {
    el.addClass('ex-moved');
  });

  $scope.$on('second-bag.over', function (e, el, container) {
    container.addClass('ex-over');
  });

  $scope.$on('second-bag.out', function (e, el, container) {
    container.removeClass('ex-over');
  });

  });



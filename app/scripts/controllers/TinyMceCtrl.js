angularjsYoApp
  .controller('TinyMceController', function ($scope, $log) {
    $scope.data = {};

    $scope.data.tinymceModel = 'Initial content';

    $scope.getContent = function () {
      console.log('Setting editor content to:', $scope.data.tinymceModel);
    }

  });


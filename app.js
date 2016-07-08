angular.module('peerAngular', []);

angular.module('peerAngular').controller('MainController', function($scope){
  
  $scope.taskList = [];

  $scope.addItem = function() {
    $scope.taskList.push({task: $scope.task, remove: false});
    $scope.task = '';
  }

  $scope.removeTask = function(taskIndex) {
    $scope.taskList.splice(taskIndex, 1);
  }

  $scope.removeSelected = function() {
    for (var i = $scope.taskList.length-1; i >= 0; i--) {
      if ($scope.taskList[i].remove) {
        $scope.taskList.splice(i, 1);
      }
    }
  }
})

angular.module('peerAngular', []);

angular.module('peerAngular').controller('MainController', function($scope){
  //create empty array to push new tasks
  $scope.taskList = [];
  //set $scope.task to initialize initial length of 0
  $scope.task = '';

  //store current value of .task, and push into array with an additional key
  //of 'remove' set to false to be used for removing multiple items
  $scope.addItem = function() {
    //if no text entered in for, return an error to user
    if ($scope.task.length < 1) {
      $scope.invalid = 'Please enter a task';
      return;
    }
    //otherwise store task into task array
    else{
      $scope.invalid = '';
      $scope.taskList.push({task: $scope.task, remove: false});
      $scope.task = '';
    }
  }

  //pass in $index from html loop, and splice the array to remove item from array
  $scope.removeTask = function(taskIndex) {
    $scope.taskList.splice(taskIndex, 1);
  }

  //check if remove key in each indicie(sp?) is true or false. if true, splice
  //out of array.
  $scope.removeSelected = function() {
    for (var i = $scope.taskList.length-1; i >= 0; i--) {
      if ($scope.taskList[i].remove) {
        $scope.taskList.splice(i, 1);
      }
    }
  }

  //set all remove keys in the array of objects to true to toggle checkbox to checked
  $scope.selectAll = function() {
    for (var i = 0; i < $scope.taskList.length; i++) {
      $scope.taskList[i].remove = true;
    }
  }

  $scope.logArray = function() {
    //testing purposes, view the object array by clicking on footer
    console.log($scope.taskList);
  }

})

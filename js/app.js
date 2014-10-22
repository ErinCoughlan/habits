angular.module('myApp', [])
.controller('MainCtrl', function($scope, $timeout) {
  var APP_ID = '1Bz6knbLnLGXW2zNwvpeZpVEmh1bPNj747kqKa2m';
  var PARSE_KEY = 'WbGkYTmvYq7p12sFGLgYeenoU4jMBOdK1ymu4URw';

  var filteredSongs = [];
  var pageLimit = 20;

  $scope.date = {};
  $scope.songs = [];

  Parse.initialize(APP_ID, PARSE_KEY);

  /**
   * Creates a new user.
   */
  var createNewUser = function(username, password) {
    var user = new Parse.User();
    user.set("username", username);
    user.set("password", password);
      
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });
  };
  
});


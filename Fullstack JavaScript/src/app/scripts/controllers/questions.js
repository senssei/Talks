'use strict';

/**
 * @ngdoc function
 * @name fullstackNodeJsApp.controller:QuestionsCtrl
 * @description
 * # QuestionsCtrl
 * Controller of the fullstackNodeJsApp
 */
 angular.module('fullstackNodeJsApp')
 .controller('QuestionsCtrl', function ($scope) {

  $scope.questions = [{
    title : 'How to combine two lines from the bash prompt?',
    text : 'I am trying to craft a script to perform curl requests on webservers and parse out the server and Location.  This way I can easily import it into my excel tables without having to reformat. I am trying to craft a script to perform curl requests on webservers and parse out the server and Location.  This way I can easily import it into my excel tables without having to reformat. I am trying to craft a script to perform curl requests on webservers and parse out the server and Location.  This way I can easily import it into my excel tables without having to reformat. ',
    author : 'ajaaskel',
    views : 19,
    answers : [
    {
      author: 'polyphemus11',
      text: 'Output of curl contains return i.e.  character(s) which will cause that behaviour. Please try this to confirm that:',
      checked : true
    }],
    tags : ['bash' , 'curl', 'paste', 'lines']
  },
  {
    title : 'Haskell IO method that does nothing',
    text : 'I am just beginning Android programming as a college course, and have hit a roadblock. My program is simply supposed to have a button that switches back and forth between two different activities. I am writing this in Android Studio. Here is the code I have currently.' ,
    author : 'Frustrated User',
    views : 19,
    answers : [
    {
      author: 'Mohammad Rahchamani',
      text: 'I think you just forgot to add ActivityB to your manifest your manifest should be something like this',
      checked : false
    }],
    tags : ['android' , 'android-studio', 'onclicklistener']
  }];



});

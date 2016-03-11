wogApp.controller('userMainCtrl', userMainCtrl);

function userMainCtrl($rootScope, $scope) {
  
  $rootScope.title = '/ Кабінет користувача';
  $rootScope.page_img = 'main';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.main')).addClass('active');
  
  $.getScript("scripts/jquery/test.js", function(){
  alert("Script loaded and executed.");
});
}
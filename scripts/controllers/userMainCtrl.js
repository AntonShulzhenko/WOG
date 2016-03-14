wogApp.controller('userMainCtrl', userMainCtrl)

function userMainCtrl ($rootScope, $scope, $filter, NgTableParams) {

  $rootScope.title = '/ Кабінет користувача';
  $rootScope.page_img = 'main';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.main')).addClass('active');

  //  $.getScript("scripts/lib/footable.js", function () {
  //    console.log("Script footable - ready");
  //    $('.table').footable();
  //  });    
};

wogApp.controller('sustemOppCtrl', sustemOppCtrl);

function sustemOppCtrl($rootScope, $scope) {

  $rootScope.title = '/ Можливості системи';
  $rootScope.page_img = 'settings';
  angular.element($('.nav_list li')).removeClass('active');
  
  
}
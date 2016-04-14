wogApp.controller('transitScoreCtrl', transitScoreCtrl)

function transitScoreCtrl($rootScope, $scope) {
  $rootScope.title = '/ Транзитний рахунок';
  $rootScope.page_img = 'transit';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.transit')).addClass('active');

};
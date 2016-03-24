wogApp.controller('transitScoreCtrl', transitScoreCtrl)

function transitScoreCtrl($rootScope, $scope) {
  $rootScope.title = '/ Транзитний рахунок';
  $rootScope.title_second = '/ Налаштування рахунку';
  $rootScope.page_img = 'transit';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.transit')).addClass('active');
//  angular.element
};
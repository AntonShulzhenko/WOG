wogApp.controller('transitScoreCtrl', transitScoreCtrl)

function transitScoreCtrl($rootScope, $scope) {
  $rootScope.title = '/ Транзитний рахунок';
  $rootScope.page_img = 'transit';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.transit')).addClass('active');
  $('.transit_nav li').on('click', function(){
  });
//  active_transit_list
  //  angular.element
};
wogApp.controller('sustemOppCtrl', sustemOppCtrl);

function sustemOppCtrl($rootScope, $scope) {

  $rootScope.title = '/ Можливості системи';
  $rootScope.page_img = 'settings';
  angular.element($('.nav_list li')).removeClass('active');
  
  $scope.slider_header = [
    {
      name: 'Контролюйте витрати всіх підрозділів'
    },
    {
      name: 'Зручне управління  картками та рахунками'
    },
    {
      name: 'Оптимізація використання  рахунків та планування'
    },
    {
      name: 'Оптимізація використання  рахунків та планування'
    }
  ]
}
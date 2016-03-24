wogApp.controller('userDataCtrl', userDataCtrl);

function userDataCtrl($scope) {
  $scope.menu_items = [
    {
      name: 'Головна',
      href: 'main',
      class: 'main'
    }, {
      name: 'Підрозділи компанії',
      href: 'company-departments',
      class: 'company-departments'
    }, {
      name: 'Транзитний рахунок',
      href: 'transit.score_settings',
      class: 'transit'
    }, {
      name: 'Звіти',
      href: 'reports',
      class: 'reports'
    }, {
      name: 'Термінальна мережа',
      href: 'terminal',
      class: 'terminal'
    }, {
      name: 'Управління компаніями',
      href: 'company-control',
      class: 'company-control'
    }, {
      name: 'Кабінет користувача',
      href: 'settings',
      class: 'settings'
    }
  ]
  
  $scope.transit = 'transit.score_settings'
  
  $scope.user = {
    money: '120000000 грн.',
    days: '25'
  }
}
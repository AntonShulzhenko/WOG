wogApp.controller('tableCardsCtrl', function ($scope, $filter, ngTableParams) {

  $scope.users = [{
    'card': '1111 2222 3333 4444',
    'type': 'Основний',
    'master': 'Константинопольський К.К.',
    'info': 'АС 69-69 АВ ',
    'phone': '+380 (67) 555-16-24 ',
    'limits': '+',
    'period': '+',
    'status': 'on_card'
  }, {
    'card': '2222 3333 5555 7777',
    'type': 'Основний',
    'master': 'Константинопольський К.К.',
    'info': 'АС 69-69 АВ ',
    'phone': '+380 (67) 555-16-24 ',
    'limits': '+',
    'period': '+',
    'status': 'off_card'
  }, {
    'card': '9999 8888 4444 2222',
    'type': 'Основний',
    'master': 'Константинопольський К.К.',
    'info': 'АС 69-69 АВ ',
    'phone': '+380 (67) 555-16-24 ',
    'limits': '+',
    'period': '+',
    'status': 'off_timeout_card'
  }, ];

  $scope.cardTable = new ngTableParams({
    page: 1,
    count: 10
  }, {
    total: $scope.users.length,
    getData: function ($defer, params) {
      $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
      $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
      $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
      $defer.resolve($scope.data);
    }
  });

});
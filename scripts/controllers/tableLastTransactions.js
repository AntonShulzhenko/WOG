wogApp.controller('tableLastTransactions', function ($scope, $filter, ngTableParams) {
  $scope.user_last_trans = [
    {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '1111 2222 3333 4444',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'fuel_type': 'dp_mustang_plus',
      'fuel_vol': '500 л.',
      'money': '1 000 000'
    },
    {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '2222 2222 3333 4444',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'fuel_type': 'dp_mustang',
      'fuel_vol': '500 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '3333 2222 2222 4444',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'fuel_type': 'mustang_92',
      'fuel_vol': '500 л.',
      'money': '1 000 000'
    },
    {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '3333 2222 2222 4444',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'fuel_type': 'mustang_95',
      'fuel_vol': '500 л.',
      'money': '1 000 000'
    },    {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '4444 3333 2222 2222',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'fuel_type': 'mustang_100',
      'fuel_vol': '500 л.',
      'money': '1 000 000'
    },   {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '4444 3333 2222 2222',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'fuel_type': 'lgp_mustang',
      'fuel_vol': '500 л.',
      'money': '1 000 000'
    },
  ]
  $scope.transTable = new ngTableParams({
    page: 1,
    count: 10
  }, {
    total: $scope.user_last_trans.length,
    getData: function ($defer, params) {
      $scope.data = params.sorting() ? $filter('orderBy')($scope.user_last_trans, params.orderBy()) : $scope.user_last_trans;
      $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
      $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
      $defer.resolve($scope.data);
    }
  });
});
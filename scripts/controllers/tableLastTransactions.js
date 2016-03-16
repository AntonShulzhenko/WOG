wogApp.controller('tableLastTransactions', function ($scope, $filter, ngTableParams) {
  $scope.user_last_trans = [
    {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '11111111111111111 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
      'money': '1 000 000'
    }, {
      'transactionData': '10/11/2015',
      'transactionTime': '12:00',
      'pay_type': 'Оплата  пального',
      'card': '22222222222222222 ',
      'master': 'Константинопольський К.К.',
      'check_number': '125449879322',
      'azk': 'Волинська філія «Київський Майдан»',
      'resourse': '',
      'fuel_vol': '50 л.',
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
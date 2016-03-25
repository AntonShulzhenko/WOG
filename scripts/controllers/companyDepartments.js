wogApp.controller('companyDepartments', companyDepartments)

function companyDepartments($scope, $rootScope) {
  $rootScope.title = '/ Підрозділи компанії';
  $rootScope.title_second = '';
  $rootScope.page_img = 'company-departments';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.company-departments')).addClass('active');

  $rootScope.user_departments = [
    {
      dept_name: 'Автобусний  парк',
      dept_bal: '5000'
    },

    {
      dept_name: 'Дальнобійники',
      dept_bal: '256'
    },
    {
      dept_name: 'Технічний відділ',
      dept_bal: '256'
    }
  ]
};
wogApp.controller('clientMessager', function ($scope) {
  $scope.massages_to_user = [
    {
      date: '12/05/2015',
      time: '12:05',
      text: 'Совместные поездки - это просто, выгодно и интересно.       Несколько людей путешествуют вместе на авто      мобиле и делят расходы на поездку.Вероятно,      вы часто так делаете с друзьями '
    },
    {
      date: '12/05/2015',
      time: '12:05',
      text: 'Совместные поездки - это просто, выгодно и интересно.       Несколько людей путешествуют вместе на авто      мобиле и делят расходы на поездку.Вероятно,       вы часто так делаете с друзьями '
    }
  ]
  if ($scope.massages_to_user.length == 1) {
    $scope.word_num = 'нове'
  }
  else {
    $scope.word_num = 'нових'
  }
});
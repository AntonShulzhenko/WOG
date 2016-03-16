wogApp.controller('userMainCtrl', userMainCtrl)

function userMainCtrl($rootScope, $scope) {




  setTimeout(function () {
    $('#year').trigger('click');
  }, 1500)
  $rootScope.title = '/ Кабінет користувача';
  $rootScope.page_img = 'main';
  angular.element($('.nav_list li')).removeClass('active');
  angular.element($('.main')).addClass('active');


  //  $.ajax({
  //    url: 'scripts/lib/footable.js',
  //    cashe: 'true',
  //    success: addResp
  //  });
  //
  //  function addResp() {
  //    $('.table').footable();
  //    console.log('footabled');
  //  }
  //  $('.min_card_operation ').on('click', function () {
  //    $('.table').footable();
  //    console.log('footabled');
  //  })
  //  $('.min_card_operation').keyup(function () {
  //    setTimeout(function () {
  //      $('.min_card_operation ').trigger('click');
  //    }, 200)
  //  })


  $.ajax({
    url: 'scripts/lib/highcharts.js',
    cashe: 'true',
    success: function () {
      $('#year').trigger('click');
    }
  })


  var yearArrCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var yearArrLines = [{
    name: 'ДП мустанг',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 7.0, 6.9, 9.5, 14.5, 0]
        }, {
    name: 'ДП мустанг +',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, -0.2, 0.8, 5.7, 11.3]
        }, {
    name: '95',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, -0.9, 0.6, 3.5, 8.4, 13.5]
        }, {
    name: '92',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 3.9, 4.2, 5.7, 8.5, 11.9]
        }, {
    name: '100',
    data: [4.9, 4.2, 6.7, 8.5, 11.9, 18.2, 17.0, 4.9, 4.2, 6.7, 8.5, 11.9]
        }, {
    name: 'LGB',
    data: [7.9, 5.2, 8.7, 1.5, 15.9, 14.2, 14.0, 7.9, 5.2, 8.7, 1.5, 15.9]
        }]

  var weekArrCategories = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  var weekArrLines = [{
    name: 'ДП мустанг',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, ]
        }, {
    name: 'ДП мустанг +',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, ]
        }, {
    name: '95',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, ]
        }, {
    name: '92',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, ]
        }, {
    name: '100',
    data: [4.9, 4.2, 6.7, 8.5, 11.9, 18.2, 17.0, ]
        }, {
    name: 'LGB',
    data: [7.9, 5.2, 8.7, 1.5, 15.9, 14.2, 14.0, ]
        }]

  var dayArrCategories = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];

  var dayArrLines = [{
    name: 'ДП мустанг',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 88.3, 18.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13.9, 9.6]
        }, {
    name: 'ДП мустанг +',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }, {
    name: '95',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0, -0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        }, {
    name: '92',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
    name: '100',
    data: [4.9, 4.2, 6.7, 8.5, 11.9, 18.2, 17.0, 14.6, 14.2, 17.3, 6.6, 4.8]
        }, {
    name: 'LGB',
    data: [7.9, 5.2, 8.7, 1.5, 15.9, 14.2, 14.0, 6.6, 14.2, 7.3, 6.3, 2.8]
        }]



  var monthArrCategories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  var monthArrLines = [{
    name: 'ДП мустанг',
    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 0, 0, 0, 26.5, 9.6, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8, 3.9, 4.2, 5.7, 8.5, 11.9, 15.2]
        }, {
    name: 'ДП мустанг +',
    data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.3, 9.0, 3.5, 8.4, 13.5, 17.0, 1]
        }, {
    name: '95',
    data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.5, 8.4, 13.5, 17.0, 1, 3.5, 8.4, 13.5, 17.0, 1]
        }, {
    name: '92',
    data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8, 3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }, {
    name: '100',
    data: [4.9, 4.2, 6.7, 8.5, 11.9, 18.2, 17.0, 14.6, 14.2, 17.3, 6.6, 4.8, 6.7, 8.5, 11.9, 18.2, 17.0, 14.6, 14.2, 17.3, 6.6, 4.8, 0, 6.7, 8.5, 11.9, 18.2, 0, 0, 17.0, 14.6]
        }, {
    name: 'LGB',
    data: [7.9, 5.2, 8.7, 1.5, 15.9, 14.2, 14.0, 6.6, 14.2, 7.3, 6.3, 2.8]
        }]


  $('#day').click(function () {
    createDiagram(dayArrCategories, dayArrLines, 'За добу')
  });

  $('#week').click(function () {
    createDiagram(weekArrCategories, weekArrLines, 'За тиждень');
  })
  $('#year').on('click', function () {
    createDiagram(yearArrCategories, yearArrLines, 'За рік');
  });

  $('#month').on('click', function () {
    createDiagram(monthArrCategories, monthArrLines, 'За місяць');
  });




  function createDiagram(categoriesArr, linesArr, textTitle) {
    if ($('body').width() < 767) {
      var legendLayout = 'horizontal',
        legendVAlign = 'bottom',
        offsetY = 0,
        legendAlign = 'center'
    } else {
      var legendLayout = 'vertical',
        legendVAlign = 'top',
        offsetY = 50,
        legendAlign = 'right'
    }

    $('#container_diagram').highcharts({
      title: {
        text: textTitle
      },
      chart: {
        type: 'line',
        zoomType: 'xy'
      },
      subtitle: {

      },
      xAxis: {
        categories: categoriesArr,
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 1
      },
      yAxis: {
        gridLineDashStyle: 'ShortDot',
        title: {
          text: ''
        }
      },
      tooltip: {
        valueSuffix: ' л'
      },
      legend: {
        layout: legendLayout,
        align: legendAlign,
        verticalAlign: legendVAlign,
        y: offsetY,
        padding: 3,
        itemMarginTop: 5,
        itemMarginBottom: 5,
        itemStyle: {
          lineHeight: '14px'
        }
      },
      series: linesArr
    });
  }
}
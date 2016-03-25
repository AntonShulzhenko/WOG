angular.module('wogApp.vidget', [])
  .controller('vidgetCtrl', function ($scope, $compile, $rootScope) {

    $.ajax({
      url: 'scripts/lib/dragula.js',
      cashe: true,
      success: function () {
        addDrag();
        console.log('DRAGULA')
      }
    })

    function addDrag() {
      dragula([document.querySelector('.dragme'), document.querySelector('.vidget_min')], {
        moves: function (el, container, handle) {
          return handle.className === 'darg_on_me';
        }
      })
    }
  
    $rootScope.openClose = function (e) {
      console.log('mobile-check')
      var btn = $(e.target);
      btn.closest('tr').toggleClass('mobile-table-el');
    }
//    $scope.modal_img = 'mustang_95';
    $scope.getModalSourse = function(item_class){
      $scope.modal_img = item_class;
      console.log($scope.modal_img);
    };
    
    setTimeout(function () {
      try {
        $('#week_fuel').trigger('click');
        $('#week_money').trigger('click');
        $('.table input').attr('placeholder', 'Пошук за номером карти');
        $('.min_card_operation .ng-table-sort-header th:first-child').on('click', function () {
          $(this).closest('table').find('input[type=checkbox]').attr('checked', 'checked');
        });
      } catch (e) {
        //        do nothing
      }
    }, 1000);

    $('.hide_vidget').on('click', function () {
      $(this).closest('.vidget').toggleClass('hide_to_head');
    });

    $('.close_vidget').on('click', function () {
      $(this).closest('.vidget').prependTo('.vidget_min');
    });

    $('.card_control_panel ul li:first-child').on('click', function () {
      $(this).parent().toggleClass('open_table_panel');
    })

    $('.buttons_control_panel button').on('click', function () {
      $(this).addClass('active_btn');
      $(this).siblings().removeClass('active_btn');
    });

    $('.show_vidget_min').on('click', function () {
      $(this).closest('.vidget').appendTo('.viget_full');
    });

    $('.check_type_subsection .ion-ios-arrow-down').on('click', function () {
      $(this).parent().toggleClass('opened');
      $('.check_type_subsection li').on('click', function () {
        $(this).addClass('active_template_item');
        $(this).siblings().removeClass('active_template_item');
        $(this).closest('div').removeClass('opened');
      });
    });
  })

.directive('vidgetControlPanel', function ($compile) {
  return {
    restrict: 'E',
    scope: {
      content: '@'
    },
    template: '<div class="vidget_control_panel">' + '<span class="hide_vidget">_</span><span class="darg_on_me" data-title="Перетяніть для зміни положення">...</span><span class="close_vidget">×</span>' + '</div>'
  }
})

.directive('cardControlPanel', function () {
  return {
    restrict: 'E',
    scope: {
      content: '@'
    },
    template: '<div class="card_control_panel">' +
      '<ul>' +
      '<li><a href="#"> Змінити: </a></li>' +
      '<li><a href="#"> Статус </a></li>' +
      '<li><a href="#"> Ресурси </a></li>' +
      '<li><a href="#"> Послуги </a></li>' +
      '<li><a href="#"> Термінали  </a></li>' +
      '<li><a href="#"> Інше  </a></li>' + '</ul>' + '</div>'
  }
})

.directive('checkType', function () {
  return {
    restrict: 'E',
    scope: {
      content: '@'
    },
    template: '<div class="check_type_subsection">' + '<div>' + '<i class="ion-ios-arrow-down"></i>' + '<ul>' +
      '<li class="active_template_item">Автомобільний транспорт</li>' +
      '<li>Трактор транспорт</li>' +
      '<li>Вантажный транспорт</li>' +
      '<li>Поезд транспорт</li>' +
      '</ul>' + '<span>Підрозділ</span>' + '</div>' + '<div>' + '<i class="ion-ios-arrow-down"></i>' + '<ul>' +
      '<li class="active_template_item">Всі рахунки</li>' +
      '<li>Виплаты выплаты</li>' +
      '<li>Нема виплат</li>' +
      '<li>Еще что-то</li>' +
      '</ul>' + '<span>Ресурс</span>' + '</div>' +
      '<div class="calendar_vidget">' + '<i class="ion-calendar"></i>' + '<span> 01.01.2015  — 31.01.2015</span>' + '</div>' +
      '</div>'
  }
});
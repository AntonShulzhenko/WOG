angular.module('wogApp.vidget', [])
  .controller('vidgetCtrl', function ($scope, $compile, $rootScope, widgetControlService) {

    widgetControlService.checkReloadStorage();

    function findWidget(btn) {
      var widget_name = btn.closest('.w_min').parent().attr('data-w-min-id');
      widgetControlService.checkStorage(widget_name, 'close');
      widgetControlService.checkReloadStorage(widget_name);
      $('.active_btn').trigger('click');
    }

    $scope.fromStash = function (e) {
      var btn = $(e.currentTarget);
      findWidget(btn);
    }

    $.ajax({
      url: 'scripts/lib/dragula.js',
      cashe: true,
      success: function () {
        addDrag();
      }
    })

    function addDrag() {
      dragula([document.querySelector('.dragme')], {
        moves: function (el, container, handle) {
          return handle.className === 'darg_on_me';
        }
      })
    }

    $scope.openClose = function (e) {
      var btn = $(e.target);
      btn.closest('tr').toggleClass('mobile-table-el');
    }

    $scope.getModalSourse = function (item_class) {
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
    }, 1500);

  })

.directive('vidgetControlPanel', function ($compile, widgetControlService) {
  return {
    //    restrict: 'E',
    template: '<div class="vidget_control_panel" data-panel-id="">' + '<span class="hide_vidget" ng-click="hideEl()">_</span><span class="darg_on_me" data-title="Перетяніть для зміни положення">...</span><span class="close_vidget" ng-click="toStash()">×</span>' + '</div>',
    link: function (scope, elem, attrs) {
      scope.hideEl = function () {
        var widget_name = elem.parent().attr('data-widget-id');
        //        console.log(widget_name);
        widgetControlService.checkStorage(widget_name, 'minimize');
        widgetControlService.checkReloadStorage(widget_name);
      }
      scope.toStash = function () {

        //        console.log('to stash');
        var widget_name = elem.parent().attr('data-widget-id');
        widgetControlService.checkStorage(widget_name, 'close');
        widgetControlService.checkReloadStorage(widget_name);
      }

    }
  }
})

.directive('cardControlPanel', function () {
  return {
    link: function (scope, elem, attrs) {
      scope.openTablePanel = function () {
        console.log($('.card_control_panel'));
        $('.card_control_panel').find('ul').toggleClass('open_table_panel');
      }
    },
    template: '<div class="card_control_panel">' +
      '<ul>' +
      '<li ng-click=openTablePanel()><a href="#"> Змінити: </a></li>' +
      '<li><a href="#"> Статус </a></li>' +
      '<li><a href="#"> Ресурси </a></li>' +
      '<li><a href="#"> Послуги </a></li>' +
      '<li><a href="#"> Термінали  </a></li>' +
      '<li><a href="#"> Інше  </a></li>' + '</ul>' + '</div>'
  }
})

.directive('checkType', function () {
  return {
    link: function (scope, elem, attrs) {
      $('.buttons_control_panel button').on('click', function () {
        $(this).addClass('active_btn');
        $(this).siblings().removeClass('active_btn');
      });

      $('.check_type_subsection .ion-ios-arrow-down').on('click', function () {
        $(this).parent().toggleClass('opened');
        $('.check_type_subsection li').on('click', function () {
          $(this).addClass('active_template_item');
          $(this).siblings().removeClass('active_template_item');
          $(this).closest('div').removeClass('opened');
        });
      })
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